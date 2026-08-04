/*!
 * Loads jQuery as a global before the components register their plugins.
 * `defineJQueryPlugin` reads `window.jQuery` when a component module runs, so
 * the global has to exist before the spec imports anything from `js/src`.
 * Copyright 2026 The CoreUI Authors
 * Copyright 2026 creativeLabs Łukasz Holeczek
 * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
 */

import $ from 'jquery/dist/jquery.slim.js'

globalThis.jQuery = $
globalThis.$ = $
