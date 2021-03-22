# Changelog

<!-- auto-changelog-above -->
## [v4.0.0-alpha.4](https://github.com/coreui/coreui/compare/v4.0.0-alpha.3...v4.0.0-alpha.4)

> 22 March 2021

### Features

- feat: allow to generate CSS Variables without callbacks [`d8ccba7`](https://github.com/coreui/coreui/commit/d8ccba78684ac3cbea15a246b6408f6f218cc6ec)

### Refactor

- refactor: move all variables to mixin [`654005e`](https://github.com/coreui/coreui/commit/654005e76f2cf2fb5464463ffdb28a67d2efb61f)
- refactor: change `background` to `bg` [`6c32a05`](https://github.com/coreui/coreui/commit/6c32a05d759de9570bea3cc53c75d13a42efdbce)
- refactor(Utilities): update generator [`6839124`](https://github.com/coreui/coreui/commit/68391246b2a2e003d8d4e928386c15638ed90128)

## [v4.0.0-alpha.3](https://github.com/coreui/coreui/compare/v4.0.0-alpha.2...v4.0.0-alpha.3)

> 19 March 2021

### Features

- feat: add RTL support [`0934ada`](https://github.com/coreui/coreui/commit/0934ada4355c90607d13b3bf19dd82252339387e)
- feat: add RTL support to text align utilities [`a176bdc`](https://github.com/coreui/coreui/commit/a176bdcc8ce8b0202fe7af1d9a9c38a8a1be2237)
- feat: add `--cui-body-color` to `:root` [`9c37e9a`](https://github.com/coreui/coreui/commit/9c37e9a50a71e0f718471fe60ec6e8d2c27ae3e6)

### Fix

- fix: wrong names in colors map [`eefccbf`](https://github.com/coreui/coreui/commit/eefccbfcb6e8a3d1dbc7fa406a3f498e738aabbe)
- fix: generate proper properties and values if only `$enable-rtl` is set to `true` [`582a6f8`](https://github.com/coreui/coreui/commit/582a6f85a3117759f50f5f97bfaf805cc1185ada)
- fix: rename wrong CSS Variables names [`c187b59`](https://github.com/coreui/coreui/commit/c187b59bc2f8c2dcf591541891b401743101c731)
- fix: no borders [`b6da406`](https://github.com/coreui/coreui/commit/b6da40674d17503a418a05648ffc5075d63814b4)
- fix: add missing CSS variables [`dc06098`](https://github.com/coreui/coreui/commit/dc06098f395d328f7bd99d0660654a246542ced3)
- fix(_root.scss): add custom properties - breakpoint-* and mobile-breakpoint [`32fcd38`](https://github.com/coreui/coreui/commit/32fcd380170c45e7adc4f26a98d255fd5c62d118)
- fix: prevent adding `active` class to `.nav-group-toggle` [`e3f247f`](https://github.com/coreui/coreui/commit/e3f247f07a935147a196ffc4ea8e5a8938752b51)
- fix: `.compact` shouldn't overwrite `padding-left` and `padding-right` properties [`4b47c72`](https://github.com/coreui/coreui/commit/4b47c721c2bf3ac1ec1f0db8829e01e3e858309a)
- fix(_sidebar.scss): add $variable-prefix to --is-mobile custom property [`acab8bc`](https://github.com/coreui/coreui/commit/acab8bc26c0a04f4318b90125de2541f1582b576)
- fix: remove unused variable [`ace0c6a`](https://github.com/coreui/coreui/commit/ace0c6a8f511c694859c6e6bbb596e655951cb0e)
- fix: add missing CSS Variable [`8f852a6`](https://github.com/coreui/coreui/commit/8f852a6431fd82d069771e6d7ed7beb875047555)

### Refactor

- refactor: generate CSS variables for color variants instead of styles [`5cf8f7a`](https://github.com/coreui/coreui/commit/5cf8f7a6da6d3a2052447765a1e4369191ab5b4d)
- refactor: improve buttons generator syntax [`22eff29`](https://github.com/coreui/coreui/commit/22eff298e17574b8bf26d0ef46eac2421d850190)
- refactor: change `--cui-sidebar-occupy` to `--cui-sidebar-occupy-start` and add `--cui-sidebar-occupy-end` [`3d9c15b`](https://github.com/coreui/coreui/commit/3d9c15b262ba171f29434b0f67f09efc95f4b44a)
- refactor: add SCSS files to generate RTL only version [`d8221f7`](https://github.com/coreui/coreui/commit/d8221f791567b63988b069021e9a1ce66ae41ca3)
- refactor: change `.sidebar-right` to `.sidebar-end` [`e1cb24c`](https://github.com/coreui/coreui/commit/e1cb24c267635c0763e2bccd9aa093e87739eb75)
- refactor: remove str-replace function from SVG icons [`845c82c`](https://github.com/coreui/coreui/commit/845c82c2a8b655ad15c119e642c870d505d9d87e)
- refactor: update `.nav-group-toggle` icon [`f5047b3`](https://github.com/coreui/coreui/commit/f5047b39c879b7ff2d0bb242ad1ad6d9e4187425)
- refactor(Progress): improve syntax [`1b22531`](https://github.com/coreui/coreui/commit/1b225310f7bae2480ba21fc7b89c5a1ea2fc2e1a)
- refactor: update utilities generator [`b09346b`](https://github.com/coreui/coreui/commit/b09346b69c28865b27a5251c853ebb498c01f2c3)
- refactor: change `.sidebar-nav-sm` to `.compact` [`818540b`](https://github.com/coreui/coreui/commit/818540b7396545b9a039b360c897940f81b8002d)
- refactor: disable RTL by default [`58c153f`](https://github.com/coreui/coreui/commit/58c153ffa99c054c938ee680af518804b416d885)
- refactor: change `--#{$variable-prefix}alert-bg` to `--#{$variable-prefix}alert-background` [`1b8f9e7`](https://github.com/coreui/coreui/commit/1b8f9e71dfc2da45b64008207d5b91f72f8c8ee3)

## [v4.0.0-alpha.2](https://github.com/coreui/coreui/compare/v4.0.0-alpha.1...v4.0.0-alpha.2)

> 19 March 2021

### Features

- feat(Badge): add `badge-sm` [`8afa29b`](https://github.com/coreui/coreui/commit/8afa29be9a15696fb6755b7cb9bac3f67b478838)
- feat: add CSS Vars to border utilities [`d96aa5b`](https://github.com/coreui/coreui/commit/d96aa5bf8d89080644a0d896ed31cf8595f0db63)
- feat: add `contrast-ratio-correction` function [`c3e2cdc`](https://github.com/coreui/coreui/commit/c3e2cdc0d084a2b8cd4a4fa1b01f4824cc4e13e6)

### Fix

- fix(carousel): switch prev/next directions in RTL [`b85ca04`](https://github.com/coreui/coreui/commit/b85ca045e057d6f5982cc0cc9de4bfbf8b252a3d)
- fix: remove $ [`3c210f8`](https://github.com/coreui/coreui/commit/3c210f8373c500e017867e1d6a44a095c77c7a1d)
- fix(navs): ensure button will grow in fill/justified nav [`bed8fc8`](https://github.com/coreui/coreui/commit/bed8fc8381be8f9aad7ac95727be4ab8975b4f94)
- fix(forms): validated controls in input-group [`ac3a106`](https://github.com/coreui/coreui/commit/ac3a1069b139c12d95ca1b6ac2798e56cf01a83e)
- fix: wrong name in border-color property [`554aa81`](https://github.com/coreui/coreui/commit/554aa819955d45a862511ea1f99803e67ebeba93)
- fix: the wrong contrast ratio for default text colors [`b5d3fb6`](https://github.com/coreui/coreui/commit/b5d3fb65037a5e4c6c81fad7db1789aa54ca6579)
- fix: wrong `nth-child` value [`e07c7ec`](https://github.com/coreui/coreui/commit/e07c7ec0a78a5f4dee7f8270888e2d03873256d0)
- fix(list-group): properly set a color on list-group-items [`0bdf931`](https://github.com/coreui/coreui/commit/0bdf9315077d22022a1f35b60b830398825098ce)
- fix(Sidebar Nav): nav-link has wrong bg color on hover [`55f4403`](https://github.com/coreui/coreui/commit/55f440350bb0c775d2b413d4e2a089067d12da75)

### Refactor

- refactor(Sidebar): change default responsive behaviour [`8f9ba8e`](https://github.com/coreui/coreui/commit/8f9ba8e2b1ebe2edf528c01364000a74856578bc)
- refactor: update text colors [`007ec95`](https://github.com/coreui/coreui/commit/007ec958dbc4ecfd858e8ab49f65dcd51a75fdd1)
- refactor: simplify CSS Variables [`75706ab`](https://github.com/coreui/coreui/commit/75706ab512cfaac62c80e5ba01de5b062f202a30)
- refactor: update togglers [`238590a`](https://github.com/coreui/coreui/commit/238590ab0ec36d4dc6b98c465b8e60bc7296feca)
- refactor(Sidebar): refactor responsive behavior [`0a02a32`](https://github.com/coreui/coreui/commit/0a02a32f8897c34c7eefe7752e31e049e848e291)
- refactor: add contrast ratio checker [`bcc6db7`](https://github.com/coreui/coreui/commit/bcc6db7d7611ac65d7a2057172d28a4f6f48c03b)
- refactor: add CSS Variables [`a165df0`](https://github.com/coreui/coreui/commit/a165df026d58529379a98e2a48eb08f9e0246b72)
- refactor: add missing CSS Variables [`beee33b`](https://github.com/coreui/coreui/commit/beee33b3edc2ff5ca9ed512007bcf3cc0d1f28e8)
- refactor: rename `_sidebarInterface` to `sidebarInterface` [`993069d`](https://github.com/coreui/coreui/commit/993069deef08f349a0e4092c36f9dfb4fa953a80)
- refactor: add CSS Variables [`b823216`](https://github.com/coreui/coreui/commit/b823216f9e0c74fa18c2854b7eafcb3014422bf3)

## [v4.0.0-alpha.1](https://github.com/coreui/coreui/compare/v4.0.0-alpha.0...v4.0.0-alpha.1)

> 17 January 2021

### Fix

- fix: replace `border-{left|right}` utilities with `border-{start|end}` [`ba0ee67`](https://github.com/coreui/coreui/commit/ba0ee673b181f27a136982594e8fd8765b150ffc)
- refactor: update size of navs; fix: position of close button [`bf3f6fc`](https://github.com/coreui/coreui/commit/bf3f6fc522d61327e610a48cbeabb635e1364e32)

### Refactor

- refactor: update size of navs; fix: position of close button [`bf3f6fc`](https://github.com/coreui/coreui/commit/bf3f6fc522d61327e610a48cbeabb635e1364e32)
- refactor: redesign close button [`4d33268`](https://github.com/coreui/coreui/commit/4d33268d9031afa43ff932de4976fb872b011d00)
- refactor: update subcomponents heights [`26f9252`](https://github.com/coreui/coreui/commit/26f9252cd9f0dbefb8ed405502560f30c1439397)
