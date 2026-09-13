/**
 * --------------------------------------------------------------------------
 * CoreUI dom/event-handler.js
 * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
 *
 * This is a modified version of the Bootstrap's dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import { getjQuery } from '../util/index.js'

/**
 * Constants
 */

const namespaceRegex = /[^.]*(?=\..*)\.|.*/
const stripNameRegex = /\..*/
const stripUidRegex = /::\d+$/
const eventRegistry = {} // Events storage
let uidEvent = 1
const customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
}

const nativeEvents = new Set([
  'click',
  'dblclick',
  'mouseup',
  'mousedown',
  'contextmenu',
  'mousewheel',
  'DOMMouseScroll',
  'mouseover',
  'mouseout',
  'mousemove',
  'selectstart',
  'selectend',
  'keydown',
  'keypress',
  'keyup',
  'paste',
  'orientationchange',
  'touchstart',
  'touchmove',
  'touchend',
  'touchcancel',
  'pointerdown',
  'pointermove',
  'pointerup',
  'pointerleave',
  'pointercancel',
  'gesturestart',
  'gesturechange',
  'gestureend',
  'focus',
  'blur',
  'change',
  'input',
  'reset',
  'select',
  'submit',
  'focusin',
  'focusout',
  'load',
  'unload',
  'beforeunload',
  'resize',
  'move',
  'DOMContentLoaded',
  'readystatechange',
  'error',
  'abort',
  'scroll'
])

/**
 * Private methods
 */

function makeEventUid(element, uid) {
  return (uid && `${uid}::${uidEvent++}`) || element.uidEvent || uidEvent++
}

function getElementEvents(element) {
  const uid = makeEventUid(element)

  element.uidEvent = uid
  eventRegistry[uid] = eventRegistry[uid] || {}

  return eventRegistry[uid]
}

// `mouseenter` and `mouseleave` ride on `mouseover` and `mouseout`, which also fire when
// the pointer moves between descendants of the listening element. Drop those events, so the
// handler only sees the pointer entering or leaving `delegateTarget` itself.
// `Node.contains()` is inclusive, so this also covers `relatedTarget === delegateTarget`.
function isMouseEventWithinTarget(event) {
  const { delegateTarget, relatedTarget } = event

  return Boolean(relatedTarget && delegateTarget.contains(relatedTarget))
}

function bootstrapHandler(element, fn, handlerTypeEvent) {
  const isCustomMouseEvent = handlerTypeEvent in customEvents

  return function handler(event) {
    const coreuiEvent = hydrateObj(event, { delegateTarget: element })

    if (isCustomMouseEvent && isMouseEventWithinTarget(coreuiEvent)) {
      return
    }

    if (handler.oneOff) {
      EventHandler.off(element, handlerTypeEvent, fn)
    }

    return fn.apply(element, [coreuiEvent])
  }
}

function bootstrapDelegationHandler(element, selector, fn, handlerTypeEvent) {
  const isCustomMouseEvent = handlerTypeEvent in customEvents

  return function handler(event) {
    const domElements = element.querySelectorAll(selector)

    for (let { target } = event; target && target !== this; target = target.parentNode) {
      for (const domElement of domElements) {
        if (domElement !== target) {
          continue
        }

        const coreuiEvent = hydrateObj(event, { delegateTarget: target })

        if (isCustomMouseEvent && isMouseEventWithinTarget(coreuiEvent)) {
          return
        }

        if (handler.oneOff) {
          EventHandler.off(element, handlerTypeEvent, selector, fn)
        }

        return fn.apply(target, [coreuiEvent])
      }
    }
  }
}

function findHandler(events, callable, handlerTypeEvent, delegationSelector = null) {
  return Object.values(events)
    .find(event => event.callable === callable && event.handlerTypeEvent === handlerTypeEvent && event.delegationSelector === delegationSelector)
}

// `typeEvent` is the DOM event type the listener is registered under. `handlerTypeEvent` is
// the type the caller asked for. The two differ only for `mouseenter` and `mouseleave`, which
// the registry must keep apart from the `mouseover` and `mouseout` listeners they share.
function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
  const isDelegated = typeof handler === 'string'
  // TODO: tooltip passes `false` instead of selector, so we need to check
  const callable = isDelegated ? delegationFunction : (handler || delegationFunction)
  // Strip the namespace to get the plain event ('click.coreui.button' --> 'click')
  const baseTypeEvent = originalTypeEvent.replace(stripNameRegex, '')
  let typeEvent = customEvents[baseTypeEvent] || baseTypeEvent

  if (!nativeEvents.has(typeEvent)) {
    typeEvent = originalTypeEvent
  }

  const handlerTypeEvent = baseTypeEvent in customEvents ? baseTypeEvent : typeEvent

  return {
    isDelegated, callable, typeEvent, handlerTypeEvent
  }
}

function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return
  }

  const { isDelegated, callable, typeEvent, handlerTypeEvent } = normalizeParameters(originalTypeEvent, handler, delegationFunction)
  const events = getElementEvents(element)
  const handlers = events[typeEvent] || (events[typeEvent] = {})
  const previousFunction = findHandler(handlers, callable, handlerTypeEvent, isDelegated ? handler : null)

  if (previousFunction) {
    previousFunction.oneOff = previousFunction.oneOff && oneOff

    return
  }

  const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''))
  const fn = isDelegated ?
    bootstrapDelegationHandler(element, handler, callable, handlerTypeEvent) :
    bootstrapHandler(element, callable, handlerTypeEvent)

  fn.delegationSelector = isDelegated ? handler : null
  fn.callable = callable
  fn.handlerTypeEvent = handlerTypeEvent
  fn.oneOff = oneOff
  fn.uidEvent = uid
  handlers[uid] = fn

  element.addEventListener(typeEvent, fn, isDelegated)
}

function removeHandler(element, events, typeEvent, handler) {
  element.removeEventListener(typeEvent, handler, Boolean(handler.delegationSelector))
  delete events[typeEvent][handler.uidEvent]
}

function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  const storeElementEvent = events[typeEvent] || {}

  for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
    if (handlerKey.includes(namespace)) {
      removeHandler(element, events, typeEvent, event)
    }
  }
}

function getTypeEvent(event) {
  // allow to get the native events from namespaced events ('click.coreui.button' --> 'click')
  event = event.replace(stripNameRegex, '')
  return customEvents[event] || event
}

const EventHandler = {
  on(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, false)
  },

  one(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, true)
  },

  off(element, originalTypeEvent, handler, delegationFunction) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return
    }

    const { isDelegated, callable, typeEvent, handlerTypeEvent } = normalizeParameters(originalTypeEvent, handler, delegationFunction)
    // The caller gave a namespace when neither event type matches what they passed in.
    // `handlerTypeEvent` must take part, or plain `mouseenter` looks namespaced next to `mouseover`.
    const inNamespace = typeEvent !== originalTypeEvent && handlerTypeEvent !== originalTypeEvent
    const events = getElementEvents(element)
    const storeElementEvent = events[typeEvent] || {}
    const isNamespace = originalTypeEvent.startsWith('.')

    if (typeof callable !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!Object.keys(storeElementEvent).length) {
        return
      }

      const fn = findHandler(storeElementEvent, callable, handlerTypeEvent, isDelegated ? handler : null)

      if (fn) {
        removeHandler(element, events, typeEvent, fn)
      }

      return
    }

    if (isNamespace) {
      for (const elementEvent of Object.keys(events)) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1))
      }
    }

    for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
      const handlerKey = keyHandlers.replace(stripUidRegex, '')

      if (event.handlerTypeEvent === handlerTypeEvent && (!inNamespace || originalTypeEvent.includes(handlerKey))) {
        removeHandler(element, events, typeEvent, event)
      }
    }
  },

  trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null
    }

    const $ = getjQuery()
    const typeEvent = getTypeEvent(event)
    const inNamespace = event !== typeEvent

    let jQueryEvent = null
    let bubbles = true
    let nativeDispatch = true
    let defaultPrevented = false

    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args)

      $(element).trigger(jQueryEvent)
      bubbles = !jQueryEvent.isPropagationStopped()
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped()
      defaultPrevented = jQueryEvent.isDefaultPrevented()
    }

    const evt = hydrateObj(new Event(event, { bubbles, cancelable: true }), args)

    if (defaultPrevented) {
      evt.preventDefault()
    }

    if (nativeDispatch) {
      element.dispatchEvent(evt)
    }

    if (evt.defaultPrevented && jQueryEvent) {
      jQueryEvent.preventDefault()
    }

    return evt
  }
}

function hydrateObj(obj, meta = {}) {
  for (const [key, value] of Object.entries(meta)) {
    try {
      obj[key] = value
    } catch {
      Object.defineProperty(obj, key, {
        configurable: true,
        get() {
          return value
        }
      })
    }
  }

  return obj
}

export default EventHandler
