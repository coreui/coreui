import { describe, expect, it } from 'vitest'
import * as esm from '../../index.esm.js'
import Offcanvas from '../../src/offcanvas.js'
import umd from '../../index.umd.js'

describe('index', () => {
  it('should expose every module export on the UMD global', () => {
    for (const [name, plugin] of Object.entries(esm)) {
      expect(umd[name]).toBe(plugin)
    }
  })

  it('should expose the offcanvas plugin under its documented name', () => {
    expect(umd.Offcanvas).toBe(Offcanvas)
  })

  it('should keep the legacy offcanvas name as an alias', () => {
    expect(umd.OffCanvas).toBe(Offcanvas)
  })

  it('should not expose names the module build does not have', () => {
    const extra = Object.keys(umd).filter(name => !(name in esm))

    expect(extra).toEqual(['OffCanvas'])
  })
})
