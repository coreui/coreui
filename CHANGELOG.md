# Changelog

<!-- auto-changelog-above -->

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

## [v4.0.0-alpha.0](https://github.com/coreui/coreui/compare/v3.4.0...v4.0.0-alpha.0)

> 13 January 2021

### Features

- feat: add sidebar component [`50e8743`](https://github.com/coreui/coreui/commit/50e87435da978bc1d56a139b2d1ca42e0eec57f5)
- feat: add header component [`436cbb7`](https://github.com/coreui/coreui/commit/436cbb72fa5dd56b77b5eb89bd20ae63d6e20b7d)
- feat: add avatar component [`a761149`](https://github.com/coreui/coreui/commit/a761149c5ad3865641eed68219d3bb0790e67f2e)
- feat: add vr component [`4e9e4ce`](https://github.com/coreui/coreui/commit/4e9e4ce63437b7d5067c12e4c9684eb6f1efd6b0)
- feat: add icon component, and progress group [`31fb6bd`](https://github.com/coreui/coreui/commit/31fb6bddb4e196e53e0fc9b27c0aab1b7f4c1184)
- feat: add ghost button [`7ac3b3c`](https://github.com/coreui/coreui/commit/7ac3b3cb38d2dd51179a115800670452cd26af45)
- feat(Form Switch): add LG and XL sizes [`797abef`](https://github.com/coreui/coreui/commit/797abefb34937689b63d8d1f69a535425791865e)
- feat(Callout): add callout component [`40b30b4`](https://github.com/coreui/coreui/commit/40b30b41fc839486b9ed69f099bd5ad0d254f7df)
- feat: add footer component [`60f5da2`](https://github.com/coreui/coreui/commit/60f5da29c4c0cfbc9f7f8eb301575d55b2065f6a)
- feat: add `border-{top | right | bottom | left}-color` and `border-{top | right | bottom | left}-width` utilities [`7d77559`](https://github.com/coreui/coreui/commit/7d77559d9dac779d7b55ec7b6ec9250d77237d30)
- feat(color-contrast): ensure we return a contrasted enough color (light-first), the most contrasted one otherwise [`1b8bf5b`](https://github.com/coreui/coreui/commit/1b8bf5b56c77a60aab4c228aada7565f77db17ce)
- feat: add font weight medium and semibold; [`1a505f4`](https://github.com/coreui/coreui/commit/1a505f407486c0ec381df7fc786394bc27254ff6)
- feat: add new text utilities [`25a0206`](https://github.com/coreui/coreui/commit/25a02065bedf7785bdda63db498a726e1718123d)
- feat: add breakpoint-before function [`cd7623f`](https://github.com/coreui/coreui/commit/cd7623f2840a85491d606fc00e7c2137ca2aa9c2)
- feat: CSS Variables support [`e038911`](https://github.com/coreui/coreui/commit/e03891128c8a5e9478dd602c7d5dd141c38a382a)
- feat: add callout [`e8d1bae`](https://github.com/coreui/coreui/commit/e8d1bae19d9571b2f6b7580a39ced652e555a131)
- feat(css): groups hr element [`ff39e0b`](https://github.com/coreui/coreui/commit/ff39e0bf842cbac99126689bc7cfd1fa882d5d93)
- feat: add `--cui-font-size-base` variable [`69ea9d7`](https://github.com/coreui/coreui/commit/69ea9d79b8b4d21d27ac6d4ae559383f84071587)
- feat(RTL): implement RTL [`9488978`](https://github.com/coreui/coreui/commit/9488978fb55286ba83e8193a871d1ff9815045b9)
- feat(plugins): allow to import separate plugins [`eb81c39`](https://github.com/coreui/coreui/commit/eb81c39f2c36d88d4ebc062a2fa179980827e8be)
- feat(dropdown): add original click event [`49e0946`](https://github.com/coreui/coreui/commit/49e094619b171568fcdf59cf2dbf0e8b790e8e54)
- browser-features.yml: Fix MS A11y UserVoice entry [`2133dbd`](https://github.com/coreui/coreui/commit/2133dbd718c1fe7976514970706d02d2ffe381b9)
- Most Wanted features: Add Edge UserVoice &lt;dialog&gt; entry [`6844745`](https://github.com/coreui/coreui/commit/6844745db5bdddca62fe7caf5c88dfda744babbe)
- feat(color-contrast): set min-contrast-ratio as an argument [`5b480fc`](https://github.com/coreui/coreui/commit/5b480fcc8021b0f465f3c5c2c6fa054188facd98)
- feat: keep contrast on `.table-dark` [`a16ffc7`](https://github.com/coreui/coreui/commit/a16ffc7ba1035d41a2cb3e68df5b8c6f756f90b1)
- _data/browser-features.yml: remove trailing spaces. [`2291d08`](https://github.com/coreui/coreui/commit/2291d087502df371afa5d4083576031b4e15f158)

### Fix

- feat: add font weight medium and semibold; [`1a505f4`](https://github.com/coreui/coreui/commit/1a505f407486c0ec381df7fc786394bc27254ff6)
- fix(css): adds a new opacity var [`52c5b06`](https://github.com/coreui/coreui/commit/52c5b06f1c0ed1aaed67012dcb29198618080f85)
- fix(breakpoints): use next breakpoint when targetting xs only [`7058f89`](https://github.com/coreui/coreui/commit/7058f8928641c847b6afb3a8ef2022ce75a5ded8)
- fix: typo in `list-group-variant` [`5a19b44`](https://github.com/coreui/coreui/commit/5a19b443df15767a321c81cea1fc6bcfc9d57b7f)
- fix: icon position [`7e23d7f`](https://github.com/coreui/coreui/commit/7e23d7f10ed008ccd9aa780c8b5489692ce05d24)
- fix: reorder css properties [`d7d8e56`](https://github.com/coreui/coreui/commit/d7d8e5630e6ac8bd2b76ae4e3772f34eee023b03)
- fix(event-handler): remove the use of our event handler in unit test [`9313446`](https://github.com/coreui/coreui/commit/9313446274edbb216fd7777c3d3f3147622e81e7)
- fix(manipulator): increase coverage for manipulator [`64591b3`](https://github.com/coreui/coreui/commit/64591b3722128d89252b8f1c840cd846940b7f5c)
- fix(data): do not use data object in our unit tests [`2b78078`](https://github.com/coreui/coreui/commit/2b780787797da2bed2af0f95963be61e2b8e94a4)
- fix(visual-test): remove jquery in them [`5dcca44`](https://github.com/coreui/coreui/commit/5dcca44fcfe3e4ae2820f4b8b115f006374985b3)
- fix(docs): remove jQuery from our docs [`cf821e1`](https://github.com/coreui/coreui/commit/cf821e1d4d1d67f6b4ce9651ae64c72a502c40ba)
- fix(data): increase coverage for data [`0b719e0`](https://github.com/coreui/coreui/commit/0b719e065c278d1d20f993bd2999dd108ac23682)
- fix(selector-engine): increase coverage for selector engine [`096413a`](https://github.com/coreui/coreui/commit/096413a9942178aa68925f032822b40900bac346)
- fix(modal): removes .navbar-toggler margin [`cb82394`](https://github.com/coreui/coreui/commit/cb82394fc8645d4e41476d19693844fac5022b4c)
- fix(tooltip): xss in container option [`2d90d36`](https://github.com/coreui/coreui/commit/2d90d369bbc2bd2647620246c55cec8c4705e3d0)
- fix(util): remove extend [`4510e7e`](https://github.com/coreui/coreui/commit/4510e7e61db27b264c1fadc125beb2d4c80f07df)
- fix(tests): visual plugins tests [`d180452`](https://github.com/coreui/coreui/commit/d18045210cdd09271ac033992341d4460d6bafac)
- fix(unit-test): dropdown, collapse and carousel [`6b08083`](https://github.com/coreui/coreui/commit/6b0808354d212272030e598f4e8ea9e2bce7703a)
- fix(tooltip): remove useless unit test [`f2aab5e`](https://github.com/coreui/coreui/commit/f2aab5ea99aae0726664d3f5ba9250629da45f04)
- fix(plugins): save instance in constructor [`467dd11`](https://github.com/coreui/coreui/commit/467dd113c50c50f69c1b17d40cbd41d0b175952a)
- fix(event-handler): remove polyfill and move it to index [`b4a3b00`](https://github.com/coreui/coreui/commit/b4a3b00ac8635b51b6216f540ac59219432c0d65)
- Alternate fix to #17965: Updates to use the new class name and adds some basic docs for custom checkbox/radio validation [`09aefaa`](https://github.com/coreui/coreui/commit/09aefaa2afe05f438b99caa63bb888c62c40bf73)
- fix(tooltip): get tip on placement change [`e57a2f2`](https://github.com/coreui/coreui/commit/e57a2f244ba8446fffe71847e6a58b18f7b2d541)
- fix(util): use getElementById when it's possible [`6b92321`](https://github.com/coreui/coreui/commit/6b92321f6a04f07e0a3531d0e546c3cc20867bdb)
- fix(util): increase util coverage [`a1cc9a6`](https://github.com/coreui/coreui/commit/a1cc9a6e332869519fcff2a3d0f976bdad0f14fd)
- fix(modal): fix unit test and resetting style [`283ab30`](https://github.com/coreui/coreui/commit/283ab30164f0f58ffb13063d800b7a2ee686bb8a)
- fix(collapse): xss in parent option [`1490960`](https://github.com/coreui/coreui/commit/149096016f70fd815540d62c0989fd99cdc809e0)
- fix(util): use querySelector for ids [`eab9da5`](https://github.com/coreui/coreui/commit/eab9da5beb5a2fdba8be4e54dfcdac0de4eba2f6)
- Docfix: Typo default -&gt; secondary, and reorder [`45cbbad`](https://github.com/coreui/coreui/commit/45cbbad87113053d6adb97e260c8689f77a3a8cd)
- fix(event-handler): use Object.key for passing values in an event [`8010c01`](https://github.com/coreui/coreui/commit/8010c010e9f15ec04e291a07316f93bda5b46f19)
- fix(build): remove jquery in our build [`83cea3b`](https://github.com/coreui/coreui/commit/83cea3bafa57987b8cd6be0557bbca8364ab1fee)
- Alternate fix to #18865: Change the .navbar-toggler color for light/dark navbars as we do with the .navbar-brand [`8b7ce08`](https://github.com/coreui/coreui/commit/8b7ce089c9886e8ec57b534b56ff98b03e8566ed)
- Remove #8702 entry from Wall of browser bugs [`7441d3f`](https://github.com/coreui/coreui/commit/7441d3f4c55e9180dcc1f7700fe1c9710213f032)
- fix(carousel): on load page create a carousel [`0b726de`](https://github.com/coreui/coreui/commit/0b726de94e6a30612dcd227222afd3b61516dae0)
- Remove vendor prefixes from appearance: none. [`9bacc67`](https://github.com/coreui/coreui/commit/9bacc6715a456f9fbd821a9e591dc789c331f603)
- Part 2 for fixing #13996: Add a docs callout to help folks using SVG images in IE8-10 [`4f5efb8`](https://github.com/coreui/coreui/commit/4f5efb84c9e81120b26949cecc626ae866fef46a)
- Alternate fix to #19006: Add a single variable for controlling that inner 1px padding on .popover [`df6facf`](https://github.com/coreui/coreui/commit/df6facf66e19566b962327899f981258b695076c)
- fix(dropdown): ensure [style] will override inline styles [`9312442`](https://github.com/coreui/coreui/commit/9312442338003d5011372e0cc3994de56179653b)
- Typo fix : depedending ⮞ depending [`f4e6932`](https://github.com/coreui/coreui/commit/f4e6932611a15ba4738f1cf519e5bf24c15ae8e3)
- Typo fix : individiual ⮞ individual [`588a029`](https://github.com/coreui/coreui/commit/588a029abc16cc7a54acbbd6ead9c3c0d72f686b)
- Typo fix : ocassions ⮞ occasions [`d2aefa7`](https://github.com/coreui/coreui/commit/d2aefa7d94d62fd637163d96d3054af2a35b3383)
- fix(scrollspy): xss in target option [`cc61edf`](https://github.com/coreui/coreui/commit/cc61edfa8af7b5ec9d4888c59bf94377e499b78b)
- fix(doc): typo in dropdowns.md [`f42ef5f`](https://github.com/coreui/coreui/commit/f42ef5fa690e1a36764dceef983f15e72ea822be)
- autoprefixer-settings.js: Link to Firefox ESR webpage [`e4989bf`](https://github.com/coreui/coreui/commit/e4989bf784bbf193abecfe38a00591b69cc369b2)
- reboot.md: fix typo: "to a minimal" [sic] [`e3899b4`](https://github.com/coreui/coreui/commit/e3899b4fa848e73a0efcbba614b5ddf1af1c677c)
- Affix docs: add MDN link for `position: sticky` [`89455af`](https://github.com/coreui/coreui/commit/89455afe97a267e7a37d5699d9f17e82630b8c04)
- fix(polyfill): disable coverage for our polyfills [`fe580a8`](https://github.com/coreui/coreui/commit/fe580a8e5a0c0eaa17d88d48051fae4eb542ccce)
- Part 1 for fixing #13996: Revert the width: 100% \9; IE hack for SVG img-responsive [`c769d7c`](https://github.com/coreui/coreui/commit/c769d7c21ff50d3cf2b3a9a97f0627d401e11f95)
- popovers.html: fix typo: "Dimissmisable" [`5b9e2bf`](https://github.com/coreui/coreui/commit/5b9e2bf1265eb50c0d4105b2eb3da12280c37430)
- fix part of #13111: hide the docs nav on small and below devices [`508d9f0`](https://github.com/coreui/coreui/commit/508d9f0d65ca215dfdfca6aa8cdd877f8dfebd11)
- button-groups.html: fix grammar: "in on" =&gt; "on" [`ff7e8d5`](https://github.com/coreui/coreui/commit/ff7e8d5054b95951541cbc01ee58cb46b753f597)
- alternate fix to #4522: increase line-height on btn-mini [`46c10c8`](https://github.com/coreui/coreui/commit/46c10c8b58919841d9adbc4908a127bf5eff88ad)
- hotfix: github buttons urls [`5df1e2c`](https://github.com/coreui/coreui/commit/5df1e2c00a295c45db7fa75dba333dc9464b128c)
- fixes #: remove double background color on dropdown links [`5af5c2e`](https://github.com/coreui/coreui/commit/5af5c2ed368e8b728306b90082d32719d5a15b54)
- alt fix to #3029: change to single border-radii properties [`8575a45`](https://github.com/coreui/coreui/commit/8575a452942001bce522e8e258d9e192d24cb6ec)
- fix left and right tab-content alignment with width: auto; [`c4fb703`](https://github.com/coreui/coreui/commit/c4fb7032690ed10162562dfbf893311389a64dee)
- Better clearing on `.dl-horizontal` for empty `dd` elements [`37f4a25`](https://github.com/coreui/coreui/commit/37f4a25be436e8b25004d22541809032d8354600)
- Alternate fix for #11303: add link to site in banner and remove @mdo and @fat usernames from it [`a7a9dca`](https://github.com/coreui/coreui/commit/a7a9dcaeb2231b2580cf79fcee7d777b98ac24d8)
- alt fix to #10278: Change Google Maps compatibility warning to a general box-sizing warning [`bfda156`](https://github.com/coreui/coreui/commit/bfda156bb95c115ac9abba880074d4582c81dc0d)
- Half fix for #9855: Don't fuck with margins for open modal dialog on account of Lion non-scrollbars and inconsistencies elsewhere [`352532c`](https://github.com/coreui/coreui/commit/352532cd63a2d8e03ba7db806aa3bd110c023532)
- finish fixing #9295: add button group buttons to new input group sizing [`4957670`](https://github.com/coreui/coreui/commit/49576704ea6c24fbc4cb32f44c5986a1e7714634)
- fix docs: move .pull-left from search input to search form in navbar [`7749044`](https://github.com/coreui/coreui/commit/774904464dc8237b36be8197ca7c91d701ce4f0e)
- fixes part of #11117: doc that modal show()/hide() return before animation finishes [`afbdc21`](https://github.com/coreui/coreui/commit/afbdc21def8cf451e73895a6e2594e3dfa0a64e5)
- typo fixed: highligted source code of second radio button was missing in css.html -&gt; checkboxes & radios -&gt; default section [`6f9ed7e`](https://github.com/coreui/coreui/commit/6f9ed7efeb0a4f3252f0f11d53d5f9be065abc4f)
- Small fix: I noticed the use of a deprecated variable. This seems to be the only occurrence. [`dd9c5fd`](https://github.com/coreui/coreui/commit/dd9c5fdb08a8445fc44117386ca3bead38b717a9)
- typo fix: replaced 'model-open' with 'modal-open' [`50f1bc4`](https://github.com/coreui/coreui/commit/50f1bc47ece352f1e647c345fd9b699707a40b98)
- Navbar toggle is not vertically aligned (3.0.0-wip) with custom navbar height [`0017f7f`](https://github.com/coreui/coreui/commit/0017f7fca4d34b37b63275f1aab79baad16ed5e1)
- fix right aligned dropdowns in navbar by adding left: auto; to nix default alignment [`ad78caa`](https://github.com/coreui/coreui/commit/ad78caa72639aa377caf584efc26fe7a5682b15c)
- Update justified-nav.css [`c76b7a5`](https://github.com/coreui/coreui/commit/c76b7a53a416f74ced4ad7124e38a305ac477bb5)

### Refactor

- refactor: clean-up [`6a9cbe5`](https://github.com/coreui/coreui/commit/6a9cbe5eda5da9ad5edbf8a4a7c47dd302ad270f)
- refactor: clean-up [`58721af`](https://github.com/coreui/coreui/commit/58721afd171b8e2d7ec023151039a8685c6206b7)
-  refactor: css variables; [`9407545`](https://github.com/coreui/coreui/commit/9407545f2a86094aa1d50fccb5f2e49d68dc5b23)
- refactor: backup bootstrap variables [`3832e90`](https://github.com/coreui/coreui/commit/3832e90363dd4ab0138e721e5e9078158e5266d1)
- refactor: update sidebar component [`6a092bd`](https://github.com/coreui/coreui/commit/6a092bd3054ad4c0a2be32190d2be1fdaefbda6a)
- refactor(sidebar): divide sidebar.js to sidebar.js and navigation.js [`97af33d`](https://github.com/coreui/coreui/commit/97af33d83f4d1aa1a097b1203c6b85b1659d12f9)
- refactor: add css variables [`080c774`](https://github.com/coreui/coreui/commit/080c774477d27f3594a89c8cad80a0448db2ffa5)
- refactor: clean-up and reorder variables; add markers to generate sass documentation for components [`bac1643`](https://github.com/coreui/coreui/commit/bac1643b96bbb1c96377192fea8ba03708a68d98)
- refactor: remove `c-` prefixes and clean-up [`9b9d099`](https://github.com/coreui/coreui/commit/9b9d0999c652f3338f21b9e3bbf9ccfcff609306)
- refactor: add css variables [`0ebb22a`](https://github.com/coreui/coreui/commit/0ebb22a93524339140df8fcbfd971af6812be77e)
- refactor: change project name [`3d4f620`](https://github.com/coreui/coreui/commit/3d4f6201728dcb3724e00e312ed5f4cae72292d6)
- refactor(Sidebar): add tranistions, rename `sidebar-unfoldable` to `sidebar-narrow-unfoldable`, update sidebar sizes [`1834cec`](https://github.com/coreui/coreui/commit/1834cecb029fe98c9df96c7b2a9390979a896b72)
- refactor: rebuild `.navbar-light` and `.navbar-dark` using CSS Variables [`8318a41`](https://github.com/coreui/coreui/commit/8318a418c67a68e7685aee8ccbff772a1f5985e9)
- refactor: rebuild `.navbar-light` and `.navbar-dark` using CSS Variables [`23a48aa`](https://github.com/coreui/coreui/commit/23a48aaa540b6fb21b679bbdb13ada333dce3660)
- refactor: rename data selectors, and data keys [`215611c`](https://github.com/coreui/coreui/commit/215611c40a233ee7f1b17689ef433c321c1a9105)
- refactor(Avatar): change px to rem [`ac6bd1c`](https://github.com/coreui/coreui/commit/ac6bd1cd2042be33fb525d22caef1fc6afe84efa)
- refactor: consolidated variables in variants [`6e378cc`](https://github.com/coreui/coreui/commit/6e378ccd57e34f3fc1b20280d5e3b5e7282f6b57)
- refactor: remove `c-` prefix [`8e11ef2`](https://github.com/coreui/coreui/commit/8e11ef2132e9bb79bf7d3a47d73c34f2eb3b13cf)
- refactor: rebuild `.dropdown-menu-dark` using CSS Variables [`86b3ca9`](https://github.com/coreui/coreui/commit/86b3ca90615b0fbc18e0c5a916b3ce64e070be7f)
- refactor: rebuild `.dropdown-menu-dark` using CSS Variables [`10a9839`](https://github.com/coreui/coreui/commit/10a98399ddbd1b67c2260802abb3932f4d5e7ca9)
- feat: add font weight medium and semibold; [`1a505f4`](https://github.com/coreui/coreui/commit/1a505f407486c0ec381df7fc786394bc27254ff6)
- refactor: remove `c-` prefix [`75794ca`](https://github.com/coreui/coreui/commit/75794cace6b8436e58eb3303e87ca80a28c91daa)
- refactor: update component to bs5 [`00ccc8c`](https://github.com/coreui/coreui/commit/00ccc8cb59759b964322a9448d2a8067fcb99f81)
- refactor: clean-up [`177dee4`](https://github.com/coreui/coreui/commit/177dee45ffe68451f2fc7a02a0799982719b0960)
- refactor: rebuild `.carousel-dark` using CSS Variables [`0c5081d`](https://github.com/coreui/coreui/commit/0c5081d5e285a0c0b6c23c61ab2e750243a7da89)
- refactor: rebuild `.carousel-dark` using CSS Variables [`81e3ca2`](https://github.com/coreui/coreui/commit/81e3ca2a727faa2da5a5786f8c6535114d02d517)
- refactor: change px to rem in footer, header, and sidebar; reorder transition values in sidebar [`2f159db`](https://github.com/coreui/coreui/commit/2f159db88e4672045dba6174259e30b00780148d)
- refactor: deprecated `.avatar-rounded` and `.avatar-square` [`7d6c71a`](https://github.com/coreui/coreui/commit/7d6c71ae80dbd1210f1506bbf84b1843b5c09944)
- refactor: change `${alert|button|list-group}-colors` to ${alert|button|list-group}-variants` [`7431673`](https://github.com/coreui/coreui/commit/7431673acd58debb1d9a2413cee33d1e6abbd537)
- refactor: remove `c-` prefix and fix icon position [`274a6cc`](https://github.com/coreui/coreui/commit/274a6cca5ac1e532779217d5995e5e423393bb90)
- refactor: change `$footer-height` variable to `$footer-min-height` [`ad129c3`](https://github.com/coreui/coreui/commit/ad129c3bb59d5841b2b892a6444d615c3244bb8d)
- refactor: remove `.focus` class [`8f1c395`](https://github.com/coreui/coreui/commit/8f1c3951f5c5fc941574521a8e5ee9c7631a8e4f)
- refactor: update variables [`c14ed01`](https://github.com/coreui/coreui/commit/c14ed01e06e4883858abfc8c5d1ab32f747b6fe9)
- refactor(header): change `.header-divider` width to 100% of `.header` [`4d8eae2`](https://github.com/coreui/coreui/commit/4d8eae23c5e76ea246cde26066d39861fd0afe70)
- refactor: change `$subheader-height` variable to `$subheader-min-height` [`9ba4faf`](https://github.com/coreui/coreui/commit/9ba4faf581086ce8564e7145816fcca775dadea3)
- refactor: change `$header-height` variable to `$header-min-height` [`31c5d62`](https://github.com/coreui/coreui/commit/31c5d6255bd12f9ba12520b33406b3070a590064)
- refactor: change first container height to match to a minimum height of the header [`147bc58`](https://github.com/coreui/coreui/commit/147bc58341048fa3b6cebe1182bff74b0930df8f)
- refactor: change divider with to 100% of parent [`f6c622d`](https://github.com/coreui/coreui/commit/f6c622d0757c79b1d4c8d1dff0129fb461b0d053)
- refactor: change margins in stacked avatars [`688a54b`](https://github.com/coreui/coreui/commit/688a54b7d23e1d7742912b84bb013585605cf5d2)
- refactor: remove `thead` `border-bottom-color` [`2ba6edd`](https://github.com/coreui/coreui/commit/2ba6edd20904219f88b22c2980b1ce751c33e763)
- refactor: remove `c-` prefix [`878ab64`](https://github.com/coreui/coreui/commit/878ab645390d756f09b775b2706748a2811b810a)
- refactor: add css vars [`7286111`](https://github.com/coreui/coreui/commit/72861110f9f993eae0e29c7e3e2104da3c1af233)
- refactor(polyfill): a file for polyfills [`4d6e41d`](https://github.com/coreui/coreui/commit/4d6e41dea6492f18029f0dd70b118217c02f27d8)
- refactor(plugins): query elements without jquery [`a79b8aa`](https://github.com/coreui/coreui/commit/a79b8aa16ab5fa5c71a91425d8464f0bdcd3fe37)
- refactor(plugins): improve how we query elements [`b1eb3fc`](https://github.com/coreui/coreui/commit/b1eb3fccfa722afc4f7ca0d00eb848353ce8aed8)
- refactor(Modal): add `_isTransitioning` default value [`65dc8c9`](https://github.com/coreui/coreui/commit/65dc8c907048111d7895b64da1207023ff4c9992)

## [v3.4.0](https://github.com/coreui/coreui/compare/v3.3.5...v3.4.0)

> 23 November 2020

### Features

- feat: add new styles to toaster component [`0119e56`](https://github.com/coreui/coreui/commit/0119e5663149854f538690d01bed2518cf908c8b)
- feat: add composer styles [`e3f011d`](https://github.com/coreui/coreui/commit/e3f011d114ea496bea5351532fa6836eaebb807a)
- feat: add meteor support [`3b10562`](https://github.com/coreui/coreui/commit/3b105629c125d078128b993be27fa1c763f6dcb2)
- feat: add support for multiple themes [`cbb7321`](https://github.com/coreui/coreui/commit/cbb73219a7de443b155c7647af825b47b5adb05f)
- feat: add dark layout to components [`ea97bf2`](https://github.com/coreui/coreui/commit/ea97bf2f13efc8dd4296b298c193a1e591218b14)
- refactor: moved some styles from layouts/_default.scss to _sidebar.scss; feat: add sidebar brand, light and dark layout, multiple sidebars support, left and right sidebar [`341a624`](https://github.com/coreui/coreui/commit/341a624502a9e44a79d10fb64b4c715f3e2cc9fe)
- feat: new c-header component [`f13ec5c`](https://github.com/coreui/coreui/commit/f13ec5c7659fa7d223c6020faecd3dbdc8532da8)
- feat: add class prefix [`3f3d9c2`](https://github.com/coreui/coreui/commit/3f3d9c28fbc3f21e623341dace5119bea6a20a5e)
- feat: add a smooth transition [`28153be`](https://github.com/coreui/coreui/commit/28153beff85fcd8df8f01c3cdaec3c72da63c25b)
- feat: Class Toggler [`29978df`](https://github.com/coreui/coreui/commit/29978df93943fd6f82987c19c51434ea064e65ca)
- feat: add prefix to .active, .focus, .disable classes [`5edbec2`](https://github.com/coreui/coreui/commit/5edbec22b4958a63244b6db7105762833da3364a)
- feat: add prefixe; docs: update banners [`083ad60`](https://github.com/coreui/coreui/commit/083ad60ec82cefd6cfa8669b57364fc603066fe6)
- feat: multiple sidebars support [`94bc392`](https://github.com/coreui/coreui/commit/94bc392135e5c5dbfb00ea3ba632d97c46005a5d)
- refactor: change size; feat: subheader [`2a31578`](https://github.com/coreui/coreui/commit/2a3157898c5bd3c1a559f2aed23d604f182dc22c)
- feat: add events [`29eb443`](https://github.com/coreui/coreui/commit/29eb44317ecbbcb4c448ae1b149583664200f507)
- feat: avatars with text, square avatars, rounded avatars; refactor: better styles [`3e77738`](https://github.com/coreui/coreui/commit/3e77738a1bbd845b089883d9142ad1d3d1f248c8)
- feat: predefined c-icon sizes [`6969aab`](https://github.com/coreui/coreui/commit/6969aab1c914397838b54bdb76e438081129a94b)
- feat: toggle on parentNode [`a808c30`](https://github.com/coreui/coreui/commit/a808c30df29ff3984a0817b33fc8abc037257334)
- feat: multiple sidebars support [`ff74d66`](https://github.com/coreui/coreui/commit/ff74d663cfc68ae5484f81720dbd50050146018f)
- feat: add footer variants [`f88fda0`](https://github.com/coreui/coreui/commit/f88fda0fdfe9439bf0778f27e9dc484a6db8c5b2)
- feat: add transparent borders [`cdc97d7`](https://github.com/coreui/coreui/commit/cdc97d72637e3963c66cdddd3a51a3054f41462b)
- feat: add events [`bbbaa08`](https://github.com/coreui/coreui/commit/bbbaa08d631b9292491cfb87f3c4f9e42254b07b)
- feat: active links with hash and query strings [`e5d10d0`](https://github.com/coreui/coreui/commit/e5d10d0d1627fbfbdc83fb4d6e6932969b4966d5)
- feat: predefined c-icon sizes [`41a59ad`](https://github.com/coreui/coreui/commit/41a59ad3220a6daec0244d260fa2bcdf5ffc7856)
- feat: add smooth transition to navbar brand [`2325004`](https://github.com/coreui/coreui/commit/2325004b20c68c20e9bd98798bf282b136017b9b)
- feat: predefined c-icon sizes [`48169bc`](https://github.com/coreui/coreui/commit/48169bc93cfc276a20d26cb44d9d0b17dfd009d7)
- feat: vertical line [`16e794e`](https://github.com/coreui/coreui/commit/16e794e6b86e3687b5cff651ed49a6ed4adc83da)
- feat: predefined c-icon sizes [`712cecf`](https://github.com/coreui/coreui/commit/712cecf8dd8cb9b2ed70f76167213bd62a43e0e8)
- feat: add smooth transition to c-nav-link [`947681c`](https://github.com/coreui/coreui/commit/947681c02f4db73a0fc0eb500b546250c6c0de77)
- feat(scss): sidebar-nav-link-disabled [`243694e`](https://github.com/coreui/coreui/commit/243694ed5d7e2bc81f30ddd4a34f6119b2377eea)
- feat(sidebar): mobile clickout behaviour [`93c8895`](https://github.com/coreui/coreui/commit/93c8895a4d2b1ddde7b567121e7af6515272bb58)
- feat: sidebar set active using query string [`e1b5e41`](https://github.com/coreui/coreui/commit/e1b5e41c395f8031b25ca31c0d0be51f16de56ca)
- feat: add standalone styles [`0c40cf8`](https://github.com/coreui/coreui/commit/0c40cf8b182b61dcd0eb272fe625a548c3bde213)
- feat: add coreui utilities [`be0e20b`](https://github.com/coreui/coreui/commit/be0e20b8c2dd16720dc4dd27b247f9fdbc2b030b)
- feat: AjaxLoad [`1910aee`](https://github.com/coreui/coreui/commit/1910aee643a954122ab2ef4fab713ba88c11dad3)
- feat: Sidebar [`3fa81ce`](https://github.com/coreui/coreui/commit/3fa81ce9615952d23549d576ba114593cb903f8a)
- feat: AsideMenu [`b32ae37`](https://github.com/coreui/coreui/commit/b32ae3759e8ef051e9c4549e38bf3be608b06db4)
- feat: add ghost and square buttons [`6d5e0f6`](https://github.com/coreui/coreui/commit/6d5e0f6920ee1b50de96733efe340bfe8b52480c)
- feat: list group with accent [`5590e03`](https://github.com/coreui/coreui/commit/5590e03a8792e328f738827c4559b5cd55e80e07)
- feat: sidebar set active using query string [`bb82dae`](https://github.com/coreui/coreui/commit/bb82daef9ba21f9853bf01bcbe119fde5049546b)
- feat: add deep objects merge script [`d0c3f2f`](https://github.com/coreui/coreui/commit/d0c3f2f1e361f073daf09724534bafb4796a2d26)
- feat: add npm postinstall scripts [`33d3b06`](https://github.com/coreui/coreui/commit/33d3b06315aafc833722ab9648cc139eb4365a97)
- feat: add img-circle [`5aa3b72`](https://github.com/coreui/coreui/commit/5aa3b7253735da506846e7583c5c7aec9e145621)
- feat: add d-minimized-none and d-compact-none [`f41761c`](https://github.com/coreui/coreui/commit/f41761c828a9bbc7eaee9c3fafcd3f8e334b2404)
- feat: enable rounded elements in layout [`7a3cba1`](https://github.com/coreui/coreui/commit/7a3cba16041347fb91f8362be614f953b68db444)
- feat: list group with accent [`89a4856`](https://github.com/coreui/coreui/commit/89a4856030689eaf8cd5183448d68a81c5cd1714)
- feat: list group with accent [`68645aa`](https://github.com/coreui/coreui/commit/68645aaa902c1ec857ab4cb3b71a045201784a2c)

### Fix

- fix: sidebar-minimized z-index issue [`c873ab9`](https://github.com/coreui/coreui/commit/c873ab98d92e2a0c8213fbf98168a203ad43c127)
- fix(sidebar): Selector.NAV_LINK_QUERIED must be nav-link-queried [`81f2535`](https://github.com/coreui/coreui/commit/81f2535c5e2720f26a8155d93ccb246302cf69fb)
- fix: Event listeners for Sidebar and AsideMenu plugins persist in jQuery instance [`320d5f8`](https://github.com/coreui/coreui/commit/320d5f8b9e5345af6aefe843aa8100b71c3ef961)
- feat: add prefixe; docs: update banners [`083ad60`](https://github.com/coreui/coreui/commit/083ad60ec82cefd6cfa8669b57364fc603066fe6)
- fix: add focus state styles [`4cb33ac`](https://github.com/coreui/coreui/commit/4cb33ace5bc020b5ca96e5e6ece734ddc2293e3c)
- fix: mobile sidebar [`f580bc9`](https://github.com/coreui/coreui/commit/f580bc99c6a5ead4447b0bc0ca33293c8fd22fa1)
- fix: prefixes; [`0924931`](https://github.com/coreui/coreui/commit/09249316ca4a0e82f68aaa891e48de9485b81468)
- fix(input-group): rtl append, prepend border radius and margins [`0e98b7b`](https://github.com/coreui/coreui/commit/0e98b7b973548aa8de563dd3ba7c413e6c99a7cc)
- fix(rtl): rtl float, margin and padding [`08d9aca`](https://github.com/coreui/coreui/commit/08d9aca2f68f12f9b5ab1ffe0b35a0f5a42de0cd)
- - fix(scss): new mobile breakpoint variables [`c67063b`](https://github.com/coreui/coreui/commit/c67063b3c7052906b32abaea136fe84a0672206f)
- fix: sidebar-right and rtl borders issue [`8ae909c`](https://github.com/coreui/coreui/commit/8ae909c858dfe5f91099874a6670557eea8d4c84)
- fix(sidebar): Added extra container option so nav isn't required and when both are not set then return null for perfectScrollbar [`e8acd34`](https://github.com/coreui/coreui/commit/e8acd3493677149a29a73a1a5481fffc6a087e7e)
- fix(button-group): rtl margin and border-radius [`44346c7`](https://github.com/coreui/coreui/commit/44346c718766d931ecd89e4d58c2389401ee843a)
- fix: wrong display when dir=rtl [`7176fb7`](https://github.com/coreui/coreui/commit/7176fb727e2de57efc306d06da1dda79b21d7e3c)
- fix: add missing class [`7c7659d`](https://github.com/coreui/coreui/commit/7c7659de9d341b7df84e58c09fa69fe750a52330)
- fix(dropdown): rtl caret spacing [`d1f926b`](https://github.com/coreui/coreui/commit/d1f926b1966b17a5988365d4b90b48fb141f2287)
- fix: sidebar-right and rtl borders issue [`a4fc6f3`](https://github.com/coreui/coreui/commit/a4fc6f38f198b644d959658433cfda7f94984f6a)
- fix: minized sidebar issue [`f51238a`](https://github.com/coreui/coreui/commit/f51238a80bc40e52c6c18411c6779501302bac2a)
- fix(scss): rtl margin-right for sidebar-minimized [`b53e13c`](https://github.com/coreui/coreui/commit/b53e13c1a2782259483d13eb986e945c49577cc7)
- fix: c-clearfix issue [`edfd3c3`](https://github.com/coreui/coreui/commit/edfd3c3c632473072c6e7aae7470adfd3e3def83)
- fix: sidebar minimizer chevron issue [`7d8dd6f`](https://github.com/coreui/coreui/commit/7d8dd6f72e31af504a83e5bc3668dee09b00a43d)
- fix: c-sidebar-minimizer is visible on mobile devices [`fbccdef`](https://github.com/coreui/coreui/commit/fbccdefff0c1810030fe6ee5a905a3829ce27d4e)
- fix: c-nav-link issue [`d5345fe`](https://github.com/coreui/coreui/commit/d5345fee1eacb177c215c35580fe4fb490b25cc0)
- fix: white progress-bar background issue [`019924b`](https://github.com/coreui/coreui/commit/019924bc5601d0b21ee1c2643d14a41dfd63d06c)
- fix: add c- prefix to show class [`2301cf3`](https://github.com/coreui/coreui/commit/2301cf39a2b0f07dae6d77bbb236839f0a05655d)
- fix: sidebar-right and rtl borders issue [`5320b3b`](https://github.com/coreui/coreui/commit/5320b3b9f74a10c40a45f7180ddf1517fe796bb7)
- fix: remove .c-nav margins [`e6210e7`](https://github.com/coreui/coreui/commit/e6210e78fac0e98be52b23662c2a95af7f5d58b1)
- fix: update nodemon to 1.18.7 [`609940e`](https://github.com/coreui/coreui/commit/609940ed7a4354ca121cc225fca29bdbd44fd020)
- fix: sidebar, sidebar-minimizer `rtl` ie issues, tweaks [`4fd3b0b`](https://github.com/coreui/coreui/commit/4fd3b0b2c0d3bb3bb60da435f95239b8cf3691c4)
- fix(ie): add `NodeList` `forEach` polyfill [`99411e8`](https://github.com/coreui/coreui/commit/99411e83f427872fc92be6c33a909b89359efe05)
- fix(layout): sidebar on mobile issue [`6b2bd0b`](https://github.com/coreui/coreui/commit/6b2bd0b025d4fcda4818ea5569e3a1e32a70c87d)
- fix(scss): `cssnano` mangles `background-position` temp fix [`de0e768`](https://github.com/coreui/coreui/commit/de0e768a99a1fd6d9f34331a2e20513cbea8b663)
- fix(scss): .sidebar .nav-link.disabled [`c618f63`](https://github.com/coreui/coreui/commit/c618f63276f2b3b323bd8e80ccc27a677fdd0b87)
- fix(buttons.scss): remove `button { @extend .btn; }` [`c6a9292`](https://github.com/coreui/coreui/commit/c6a9292548dc783655203fbf29f0a6aed8dc5c35)
- fix: clean exit on postinstall dependency missing #25 [`eec7f3c`](https://github.com/coreui/coreui/commit/eec7f3c2a62463aa6ad6e59e0fa8ed6313b64772)
- fix(build): add missing `commonjs` for utilities [`f782b1e`](https://github.com/coreui/coreui/commit/f782b1ec1d038a55276c1a17066891a592534852)
- fix(aside-menu): add `dataset.toggle` ie10 fix [`b263107`](https://github.com/coreui/coreui/commit/b263107e51f3d561d7c0f3ec93673d1a1df106d2)
- fix(sidebar): add `dataset.toggle` ie10 fix [`b340a2f`](https://github.com/coreui/coreui/commit/b340a2f1e82051ac03dcf5860bc5bc3354080c38)
- fix(buttons.scss): wrong cursor for disabled state [`9d926eb`](https://github.com/coreui/coreui/commit/9d926eb2a1f0c1cdc02f0978faeae2b6f14f3cd1)
- fix(.sidebar-minimizer): add `cursor: pointer` [`7f1f257`](https://github.com/coreui/coreui/commit/7f1f2579162f644f12b9946b9a1eaa05c9815f8c)
- fix: add new event update [`33f90de`](https://github.com/coreui/coreui/commit/33f90deaade72be7bff3a6cb74e6f0351f07c8bb)
- fix: ie11-custom-properties [`d3a870f`](https://github.com/coreui/coreui/commit/d3a870f6e15119560e66dfd2ece4ff18f93f0095)
- fix: ie11-custom-properties [`c80c199`](https://github.com/coreui/coreui/commit/c80c199f41dd4002a37048f085b140dea8de255b)
- fix: navbar bg issue, hidden sidebar-minimizer on tablets [`6c4a93e`](https://github.com/coreui/coreui/commit/6c4a93ec18b591dec14b3a86c06d1efda6d1e7e5)
- fix: wrong functions names [`0c807a3`](https://github.com/coreui/coreui/commit/0c807a370466cb03d75f2464a32a2ca68d4f87eb)
- fix: XMLHttpRequest issue [`ed94d44`](https://github.com/coreui/coreui/commit/ed94d44d05a39a23819fab2c0a134d94489b9cc0)
- fix: ie11-custom-properties [`b5143bb`](https://github.com/coreui/coreui/commit/b5143bb428634c3e38f824f1dda8c6663f4a96cf)
- fix(sidebar): remove scrollbar when `sidebar-minimized` [`76c38bc`](https://github.com/coreui/coreui/commit/76c38bc134c4bf29035d6b53a904e490f86ff047)
- fix: switch-pill issue [`d73fcc1`](https://github.com/coreui/coreui/commit/d73fcc1b35e79d575c053d91d2051bbdc5785c0e)
- fix: add new event update [`3319a75`](https://github.com/coreui/coreui/commit/3319a750d1fd0c8237b5d79c78c28778f1247867)
- fix: ie11-custom-properties [`cd10d8c`](https://github.com/coreui/coreui/commit/cd10d8ca6475de87888ee5678c2106421572f2cd)
- fix: remove borders from disabled buttons [`a5be78a`](https://github.com/coreui/coreui/commit/a5be78a6542df1472937642bfb5fcc313e768098)
- fix(sidebar): `rtl` for `sidebar-minimizer` icon [`d30084c`](https://github.com/coreui/coreui/commit/d30084c1b45a22a5b196716a732e1ba5360044c7)
- fix(breadcrumb): `rtl` padding [`7b093a1`](https://github.com/coreui/coreui/commit/7b093a161c837660e56a712ff08c7483b33fa41c)
- fix(sidebar-toggler): `rtl` position issue [`59062e2`](https://github.com/coreui/coreui/commit/59062e2adf3708fb842aad8850fe4f256b0fdcba)
- fix: add border-radius to icons [`a268eb2`](https://github.com/coreui/coreui/commit/a268eb2aa4ac89ece12c69923413d5753815ba4b)
- fix: eslint errors [`48d6569`](https://github.com/coreui/coreui/commit/48d656925a8bf70d9ab44867590b95f9c939f8a9)
- fix: delegate event handlers to support turbolinks [`49ac147`](https://github.com/coreui/coreui/commit/49ac1477a939e93a23d51d111d927e1de7c5c8d0)
- fix(sidebar): `rtl` ps scrollbar issue temp fix/refactor [`046a16a`](https://github.com/coreui/coreui/commit/046a16a707dcf37cc2e7a3fd8cb35a552c476f4a)
- fix(card): `rtl` float for `card-header-actions` [`397a812`](https://github.com/coreui/coreui/commit/397a812af5edc608dd4745d0394649babaf7f0ec)
- fix: problems with link [`1fcba73`](https://github.com/coreui/coreui/commit/1fcba7349650f61618c2344699498b978f261ff2)
- fix(card): `rtl` for `card-header` icon margins [`0602445`](https://github.com/coreui/coreui/commit/06024455d6f58381ed32a411cbdfd3ff72c5dfb9)
- fix: perfect scrollbar issue [`7876c07`](https://github.com/coreui/coreui/commit/7876c07c239b752cf824e5f77e28a8f34364c653)
- fix(sidebar): `rtl` scrollbar issue temp fix [`418ff65`](https://github.com/coreui/coreui/commit/418ff655246ae9cceb43374305c630697ef14486)
- fix(layout): aside IE issue with `.main` margin on mobile [`9de9f99`](https://github.com/coreui/coreui/commit/9de9f99e419c5f1f3b49a500a8c67e5e78af4306)
- fix(hex-to-rgb/a): add missing parenthesis [`4306cfb`](https://github.com/coreui/coreui/commit/4306cfb69725300404c15d7882520db3cba42abc)
- fix(rgbToHex): transparent is not a valid rgb color ie issue [`b3e15c2`](https://github.com/coreui/coreui/commit/b3e15c2ff76f3e9dd02668ce4386b637ef9a8e41)
- fix(sidebar): `rtl` IE issue with `sidebar-minimized` captions [`3169110`](https://github.com/coreui/coreui/commit/31691102d66f374896b3265b9a6d700900e27f6c)
- fix: problems with link [`1157d6d`](https://github.com/coreui/coreui/commit/1157d6d20a462f3bce05629e9f4a4e02bd01197a)
- fix: perfect scrollbar issue [`f3fdf76`](https://github.com/coreui/coreui/commit/f3fdf76904382d927eac613f67f4930d55782fe1)
- fix: add left 0 to .chart-wrapper [`691b943`](https://github.com/coreui/coreui/commit/691b94373868f8960b1a743d18c5eee008de1af5)
- fix: hide nav-labels when sidebar-minimized [`36df591`](https://github.com/coreui/coreui/commit/36df591e88d8843fa45ac3d9f3968444f9acc225)

### Refactor

- refactor: merge boostrap and coreui [`14686cf`](https://github.com/coreui/coreui/commit/14686cf9571a8e10e0da17a55030be0633598ddc)
- refactor: sync with coreui pro [`bc36ac5`](https://github.com/coreui/coreui/commit/bc36ac56d2605f61cea9e6fd92b791ee719d80be)
- refactor: update to the latest version of Bootstrap [`4846c4e`](https://github.com/coreui/coreui/commit/4846c4efd2c7d2cd6a80f7e6bd8ea1b35cc137ea)
- refactor: update to the latest version of Bootstrap [`d832678`](https://github.com/coreui/coreui/commit/d8326787684330bac0eb3cb576876ac621282865)
- refactor: sync with @coreui/coreui-pro [`a8db7aa`](https://github.com/coreui/coreui/commit/a8db7aac538bab33f83ee5b918ead8a44105dcb8)
- refactor: sync with coreui pro [`6858fc2`](https://github.com/coreui/coreui/commit/6858fc230d23a36f1120ae97abc03758df515c26)
- refactor: remove unnecessary fill property [`5b19f08`](https://github.com/coreui/coreui/commit/5b19f081e240d537bd43fc0713fb4973fe076e60)
- refactor: remove prefixes from Bootstrap components [`f82df91`](https://github.com/coreui/coreui/commit/f82df9132d2b5ad434f326fe37b8326859227885)
- refactor: clean-up [`6cf8b0a`](https://github.com/coreui/coreui/commit/6cf8b0a3f1d3044d8222d259d9177e981ba4463f)
- refactor: improve themes [`d43f83b`](https://github.com/coreui/coreui/commit/d43f83b0e92fc8b94e7d3e814373654f29399070)
- refactor: improve themes system [`78e788b`](https://github.com/coreui/coreui/commit/78e788bb0975b02583b4af41fe6bad3c5a8aec54)
- refactor: remove jQuery [`8dd6664`](https://github.com/coreui/coreui/commit/8dd666446de53330f33d74335e44f59fe377dda8)
- refactor: update Bootstraps scripts [`b1e9f61`](https://github.com/coreui/coreui/commit/b1e9f614c9f2884fc7ec1b7082aeb93f2922b9d8)
- refactor: moved some styles from layouts/_default.scss to _sidebar.scss; feat: add sidebar brand, light and dark layout, multiple sidebars support, left and right sidebar [`341a624`](https://github.com/coreui/coreui/commit/341a624502a9e44a79d10fb64b4c715f3e2cc9fe)
- refactor: add `c-` prefix to each class [`0b93c2f`](https://github.com/coreui/coreui/commit/0b93c2f710a032174309703439e105d87ba347c1)
- refactor: improve script [`aa4cd0a`](https://github.com/coreui/coreui/commit/aa4cd0a38cb65bd5020f319f45d56e4f57defde6)
- refactor: fix linter errors [`31e53e9`](https://github.com/coreui/coreui/commit/31e53e9243d3b8ad72e8c72f7c4a88c100e1653c)
- refactor: improve styles and clean-up [`55ba9e8`](https://github.com/coreui/coreui/commit/55ba9e8659c82d87834741635996d4b3ed56e6bd)
- refactor: moved layouts to separate files [`fb55768`](https://github.com/coreui/coreui/commit/fb557685ea1d5a89c2aa6564b97c2553ff4e67ec)
- refactor: removed jQuery and change name to AsyncLoad [`9da6f67`](https://github.com/coreui/coreui/commit/9da6f6770b4d4f68f93c8e407c39031a567457d8)
- refactor: theme generator, clean-up [`afb6a3f`](https://github.com/coreui/coreui/commit/afb6a3f47c8f3df0b386d0da85e8f0e20bedff1e)
- refactor: add `c-` prefix to each class [`c310afb`](https://github.com/coreui/coreui/commit/c310afb41c0e29035f0f01324d82bb962e17cfde)
- refactor: removed all togglers, use `.c-class-toggler` instead of [`166712e`](https://github.com/coreui/coreui/commit/166712e5894b0fb20c178fe5188ac399da47b851)
- refactor: remove aside component, add nav-tabs to sidebar [`fe602a7`](https://github.com/coreui/coreui/commit/fe602a7a159ce493e910cad0d696df69c18a86d6)
- refactor: add `c-` prefix to each class [`980c487`](https://github.com/coreui/coreui/commit/980c487fde1b7c1fe5da28d31236693364a6aa30)
- refactor: improve code quality [`8297caf`](https://github.com/coreui/coreui/commit/8297caf69d07f4ae504e03a7c49ad4ec7dde6a6f)
- refactor: remove jQuery [`a197d5f`](https://github.com/coreui/coreui/commit/a197d5f91c16c78ebb31a7ac4e2a23968f5d3891)
- refactor: change layout [`587fe1c`](https://github.com/coreui/coreui/commit/587fe1c51ccedc030032d44e103519320245d4fe)
- refactor: change size; feat: subheader [`2a31578`](https://github.com/coreui/coreui/commit/2a3157898c5bd3c1a559f2aed23d604f182dc22c)
- refactor: borders mixin [`cbcf6c3`](https://github.com/coreui/coreui/commit/cbcf6c38a7e7748abbb7beffb3a8e3c15fb735cc)
- feat: avatars with text, square avatars, rounded avatars; refactor: better styles [`3e77738`](https://github.com/coreui/coreui/commit/3e77738a1bbd845b089883d9142ad1d3d1f248c8)
- refactor: update colors; [`0c05730`](https://github.com/coreui/coreui/commit/0c05730fd5e9cd3bdb4af1c154c63d7ebea9cf09)
- refactor: clean-up [`ca4e870`](https://github.com/coreui/coreui/commit/ca4e8707b082d6cade27831b0fa64bffcd86f03b)
- refactor: moved animations to _transitions.scss [`9ff82d2`](https://github.com/coreui/coreui/commit/9ff82d2f9b8369bd30c501c59121737ae5329bb3)
- refactor: remove old scripts before loading new [`a90908c`](https://github.com/coreui/coreui/commit/a90908c0cee4d9b7470e83295ca501e69f683ca0)
- refactor: bg-* variants [`2ee5f1b`](https://github.com/coreui/coreui/commit/2ee5f1bedbc7c43810d6475e789d4a52743eaa4e)
- refactor: moved some styles from _layouts.scss [`9bcce73`](https://github.com/coreui/coreui/commit/9bcce73a73644650264fe88c41442b64de6cc2ff)
- refactor: clean-up [`05ee917`](https://github.com/coreui/coreui/commit/05ee917953a5ec3413a7d6e4d1e4a71cb00808b0)
- refactor: change rgba colors to variables [`e9cef97`](https://github.com/coreui/coreui/commit/e9cef97e54ea887edf9c909d47db489234c9dd66)
- refactor: change header height to 60px and header brand width to 250px [`fce9e9a`](https://github.com/coreui/coreui/commit/fce9e9a7602dc860b3b555af0aa35c928a42e1fb)
- refactor: update bootstrap styles [`95658f8`](https://github.com/coreui/coreui/commit/95658f8c00fc6ae4d144eed9567ba832f7384b73)
- refactor: change css clasess [`400032f`](https://github.com/coreui/coreui/commit/400032ffa2764fc20338b417e2ae2a25309de378)
- refactor: add height [`e4543c7`](https://github.com/coreui/coreui/commit/e4543c75650e543be3264d6d60901cad63cef951)
- refactor: change cap bg color [`b43b506`](https://github.com/coreui/coreui/commit/b43b50609480a2b377cf3f848df56ac1cdabe0db)
- refactor: change rgba colors to variables [`0a881e4`](https://github.com/coreui/coreui/commit/0a881e43e1213daaaea67d220b2fa27acab4ec70)
- refactor: change bg color [`635f335`](https://github.com/coreui/coreui/commit/635f335f2f0fd2d41d4fc2a4a690bd8f3ab9e8c2)
- refactor: change border color [`be22f62`](https://github.com/coreui/coreui/commit/be22f62ccd3f3bc0c178eb89a7b6623a60b33cf9)
- refactor: add margin-top to c-nav-title [`2d983d0`](https://github.com/coreui/coreui/commit/2d983d08deefa869dd3281547eeedb72630880da)
- refactor: change active link color to $white [`bc46704`](https://github.com/coreui/coreui/commit/bc467041d1d888dcc0c92ef4619485470a9349d4)
- refactor: change secondary color to lighter [`1e9ebd5`](https://github.com/coreui/coreui/commit/1e9ebd50ba72ed17cd6c45f51bb6b8ebd30a0ba1)
- refactor: linter [`9180c09`](https://github.com/coreui/coreui/commit/9180c090a21f8603004ff4e8caa64261e2bd9ce8)
- refactor: change name [`b79d7b0`](https://github.com/coreui/coreui/commit/b79d7b04e04798e6f8d99288b66f87762df4ef1d)
- refactor: add new class with prefix [`0774ef6`](https://github.com/coreui/coreui/commit/0774ef64628d711ffc965f9b2d791566df453962)
- refactor: add utilities/classes [`d4fca8c`](https://github.com/coreui/coreui/commit/d4fca8c48b1ecc8dc57a72ccf41fb164f22975b5)
- refactor: utilities/get-color [`1af26c7`](https://github.com/coreui/coreui/commit/1af26c74dac2b302b1f8d015a6d44025a4e421d9)
- refactor(sidebar.js): ps minor cleanup [`736fc50`](https://github.com/coreui/coreui/commit/736fc50ad98bfcff4dc022c1a8a877d1d249bc2d)
- refactor: update to boostrap v4.1.0 [`a926b65`](https://github.com/coreui/coreui/commit/a926b65c2932926c6b52b4c2e2c2438166fb77be)
- refactor: improve gray colors [`04d0bbf`](https://github.com/coreui/coreui/commit/04d0bbf965917146bd67ed278f7941f123205083)
- refactor: new structure [`1c3b130`](https://github.com/coreui/coreui/commit/1c3b1304a112acc3fee900c4849095b30a9c4787)
- refactor: improve switches [`5282e19`](https://github.com/coreui/coreui/commit/5282e1939e584a4b13b1858e1ae1e8363423b5f5)
- refactor: new structure [`9c8e4a1`](https://github.com/coreui/coreui/commit/9c8e4a14bb4c352c1ddfe4c1a4a2e34403abcf02)
- refactor: improve switches [`961b80e`](https://github.com/coreui/coreui/commit/961b80e6aef836c1984537ac816d7c740a5fc8c0)
- refactor: improve avatar's styles [`3043b46`](https://github.com/coreui/coreui/commit/3043b4636c70223d159f474bba9b3268e9eb3f56)
- refactor: remove all functions [`db8173a`](https://github.com/coreui/coreui/commit/db8173a0fa87ba24ee6e62ab07a781dfc56974e8)
- refactor: change navnar to header [`27e5fc7`](https://github.com/coreui/coreui/commit/27e5fc769e8a1d9501867efe6314424c747362cc)
- refactor: remove pace [`cbdb79c`](https://github.com/coreui/coreui/commit/cbdb79cc2f75d782d70f6af1bb8f608dfe3e0b20)
- refactor: add error handling [`7e59665`](https://github.com/coreui/coreui/commit/7e596651918812ba685192e28a9759224c693e45)
- refactor: remove ResizeBroadcast funtion [`aabab0b`](https://github.com/coreui/coreui/commit/aabab0b8f43c388a1dd0c8ce128d9f286dfe6bf6)
- refactor(getStyle): polyfill IE custom properties [`ff12271`](https://github.com/coreui/coreui/commit/ff12271a838cd8c0fa83de17e83f794872487403)
- refactor: improve tooltips [`e6f8511`](https://github.com/coreui/coreui/commit/e6f8511022867f5ea8e927f63822203c7a45d570)
- refactor: add selectors [`74a12b7`](https://github.com/coreui/coreui/commit/74a12b779146b28d7d918bb8875fee0d7aa1b172)
- refactor: remove pace and eslint errors [`3128972`](https://github.com/coreui/coreui/commit/312897271033e9fbc21254e8c22aa5d39406f247)
- refactor: improve .card-actions [`b48f843`](https://github.com/coreui/coreui/commit/b48f8435043da5de945d349e31fd0f28b9bb65dc)
- refactor: update colors [`13fbde7`](https://github.com/coreui/coreui/commit/13fbde7d91b6da7840633a389050140340aa8969)
- refactor: deep-object-merge utility [`4a568f4`](https://github.com/coreui/coreui/commit/4a568f41ed239b8057624e8e910bd4719a522b1c)
- refactor: add Selector.INIT [`b698234`](https://github.com/coreui/coreui/commit/b698234ec90445053a094344960a512814ddaacf)
- refactor: remove pace [`c5e04d3`](https://github.com/coreui/coreui/commit/c5e04d3befa1a894c302cd45be4e14f769bfc191)
- refactor: add border-radius(0) nav-link [`f7057d0`](https://github.com/coreui/coreui/commit/f7057d0aa58f435566e09f6abd76a5df186e9ff6)

## [v3.3.5](https://github.com/coreui/coreui/compare/v3.3.4...v3.3.5)

> 16 June 2015

## [v3.3.4](https://github.com/coreui/coreui/compare/v3.3.2...v3.3.4)

> 16 March 2015

### Fix

- Affix docs: add MDN link for `position: sticky` [`89455af`](https://github.com/coreui/coreui/commit/89455afe97a267e7a37d5699d9f17e82630b8c04)

## [v3.3.2](https://github.com/coreui/coreui/compare/v3.3.1...v3.3.2)

> 19 January 2015

## [v3.3.1](https://github.com/coreui/coreui/compare/v3.3.0...v3.3.1)

> 12 November 2014

### Fix

- Remove #8702 entry from Wall of browser bugs [`7441d3f`](https://github.com/coreui/coreui/commit/7441d3f4c55e9180dcc1f7700fe1c9710213f032)
- Part 2 for fixing #13996: Add a docs callout to help folks using SVG images in IE8-10 [`4f5efb8`](https://github.com/coreui/coreui/commit/4f5efb84c9e81120b26949cecc626ae866fef46a)
- Part 1 for fixing #13996: Revert the width: 100% \9; IE hack for SVG img-responsive [`c769d7c`](https://github.com/coreui/coreui/commit/c769d7c21ff50d3cf2b3a9a97f0627d401e11f95)
- popovers.html: fix typo: "Dimissmisable" [`5b9e2bf`](https://github.com/coreui/coreui/commit/5b9e2bf1265eb50c0d4105b2eb3da12280c37430)
- fix part of #13111: hide the docs nav on small and below devices [`508d9f0`](https://github.com/coreui/coreui/commit/508d9f0d65ca215dfdfca6aa8cdd877f8dfebd11)
- button-groups.html: fix grammar: "in on" =&gt; "on" [`ff7e8d5`](https://github.com/coreui/coreui/commit/ff7e8d5054b95951541cbc01ee58cb46b753f597)
- Better clearing on `.dl-horizontal` for empty `dd` elements [`37f4a25`](https://github.com/coreui/coreui/commit/37f4a25be436e8b25004d22541809032d8354600)
- fixes #: remove double background color on dropdown links [`5af5c2e`](https://github.com/coreui/coreui/commit/5af5c2ed368e8b728306b90082d32719d5a15b54)
- alternate fix to #4522: increase line-height on btn-mini [`46c10c8`](https://github.com/coreui/coreui/commit/46c10c8b58919841d9adbc4908a127bf5eff88ad)
- alt fix to #3029: change to single border-radii properties [`8575a45`](https://github.com/coreui/coreui/commit/8575a452942001bce522e8e258d9e192d24cb6ec)
- fix left and right tab-content alignment with width: auto; [`c4fb703`](https://github.com/coreui/coreui/commit/c4fb7032690ed10162562dfbf893311389a64dee)
- Alternate fix for #11303: add link to site in banner and remove @mdo and @fat usernames from it [`a7a9dca`](https://github.com/coreui/coreui/commit/a7a9dcaeb2231b2580cf79fcee7d777b98ac24d8)
- alt fix to #10278: Change Google Maps compatibility warning to a general box-sizing warning [`bfda156`](https://github.com/coreui/coreui/commit/bfda156bb95c115ac9abba880074d4582c81dc0d)
- Half fix for #9855: Don't fuck with margins for open modal dialog on account of Lion non-scrollbars and inconsistencies elsewhere [`352532c`](https://github.com/coreui/coreui/commit/352532cd63a2d8e03ba7db806aa3bd110c023532)
- finish fixing #9295: add button group buttons to new input group sizing [`4957670`](https://github.com/coreui/coreui/commit/49576704ea6c24fbc4cb32f44c5986a1e7714634)
- fix docs: move .pull-left from search input to search form in navbar [`7749044`](https://github.com/coreui/coreui/commit/774904464dc8237b36be8197ca7c91d701ce4f0e)
- fixes part of #11117: doc that modal show()/hide() return before animation finishes [`afbdc21`](https://github.com/coreui/coreui/commit/afbdc21def8cf451e73895a6e2594e3dfa0a64e5)
- typo fixed: highligted source code of second radio button was missing in css.html -&gt; checkboxes & radios -&gt; default section [`6f9ed7e`](https://github.com/coreui/coreui/commit/6f9ed7efeb0a4f3252f0f11d53d5f9be065abc4f)
- hotfix: github buttons urls [`5df1e2c`](https://github.com/coreui/coreui/commit/5df1e2c00a295c45db7fa75dba333dc9464b128c)
- Small fix: I noticed the use of a deprecated variable. This seems to be the only occurrence. [`dd9c5fd`](https://github.com/coreui/coreui/commit/dd9c5fdb08a8445fc44117386ca3bead38b717a9)
- typo fix: replaced 'model-open' with 'modal-open' [`50f1bc4`](https://github.com/coreui/coreui/commit/50f1bc47ece352f1e647c345fd9b699707a40b98)
- Navbar toggle is not vertically aligned (3.0.0-wip) with custom navbar height [`0017f7f`](https://github.com/coreui/coreui/commit/0017f7fca4d34b37b63275f1aab79baad16ed5e1)
- fix right aligned dropdowns in navbar by adding left: auto; to nix default alignment [`ad78caa`](https://github.com/coreui/coreui/commit/ad78caa72639aa377caf584efc26fe7a5682b15c)
- Update justified-nav.css [`c76b7a5`](https://github.com/coreui/coreui/commit/c76b7a53a416f74ced4ad7124e38a305ac477bb5)

## [v3.3.0](https://github.com/coreui/coreui/compare/3.2.2...v3.3.0)

> 2 September 2020

## [3.2.2](https://github.com/coreui/coreui/compare/v3.2.0...3.2.2)

> 24 June 2020

## [v3.2.0](https://github.com/coreui/coreui/compare/v3.1.1...v3.2.0)

> 20 May 2020

### Features

- feat: add new styles to toaster component [`0119e56`](https://github.com/coreui/coreui/commit/0119e5663149854f538690d01bed2518cf908c8b)
- feat: add composer styles [`e3f011d`](https://github.com/coreui/coreui/commit/e3f011d114ea496bea5351532fa6836eaebb807a)
- feat: add meteor support [`3b10562`](https://github.com/coreui/coreui/commit/3b105629c125d078128b993be27fa1c763f6dcb2)
- feat: add support for multiple themes [`cbb7321`](https://github.com/coreui/coreui/commit/cbb73219a7de443b155c7647af825b47b5adb05f)
- feat: add dark layout to components [`ea97bf2`](https://github.com/coreui/coreui/commit/ea97bf2f13efc8dd4296b298c193a1e591218b14)
- refactor: moved some styles from layouts/_default.scss to _sidebar.scss; feat: add sidebar brand, light and dark layout, multiple sidebars support, left and right sidebar [`341a624`](https://github.com/coreui/coreui/commit/341a624502a9e44a79d10fb64b4c715f3e2cc9fe)
- feat: new c-header component [`f13ec5c`](https://github.com/coreui/coreui/commit/f13ec5c7659fa7d223c6020faecd3dbdc8532da8)
- feat: add class prefix [`3f3d9c2`](https://github.com/coreui/coreui/commit/3f3d9c28fbc3f21e623341dace5119bea6a20a5e)
- feat: add a smooth transition [`28153be`](https://github.com/coreui/coreui/commit/28153beff85fcd8df8f01c3cdaec3c72da63c25b)
- feat: Class Toggler [`29978df`](https://github.com/coreui/coreui/commit/29978df93943fd6f82987c19c51434ea064e65ca)
- feat: add prefix to .active, .focus, .disable classes [`5edbec2`](https://github.com/coreui/coreui/commit/5edbec22b4958a63244b6db7105762833da3364a)
- feat: add prefixe; docs: update banners [`083ad60`](https://github.com/coreui/coreui/commit/083ad60ec82cefd6cfa8669b57364fc603066fe6)
- feat: multiple sidebars support [`94bc392`](https://github.com/coreui/coreui/commit/94bc392135e5c5dbfb00ea3ba632d97c46005a5d)
- refactor: change size; feat: subheader [`2a31578`](https://github.com/coreui/coreui/commit/2a3157898c5bd3c1a559f2aed23d604f182dc22c)
- feat: add events [`29eb443`](https://github.com/coreui/coreui/commit/29eb44317ecbbcb4c448ae1b149583664200f507)
- feat: avatars with text, square avatars, rounded avatars; refactor: better styles [`3e77738`](https://github.com/coreui/coreui/commit/3e77738a1bbd845b089883d9142ad1d3d1f248c8)
- feat: predefined c-icon sizes [`6969aab`](https://github.com/coreui/coreui/commit/6969aab1c914397838b54bdb76e438081129a94b)
- feat: toggle on parentNode [`a808c30`](https://github.com/coreui/coreui/commit/a808c30df29ff3984a0817b33fc8abc037257334)
- feat: multiple sidebars support [`ff74d66`](https://github.com/coreui/coreui/commit/ff74d663cfc68ae5484f81720dbd50050146018f)
- feat: add footer variants [`f88fda0`](https://github.com/coreui/coreui/commit/f88fda0fdfe9439bf0778f27e9dc484a6db8c5b2)
- feat: add transparent borders [`cdc97d7`](https://github.com/coreui/coreui/commit/cdc97d72637e3963c66cdddd3a51a3054f41462b)
- feat: add events [`bbbaa08`](https://github.com/coreui/coreui/commit/bbbaa08d631b9292491cfb87f3c4f9e42254b07b)
- feat: active links with hash and query strings [`e5d10d0`](https://github.com/coreui/coreui/commit/e5d10d0d1627fbfbdc83fb4d6e6932969b4966d5)
- feat: predefined c-icon sizes [`41a59ad`](https://github.com/coreui/coreui/commit/41a59ad3220a6daec0244d260fa2bcdf5ffc7856)
- feat: add smooth transition to navbar brand [`2325004`](https://github.com/coreui/coreui/commit/2325004b20c68c20e9bd98798bf282b136017b9b)
- feat: predefined c-icon sizes [`48169bc`](https://github.com/coreui/coreui/commit/48169bc93cfc276a20d26cb44d9d0b17dfd009d7)
- feat: vertical line [`16e794e`](https://github.com/coreui/coreui/commit/16e794e6b86e3687b5cff651ed49a6ed4adc83da)
- feat: predefined c-icon sizes [`712cecf`](https://github.com/coreui/coreui/commit/712cecf8dd8cb9b2ed70f76167213bd62a43e0e8)
- feat: add smooth transition to c-nav-link [`947681c`](https://github.com/coreui/coreui/commit/947681c02f4db73a0fc0eb500b546250c6c0de77)
- feat(scss): sidebar-nav-link-disabled [`243694e`](https://github.com/coreui/coreui/commit/243694ed5d7e2bc81f30ddd4a34f6119b2377eea)
- feat: add deep objects merge script [`d0c3f2f`](https://github.com/coreui/coreui/commit/d0c3f2f1e361f073daf09724534bafb4796a2d26)
- feat(sidebar): mobile clickout behaviour [`93c8895`](https://github.com/coreui/coreui/commit/93c8895a4d2b1ddde7b567121e7af6515272bb58)
- feat: sidebar set active using query string [`e1b5e41`](https://github.com/coreui/coreui/commit/e1b5e41c395f8031b25ca31c0d0be51f16de56ca)
- feat: add standalone styles [`0c40cf8`](https://github.com/coreui/coreui/commit/0c40cf8b182b61dcd0eb272fe625a548c3bde213)
- feat: add coreui utilities [`be0e20b`](https://github.com/coreui/coreui/commit/be0e20b8c2dd16720dc4dd27b247f9fdbc2b030b)
- feat: AjaxLoad [`1910aee`](https://github.com/coreui/coreui/commit/1910aee643a954122ab2ef4fab713ba88c11dad3)
- feat: Sidebar [`3fa81ce`](https://github.com/coreui/coreui/commit/3fa81ce9615952d23549d576ba114593cb903f8a)
- feat: AsideMenu [`b32ae37`](https://github.com/coreui/coreui/commit/b32ae3759e8ef051e9c4549e38bf3be608b06db4)
- feat: add ghost and square buttons [`6d5e0f6`](https://github.com/coreui/coreui/commit/6d5e0f6920ee1b50de96733efe340bfe8b52480c)
- feat: list group with accent [`5590e03`](https://github.com/coreui/coreui/commit/5590e03a8792e328f738827c4559b5cd55e80e07)
- feat: sidebar set active using query string [`bb82dae`](https://github.com/coreui/coreui/commit/bb82daef9ba21f9853bf01bcbe119fde5049546b)
- feat: add npm postinstall scripts [`33d3b06`](https://github.com/coreui/coreui/commit/33d3b06315aafc833722ab9648cc139eb4365a97)
- feat: add img-circle [`5aa3b72`](https://github.com/coreui/coreui/commit/5aa3b7253735da506846e7583c5c7aec9e145621)
- feat: add d-minimized-none and d-compact-none [`f41761c`](https://github.com/coreui/coreui/commit/f41761c828a9bbc7eaee9c3fafcd3f8e334b2404)
- feat: enable rounded elements in layout [`7a3cba1`](https://github.com/coreui/coreui/commit/7a3cba16041347fb91f8362be614f953b68db444)
- feat: list group with accent [`89a4856`](https://github.com/coreui/coreui/commit/89a4856030689eaf8cd5183448d68a81c5cd1714)
- feat: list group with accent [`68645aa`](https://github.com/coreui/coreui/commit/68645aaa902c1ec857ab4cb3b71a045201784a2c)

### Fix

- fix: prefixes; [`0924931`](https://github.com/coreui/coreui/commit/09249316ca4a0e82f68aaa891e48de9485b81468)
- fix: sidebar-minimized z-index issue [`c873ab9`](https://github.com/coreui/coreui/commit/c873ab98d92e2a0c8213fbf98168a203ad43c127)
- fix(sidebar): Selector.NAV_LINK_QUERIED must be nav-link-queried [`81f2535`](https://github.com/coreui/coreui/commit/81f2535c5e2720f26a8155d93ccb246302cf69fb)
- fix: Event listeners for Sidebar and AsideMenu plugins persist in jQuery instance [`320d5f8`](https://github.com/coreui/coreui/commit/320d5f8b9e5345af6aefe843aa8100b71c3ef961)
- feat: add prefixe; docs: update banners [`083ad60`](https://github.com/coreui/coreui/commit/083ad60ec82cefd6cfa8669b57364fc603066fe6)
- fix: add focus state styles [`4cb33ac`](https://github.com/coreui/coreui/commit/4cb33ace5bc020b5ca96e5e6ece734ddc2293e3c)
- fix: mobile sidebar [`f580bc9`](https://github.com/coreui/coreui/commit/f580bc99c6a5ead4447b0bc0ca33293c8fd22fa1)
- fix(input-group): rtl append, prepend border radius and margins [`0e98b7b`](https://github.com/coreui/coreui/commit/0e98b7b973548aa8de563dd3ba7c413e6c99a7cc)
- fix(rtl): rtl float, margin and padding [`08d9aca`](https://github.com/coreui/coreui/commit/08d9aca2f68f12f9b5ab1ffe0b35a0f5a42de0cd)
- - fix(scss): new mobile breakpoint variables [`c67063b`](https://github.com/coreui/coreui/commit/c67063b3c7052906b32abaea136fe84a0672206f)
- fix: sidebar-right and rtl borders issue [`8ae909c`](https://github.com/coreui/coreui/commit/8ae909c858dfe5f91099874a6670557eea8d4c84)
- fix(sidebar): Added extra container option so nav isn't required and when both are not set then return null for perfectScrollbar [`e8acd34`](https://github.com/coreui/coreui/commit/e8acd3493677149a29a73a1a5481fffc6a087e7e)
- fix(button-group): rtl margin and border-radius [`44346c7`](https://github.com/coreui/coreui/commit/44346c718766d931ecd89e4d58c2389401ee843a)
- fix: wrong display when dir=rtl [`7176fb7`](https://github.com/coreui/coreui/commit/7176fb727e2de57efc306d06da1dda79b21d7e3c)
- fix: add missing class [`7c7659d`](https://github.com/coreui/coreui/commit/7c7659de9d341b7df84e58c09fa69fe750a52330)
- fix(dropdown): rtl caret spacing [`d1f926b`](https://github.com/coreui/coreui/commit/d1f926b1966b17a5988365d4b90b48fb141f2287)
- fix: sidebar-right and rtl borders issue [`a4fc6f3`](https://github.com/coreui/coreui/commit/a4fc6f38f198b644d959658433cfda7f94984f6a)
- fix: minized sidebar issue [`f51238a`](https://github.com/coreui/coreui/commit/f51238a80bc40e52c6c18411c6779501302bac2a)
- fix(scss): rtl margin-right for sidebar-minimized [`b53e13c`](https://github.com/coreui/coreui/commit/b53e13c1a2782259483d13eb986e945c49577cc7)
- fix: c-clearfix issue [`edfd3c3`](https://github.com/coreui/coreui/commit/edfd3c3c632473072c6e7aae7470adfd3e3def83)
- fix: sidebar minimizer chevron issue [`7d8dd6f`](https://github.com/coreui/coreui/commit/7d8dd6f72e31af504a83e5bc3668dee09b00a43d)
- fix: c-sidebar-minimizer is visible on mobile devices [`fbccdef`](https://github.com/coreui/coreui/commit/fbccdefff0c1810030fe6ee5a905a3829ce27d4e)
- fix: c-nav-link issue [`d5345fe`](https://github.com/coreui/coreui/commit/d5345fee1eacb177c215c35580fe4fb490b25cc0)
- fix: white progress-bar background issue [`019924b`](https://github.com/coreui/coreui/commit/019924bc5601d0b21ee1c2643d14a41dfd63d06c)
- fix: add c- prefix to show class [`2301cf3`](https://github.com/coreui/coreui/commit/2301cf39a2b0f07dae6d77bbb236839f0a05655d)
- fix: sidebar-right and rtl borders issue [`5320b3b`](https://github.com/coreui/coreui/commit/5320b3b9f74a10c40a45f7180ddf1517fe796bb7)
- fix: remove .c-nav margins [`e6210e7`](https://github.com/coreui/coreui/commit/e6210e78fac0e98be52b23662c2a95af7f5d58b1)
- fix: update nodemon to 1.18.7 [`609940e`](https://github.com/coreui/coreui/commit/609940ed7a4354ca121cc225fca29bdbd44fd020)
- fix: sidebar, sidebar-minimizer `rtl` ie issues, tweaks [`4fd3b0b`](https://github.com/coreui/coreui/commit/4fd3b0b2c0d3bb3bb60da435f95239b8cf3691c4)
- fix(ie): add `NodeList` `forEach` polyfill [`99411e8`](https://github.com/coreui/coreui/commit/99411e83f427872fc92be6c33a909b89359efe05)
- fix(layout): sidebar on mobile issue [`6b2bd0b`](https://github.com/coreui/coreui/commit/6b2bd0b025d4fcda4818ea5569e3a1e32a70c87d)
- fix(scss): `cssnano` mangles `background-position` temp fix [`de0e768`](https://github.com/coreui/coreui/commit/de0e768a99a1fd6d9f34331a2e20513cbea8b663)
- fix(scss): .sidebar .nav-link.disabled [`c618f63`](https://github.com/coreui/coreui/commit/c618f63276f2b3b323bd8e80ccc27a677fdd0b87)
- fix(sidebar): `rtl` for `sidebar-minimizer` icon [`d30084c`](https://github.com/coreui/coreui/commit/d30084c1b45a22a5b196716a732e1ba5360044c7)
- fix(buttons.scss): remove `button { @extend .btn; }` [`c6a9292`](https://github.com/coreui/coreui/commit/c6a9292548dc783655203fbf29f0a6aed8dc5c35)
- fix: clean exit on postinstall dependency missing #25 [`eec7f3c`](https://github.com/coreui/coreui/commit/eec7f3c2a62463aa6ad6e59e0fa8ed6313b64772)
- fix(rgbToHex): transparent is not a valid rgb color ie issue [`b3e15c2`](https://github.com/coreui/coreui/commit/b3e15c2ff76f3e9dd02668ce4386b637ef9a8e41)
- fix(build): add missing `commonjs` for utilities [`f782b1e`](https://github.com/coreui/coreui/commit/f782b1ec1d038a55276c1a17066891a592534852)
- fix(aside-menu): add `dataset.toggle` ie10 fix [`b263107`](https://github.com/coreui/coreui/commit/b263107e51f3d561d7c0f3ec93673d1a1df106d2)
- fix(sidebar): add `dataset.toggle` ie10 fix [`b340a2f`](https://github.com/coreui/coreui/commit/b340a2f1e82051ac03dcf5860bc5bc3354080c38)
- fix(buttons.scss): wrong cursor for disabled state [`9d926eb`](https://github.com/coreui/coreui/commit/9d926eb2a1f0c1cdc02f0978faeae2b6f14f3cd1)
- fix(.sidebar-minimizer): add `cursor: pointer` [`7f1f257`](https://github.com/coreui/coreui/commit/7f1f2579162f644f12b9946b9a1eaa05c9815f8c)
- fix: add new event update [`33f90de`](https://github.com/coreui/coreui/commit/33f90deaade72be7bff3a6cb74e6f0351f07c8bb)
- fix: ie11-custom-properties [`d3a870f`](https://github.com/coreui/coreui/commit/d3a870f6e15119560e66dfd2ece4ff18f93f0095)
- fix: ie11-custom-properties [`c80c199`](https://github.com/coreui/coreui/commit/c80c199f41dd4002a37048f085b140dea8de255b)
- fix: navbar bg issue, hidden sidebar-minimizer on tablets [`6c4a93e`](https://github.com/coreui/coreui/commit/6c4a93ec18b591dec14b3a86c06d1efda6d1e7e5)
- fix: wrong functions names [`0c807a3`](https://github.com/coreui/coreui/commit/0c807a370466cb03d75f2464a32a2ca68d4f87eb)
- fix: XMLHttpRequest issue [`ed94d44`](https://github.com/coreui/coreui/commit/ed94d44d05a39a23819fab2c0a134d94489b9cc0)
- fix: ie11-custom-properties [`b5143bb`](https://github.com/coreui/coreui/commit/b5143bb428634c3e38f824f1dda8c6663f4a96cf)
- fix(sidebar): remove scrollbar when `sidebar-minimized` [`76c38bc`](https://github.com/coreui/coreui/commit/76c38bc134c4bf29035d6b53a904e490f86ff047)
- fix: switch-pill issue [`d73fcc1`](https://github.com/coreui/coreui/commit/d73fcc1b35e79d575c053d91d2051bbdc5785c0e)
- fix: add new event update [`3319a75`](https://github.com/coreui/coreui/commit/3319a750d1fd0c8237b5d79c78c28778f1247867)
- fix: ie11-custom-properties [`cd10d8c`](https://github.com/coreui/coreui/commit/cd10d8ca6475de87888ee5678c2106421572f2cd)
- fix: remove borders from disabled buttons [`a5be78a`](https://github.com/coreui/coreui/commit/a5be78a6542df1472937642bfb5fcc313e768098)
- fix(breadcrumb): `rtl` padding [`7b093a1`](https://github.com/coreui/coreui/commit/7b093a161c837660e56a712ff08c7483b33fa41c)
- fix(sidebar-toggler): `rtl` position issue [`59062e2`](https://github.com/coreui/coreui/commit/59062e2adf3708fb842aad8850fe4f256b0fdcba)
- fix: add border-radius to icons [`a268eb2`](https://github.com/coreui/coreui/commit/a268eb2aa4ac89ece12c69923413d5753815ba4b)
- fix: eslint errors [`48d6569`](https://github.com/coreui/coreui/commit/48d656925a8bf70d9ab44867590b95f9c939f8a9)
- fix: delegate event handlers to support turbolinks [`49ac147`](https://github.com/coreui/coreui/commit/49ac1477a939e93a23d51d111d927e1de7c5c8d0)
- fix(sidebar): `rtl` ps scrollbar issue temp fix/refactor [`046a16a`](https://github.com/coreui/coreui/commit/046a16a707dcf37cc2e7a3fd8cb35a552c476f4a)
- fix(card): `rtl` float for `card-header-actions` [`397a812`](https://github.com/coreui/coreui/commit/397a812af5edc608dd4745d0394649babaf7f0ec)
- fix: problems with link [`1fcba73`](https://github.com/coreui/coreui/commit/1fcba7349650f61618c2344699498b978f261ff2)
- fix(card): `rtl` for `card-header` icon margins [`0602445`](https://github.com/coreui/coreui/commit/06024455d6f58381ed32a411cbdfd3ff72c5dfb9)
- fix: perfect scrollbar issue [`7876c07`](https://github.com/coreui/coreui/commit/7876c07c239b752cf824e5f77e28a8f34364c653)
- fix(sidebar): `rtl` scrollbar issue temp fix [`418ff65`](https://github.com/coreui/coreui/commit/418ff655246ae9cceb43374305c630697ef14486)
- fix(layout): aside IE issue with `.main` margin on mobile [`9de9f99`](https://github.com/coreui/coreui/commit/9de9f99e419c5f1f3b49a500a8c67e5e78af4306)
- fix(hex-to-rgb/a): add missing parenthesis [`4306cfb`](https://github.com/coreui/coreui/commit/4306cfb69725300404c15d7882520db3cba42abc)
- fix(sidebar): `rtl` IE issue with `sidebar-minimized` captions [`3169110`](https://github.com/coreui/coreui/commit/31691102d66f374896b3265b9a6d700900e27f6c)
- fix: problems with link [`1157d6d`](https://github.com/coreui/coreui/commit/1157d6d20a462f3bce05629e9f4a4e02bd01197a)
- fix: perfect scrollbar issue [`f3fdf76`](https://github.com/coreui/coreui/commit/f3fdf76904382d927eac613f67f4930d55782fe1)
- fix: add left 0 to .chart-wrapper [`691b943`](https://github.com/coreui/coreui/commit/691b94373868f8960b1a743d18c5eee008de1af5)
- fix: hide nav-labels when sidebar-minimized [`36df591`](https://github.com/coreui/coreui/commit/36df591e88d8843fa45ac3d9f3968444f9acc225)

### Refactor

- refactor: merge boostrap and coreui [`14686cf`](https://github.com/coreui/coreui/commit/14686cf9571a8e10e0da17a55030be0633598ddc)
- refactor: sync with coreui pro [`bc36ac5`](https://github.com/coreui/coreui/commit/bc36ac56d2605f61cea9e6fd92b791ee719d80be)
- refactor: update to the latest version of Bootstrap [`4846c4e`](https://github.com/coreui/coreui/commit/4846c4efd2c7d2cd6a80f7e6bd8ea1b35cc137ea)
- refactor: update to the latest version of Bootstrap [`d832678`](https://github.com/coreui/coreui/commit/d8326787684330bac0eb3cb576876ac621282865)
- refactor: improve styles and clean-up [`55ba9e8`](https://github.com/coreui/coreui/commit/55ba9e8659c82d87834741635996d4b3ed56e6bd)
- refactor: sync with coreui pro [`6858fc2`](https://github.com/coreui/coreui/commit/6858fc230d23a36f1120ae97abc03758df515c26)
- refactor: change layout [`587fe1c`](https://github.com/coreui/coreui/commit/587fe1c51ccedc030032d44e103519320245d4fe)
- refactor: update colors; [`0c05730`](https://github.com/coreui/coreui/commit/0c05730fd5e9cd3bdb4af1c154c63d7ebea9cf09)
- refactor: clean-up [`ca4e870`](https://github.com/coreui/coreui/commit/ca4e8707b082d6cade27831b0fa64bffcd86f03b)
- refactor: clean-up [`05ee917`](https://github.com/coreui/coreui/commit/05ee917953a5ec3413a7d6e4d1e4a71cb00808b0)
- refactor: remove unnecessary fill property [`5b19f08`](https://github.com/coreui/coreui/commit/5b19f081e240d537bd43fc0713fb4973fe076e60)
- refactor: add height [`e4543c7`](https://github.com/coreui/coreui/commit/e4543c75650e543be3264d6d60901cad63cef951)
- refactor: remove prefixes from Bootstrap components [`f82df91`](https://github.com/coreui/coreui/commit/f82df9132d2b5ad434f326fe37b8326859227885)
- refactor: clean-up [`6cf8b0a`](https://github.com/coreui/coreui/commit/6cf8b0a3f1d3044d8222d259d9177e981ba4463f)
- refactor: improve themes [`d43f83b`](https://github.com/coreui/coreui/commit/d43f83b0e92fc8b94e7d3e814373654f29399070)
- refactor: improve themes system [`78e788b`](https://github.com/coreui/coreui/commit/78e788bb0975b02583b4af41fe6bad3c5a8aec54)
- refactor: remove jQuery [`8dd6664`](https://github.com/coreui/coreui/commit/8dd666446de53330f33d74335e44f59fe377dda8)
- refactor: update Bootstraps scripts [`b1e9f61`](https://github.com/coreui/coreui/commit/b1e9f614c9f2884fc7ec1b7082aeb93f2922b9d8)
- refactor: moved some styles from layouts/_default.scss to _sidebar.scss; feat: add sidebar brand, light and dark layout, multiple sidebars support, left and right sidebar [`341a624`](https://github.com/coreui/coreui/commit/341a624502a9e44a79d10fb64b4c715f3e2cc9fe)
- refactor: add `c-` prefix to each class [`0b93c2f`](https://github.com/coreui/coreui/commit/0b93c2f710a032174309703439e105d87ba347c1)
- refactor: improve script [`aa4cd0a`](https://github.com/coreui/coreui/commit/aa4cd0a38cb65bd5020f319f45d56e4f57defde6)
- refactor: fix linter errors [`31e53e9`](https://github.com/coreui/coreui/commit/31e53e9243d3b8ad72e8c72f7c4a88c100e1653c)
- refactor: moved layouts to separate files [`fb55768`](https://github.com/coreui/coreui/commit/fb557685ea1d5a89c2aa6564b97c2553ff4e67ec)
- refactor: removed jQuery and change name to AsyncLoad [`9da6f67`](https://github.com/coreui/coreui/commit/9da6f6770b4d4f68f93c8e407c39031a567457d8)
- refactor: theme generator, clean-up [`afb6a3f`](https://github.com/coreui/coreui/commit/afb6a3f47c8f3df0b386d0da85e8f0e20bedff1e)
- refactor: add `c-` prefix to each class [`c310afb`](https://github.com/coreui/coreui/commit/c310afb41c0e29035f0f01324d82bb962e17cfde)
- refactor: removed all togglers, use `.c-class-toggler` instead of [`166712e`](https://github.com/coreui/coreui/commit/166712e5894b0fb20c178fe5188ac399da47b851)
- refactor: remove aside component, add nav-tabs to sidebar [`fe602a7`](https://github.com/coreui/coreui/commit/fe602a7a159ce493e910cad0d696df69c18a86d6)
- refactor: add `c-` prefix to each class [`980c487`](https://github.com/coreui/coreui/commit/980c487fde1b7c1fe5da28d31236693364a6aa30)
- refactor: improve code quality [`8297caf`](https://github.com/coreui/coreui/commit/8297caf69d07f4ae504e03a7c49ad4ec7dde6a6f)
- refactor: remove jQuery [`a197d5f`](https://github.com/coreui/coreui/commit/a197d5f91c16c78ebb31a7ac4e2a23968f5d3891)
- refactor: change size; feat: subheader [`2a31578`](https://github.com/coreui/coreui/commit/2a3157898c5bd3c1a559f2aed23d604f182dc22c)
- refactor: borders mixin [`cbcf6c3`](https://github.com/coreui/coreui/commit/cbcf6c38a7e7748abbb7beffb3a8e3c15fb735cc)
- feat: avatars with text, square avatars, rounded avatars; refactor: better styles [`3e77738`](https://github.com/coreui/coreui/commit/3e77738a1bbd845b089883d9142ad1d3d1f248c8)
- refactor: moved animations to _transitions.scss [`9ff82d2`](https://github.com/coreui/coreui/commit/9ff82d2f9b8369bd30c501c59121737ae5329bb3)
- refactor: remove old scripts before loading new [`a90908c`](https://github.com/coreui/coreui/commit/a90908c0cee4d9b7470e83295ca501e69f683ca0)
- refactor: bg-* variants [`2ee5f1b`](https://github.com/coreui/coreui/commit/2ee5f1bedbc7c43810d6475e789d4a52743eaa4e)
- refactor: moved some styles from _layouts.scss [`9bcce73`](https://github.com/coreui/coreui/commit/9bcce73a73644650264fe88c41442b64de6cc2ff)
- refactor: change rgba colors to variables [`e9cef97`](https://github.com/coreui/coreui/commit/e9cef97e54ea887edf9c909d47db489234c9dd66)
- refactor: change header height to 60px and header brand width to 250px [`fce9e9a`](https://github.com/coreui/coreui/commit/fce9e9a7602dc860b3b555af0aa35c928a42e1fb)
- refactor: update bootstrap styles [`95658f8`](https://github.com/coreui/coreui/commit/95658f8c00fc6ae4d144eed9567ba832f7384b73)
- refactor: change css clasess [`400032f`](https://github.com/coreui/coreui/commit/400032ffa2764fc20338b417e2ae2a25309de378)
- refactor: change cap bg color [`b43b506`](https://github.com/coreui/coreui/commit/b43b50609480a2b377cf3f848df56ac1cdabe0db)
- refactor: change rgba colors to variables [`0a881e4`](https://github.com/coreui/coreui/commit/0a881e43e1213daaaea67d220b2fa27acab4ec70)
- refactor: change bg color [`635f335`](https://github.com/coreui/coreui/commit/635f335f2f0fd2d41d4fc2a4a690bd8f3ab9e8c2)
- refactor: change border color [`be22f62`](https://github.com/coreui/coreui/commit/be22f62ccd3f3bc0c178eb89a7b6623a60b33cf9)
- refactor: add margin-top to c-nav-title [`2d983d0`](https://github.com/coreui/coreui/commit/2d983d08deefa869dd3281547eeedb72630880da)
- refactor: change active link color to $white [`bc46704`](https://github.com/coreui/coreui/commit/bc467041d1d888dcc0c92ef4619485470a9349d4)
- refactor: change secondary color to lighter [`1e9ebd5`](https://github.com/coreui/coreui/commit/1e9ebd50ba72ed17cd6c45f51bb6b8ebd30a0ba1)
- refactor: linter [`9180c09`](https://github.com/coreui/coreui/commit/9180c090a21f8603004ff4e8caa64261e2bd9ce8)
- refactor: change name [`b79d7b0`](https://github.com/coreui/coreui/commit/b79d7b04e04798e6f8d99288b66f87762df4ef1d)
- refactor: add new class with prefix [`0774ef6`](https://github.com/coreui/coreui/commit/0774ef64628d711ffc965f9b2d791566df453962)
- refactor: deep-object-merge utility [`4a568f4`](https://github.com/coreui/coreui/commit/4a568f41ed239b8057624e8e910bd4719a522b1c)
- refactor: add utilities/classes [`d4fca8c`](https://github.com/coreui/coreui/commit/d4fca8c48b1ecc8dc57a72ccf41fb164f22975b5)
- refactor: utilities/get-color [`1af26c7`](https://github.com/coreui/coreui/commit/1af26c74dac2b302b1f8d015a6d44025a4e421d9)
- refactor(sidebar.js): ps minor cleanup [`736fc50`](https://github.com/coreui/coreui/commit/736fc50ad98bfcff4dc022c1a8a877d1d249bc2d)
- refactor: update to boostrap v4.1.0 [`a926b65`](https://github.com/coreui/coreui/commit/a926b65c2932926c6b52b4c2e2c2438166fb77be)
- refactor: improve gray colors [`04d0bbf`](https://github.com/coreui/coreui/commit/04d0bbf965917146bd67ed278f7941f123205083)
- refactor: new structure [`1c3b130`](https://github.com/coreui/coreui/commit/1c3b1304a112acc3fee900c4849095b30a9c4787)
- refactor: improve switches [`5282e19`](https://github.com/coreui/coreui/commit/5282e1939e584a4b13b1858e1ae1e8363423b5f5)
- refactor: new structure [`9c8e4a1`](https://github.com/coreui/coreui/commit/9c8e4a14bb4c352c1ddfe4c1a4a2e34403abcf02)
- refactor: improve switches [`961b80e`](https://github.com/coreui/coreui/commit/961b80e6aef836c1984537ac816d7c740a5fc8c0)
- refactor: improve avatar's styles [`3043b46`](https://github.com/coreui/coreui/commit/3043b4636c70223d159f474bba9b3268e9eb3f56)
- refactor: remove all functions [`db8173a`](https://github.com/coreui/coreui/commit/db8173a0fa87ba24ee6e62ab07a781dfc56974e8)
- refactor: change navnar to header [`27e5fc7`](https://github.com/coreui/coreui/commit/27e5fc769e8a1d9501867efe6314424c747362cc)
- refactor: remove pace [`cbdb79c`](https://github.com/coreui/coreui/commit/cbdb79cc2f75d782d70f6af1bb8f608dfe3e0b20)
- refactor: add error handling [`7e59665`](https://github.com/coreui/coreui/commit/7e596651918812ba685192e28a9759224c693e45)
- refactor: remove ResizeBroadcast funtion [`aabab0b`](https://github.com/coreui/coreui/commit/aabab0b8f43c388a1dd0c8ce128d9f286dfe6bf6)
- refactor(getStyle): polyfill IE custom properties [`ff12271`](https://github.com/coreui/coreui/commit/ff12271a838cd8c0fa83de17e83f794872487403)
- refactor: improve tooltips [`e6f8511`](https://github.com/coreui/coreui/commit/e6f8511022867f5ea8e927f63822203c7a45d570)
- refactor: add selectors [`74a12b7`](https://github.com/coreui/coreui/commit/74a12b779146b28d7d918bb8875fee0d7aa1b172)
- refactor: remove pace and eslint errors [`3128972`](https://github.com/coreui/coreui/commit/312897271033e9fbc21254e8c22aa5d39406f247)
- refactor: improve .card-actions [`b48f843`](https://github.com/coreui/coreui/commit/b48f8435043da5de945d349e31fd0f28b9bb65dc)
- refactor: update colors [`13fbde7`](https://github.com/coreui/coreui/commit/13fbde7d91b6da7840633a389050140340aa8969)
- refactor: add Selector.INIT [`b698234`](https://github.com/coreui/coreui/commit/b698234ec90445053a094344960a512814ddaacf)
- refactor: remove pace [`c5e04d3`](https://github.com/coreui/coreui/commit/c5e04d3befa1a894c302cd45be4e14f769bfc191)
- refactor: add border-radius(0) nav-link [`f7057d0`](https://github.com/coreui/coreui/commit/f7057d0aa58f435566e09f6abd76a5df186e9ff6)

## [v3.1.1](https://github.com/coreui/coreui/compare/v3.1.0...v3.1.1)

> 13 February 2014

## [v3.1.0](https://github.com/coreui/coreui/compare/v3.0.3...v3.1.0)

> 30 January 2014

### Fix

- Small fix: I noticed the use of a deprecated variable. This seems to be the only occurrence. [`dd9c5fd`](https://github.com/coreui/coreui/commit/dd9c5fdb08a8445fc44117386ca3bead38b717a9)
- typo fix: replaced 'model-open' with 'modal-open' [`50f1bc4`](https://github.com/coreui/coreui/commit/50f1bc47ece352f1e647c345fd9b699707a40b98)

## [v3.0.3](https://github.com/coreui/coreui/compare/v3.0.2...v3.0.3)

> 5 December 2013

### Fix

- Alternate fix for #11303: add link to site in banner and remove @mdo and @fat usernames from it [`a7a9dca`](https://github.com/coreui/coreui/commit/a7a9dcaeb2231b2580cf79fcee7d777b98ac24d8)
- fixes part of #11117: doc that modal show()/hide() return before animation finishes [`afbdc21`](https://github.com/coreui/coreui/commit/afbdc21def8cf451e73895a6e2594e3dfa0a64e5)

## [v3.0.2](https://github.com/coreui/coreui/compare/v3.0.1...v3.0.2)

> 6 November 2013

## [v3.0.1](https://github.com/coreui/coreui/compare/v3.0.0...v3.0.1)

> 30 October 2013

### Fix

- fixes #: remove double background color on dropdown links [`5af5c2e`](https://github.com/coreui/coreui/commit/5af5c2ed368e8b728306b90082d32719d5a15b54)
- alternate fix to #4522: increase line-height on btn-mini [`46c10c8`](https://github.com/coreui/coreui/commit/46c10c8b58919841d9adbc4908a127bf5eff88ad)
- Better clearing on `.dl-horizontal` for empty `dd` elements [`37f4a25`](https://github.com/coreui/coreui/commit/37f4a25be436e8b25004d22541809032d8354600)
- alt fix to #10278: Change Google Maps compatibility warning to a general box-sizing warning [`bfda156`](https://github.com/coreui/coreui/commit/bfda156bb95c115ac9abba880074d4582c81dc0d)
- Half fix for #9855: Don't fuck with margins for open modal dialog on account of Lion non-scrollbars and inconsistencies elsewhere [`352532c`](https://github.com/coreui/coreui/commit/352532cd63a2d8e03ba7db806aa3bd110c023532)
- finish fixing #9295: add button group buttons to new input group sizing [`4957670`](https://github.com/coreui/coreui/commit/49576704ea6c24fbc4cb32f44c5986a1e7714634)
- typo fixed: highligted source code of second radio button was missing in css.html -&gt; checkboxes & radios -&gt; default section [`6f9ed7e`](https://github.com/coreui/coreui/commit/6f9ed7efeb0a4f3252f0f11d53d5f9be065abc4f)
- hotfix: github buttons urls [`5df1e2c`](https://github.com/coreui/coreui/commit/5df1e2c00a295c45db7fa75dba333dc9464b128c)
- Navbar toggle is not vertically aligned (3.0.0-wip) with custom navbar height [`0017f7f`](https://github.com/coreui/coreui/commit/0017f7fca4d34b37b63275f1aab79baad16ed5e1)
- alt fix to #3029: change to single border-radii properties [`8575a45`](https://github.com/coreui/coreui/commit/8575a452942001bce522e8e258d9e192d24cb6ec)
- fix left and right tab-content alignment with width: auto; [`c4fb703`](https://github.com/coreui/coreui/commit/c4fb7032690ed10162562dfbf893311389a64dee)
- fix docs: move .pull-left from search input to search form in navbar [`7749044`](https://github.com/coreui/coreui/commit/774904464dc8237b36be8197ca7c91d701ce4f0e)
- fix right aligned dropdowns in navbar by adding left: auto; to nix default alignment [`ad78caa`](https://github.com/coreui/coreui/commit/ad78caa72639aa377caf584efc26fe7a5682b15c)
- Update justified-nav.css [`c76b7a5`](https://github.com/coreui/coreui/commit/c76b7a53a416f74ced4ad7124e38a305ac477bb5)

## [v3.0.0](https://github.com/coreui/coreui/compare/v3.0.0-rc1...v3.0.0)

> 20 February 2020

### Features

- feat: add support for multiple themes [`cbb7321`](https://github.com/coreui/coreui/commit/cbb73219a7de443b155c7647af825b47b5adb05f)
- feat: add dark layout to components [`ea97bf2`](https://github.com/coreui/coreui/commit/ea97bf2f13efc8dd4296b298c193a1e591218b14)
- refactor: moved some styles from layouts/_default.scss to _sidebar.scss; feat: add sidebar brand, light and dark layout, multiple sidebars support, left and right sidebar [`341a624`](https://github.com/coreui/coreui/commit/341a624502a9e44a79d10fb64b4c715f3e2cc9fe)
- feat: new c-header component [`f13ec5c`](https://github.com/coreui/coreui/commit/f13ec5c7659fa7d223c6020faecd3dbdc8532da8)
- feat: add class prefix [`3f3d9c2`](https://github.com/coreui/coreui/commit/3f3d9c28fbc3f21e623341dace5119bea6a20a5e)
- feat: add a smooth transition [`28153be`](https://github.com/coreui/coreui/commit/28153beff85fcd8df8f01c3cdaec3c72da63c25b)
- feat: Class Toggler [`29978df`](https://github.com/coreui/coreui/commit/29978df93943fd6f82987c19c51434ea064e65ca)
- feat: add prefix to .active, .focus, .disable classes [`5edbec2`](https://github.com/coreui/coreui/commit/5edbec22b4958a63244b6db7105762833da3364a)
- feat: add prefixe; docs: update banners [`083ad60`](https://github.com/coreui/coreui/commit/083ad60ec82cefd6cfa8669b57364fc603066fe6)
- feat: multiple sidebars support [`94bc392`](https://github.com/coreui/coreui/commit/94bc392135e5c5dbfb00ea3ba632d97c46005a5d)
- refactor: change size; feat: subheader [`2a31578`](https://github.com/coreui/coreui/commit/2a3157898c5bd3c1a559f2aed23d604f182dc22c)
- feat: add events [`29eb443`](https://github.com/coreui/coreui/commit/29eb44317ecbbcb4c448ae1b149583664200f507)
- feat: avatars with text, square avatars, rounded avatars; refactor: better styles [`3e77738`](https://github.com/coreui/coreui/commit/3e77738a1bbd845b089883d9142ad1d3d1f248c8)
- feat: predefined c-icon sizes [`6969aab`](https://github.com/coreui/coreui/commit/6969aab1c914397838b54bdb76e438081129a94b)
- feat(scss): sidebar-nav-link-disabled [`243694e`](https://github.com/coreui/coreui/commit/243694ed5d7e2bc81f30ddd4a34f6119b2377eea)
- feat: add new styles to toaster component [`0119e56`](https://github.com/coreui/coreui/commit/0119e5663149854f538690d01bed2518cf908c8b)
- feat: toggle on parentNode [`a808c30`](https://github.com/coreui/coreui/commit/a808c30df29ff3984a0817b33fc8abc037257334)
- feat: multiple sidebars support [`ff74d66`](https://github.com/coreui/coreui/commit/ff74d663cfc68ae5484f81720dbd50050146018f)
- feat: add footer variants [`f88fda0`](https://github.com/coreui/coreui/commit/f88fda0fdfe9439bf0778f27e9dc484a6db8c5b2)
- feat: add transparent borders [`cdc97d7`](https://github.com/coreui/coreui/commit/cdc97d72637e3963c66cdddd3a51a3054f41462b)
- feat: add events [`bbbaa08`](https://github.com/coreui/coreui/commit/bbbaa08d631b9292491cfb87f3c4f9e42254b07b)
- feat: add composer styles [`e3f011d`](https://github.com/coreui/coreui/commit/e3f011d114ea496bea5351532fa6836eaebb807a)
- feat: add meteor support [`3b10562`](https://github.com/coreui/coreui/commit/3b105629c125d078128b993be27fa1c763f6dcb2)
- feat: active links with hash and query strings [`e5d10d0`](https://github.com/coreui/coreui/commit/e5d10d0d1627fbfbdc83fb4d6e6932969b4966d5)
- feat: predefined c-icon sizes [`41a59ad`](https://github.com/coreui/coreui/commit/41a59ad3220a6daec0244d260fa2bcdf5ffc7856)
- feat: add smooth transition to navbar brand [`2325004`](https://github.com/coreui/coreui/commit/2325004b20c68c20e9bd98798bf282b136017b9b)
- feat: predefined c-icon sizes [`48169bc`](https://github.com/coreui/coreui/commit/48169bc93cfc276a20d26cb44d9d0b17dfd009d7)
- feat: vertical line [`16e794e`](https://github.com/coreui/coreui/commit/16e794e6b86e3687b5cff651ed49a6ed4adc83da)
- feat: add smooth transition to c-nav-link [`947681c`](https://github.com/coreui/coreui/commit/947681c02f4db73a0fc0eb500b546250c6c0de77)
- feat(sidebar): mobile clickout behaviour [`93c8895`](https://github.com/coreui/coreui/commit/93c8895a4d2b1ddde7b567121e7af6515272bb58)
- feat: add deep objects merge script [`d0c3f2f`](https://github.com/coreui/coreui/commit/d0c3f2f1e361f073daf09724534bafb4796a2d26)
- feat: sidebar set active using query string [`e1b5e41`](https://github.com/coreui/coreui/commit/e1b5e41c395f8031b25ca31c0d0be51f16de56ca)
- feat: add standalone styles [`0c40cf8`](https://github.com/coreui/coreui/commit/0c40cf8b182b61dcd0eb272fe625a548c3bde213)
- feat: add coreui utilities [`be0e20b`](https://github.com/coreui/coreui/commit/be0e20b8c2dd16720dc4dd27b247f9fdbc2b030b)
- feat: AjaxLoad [`1910aee`](https://github.com/coreui/coreui/commit/1910aee643a954122ab2ef4fab713ba88c11dad3)
- feat: Sidebar [`3fa81ce`](https://github.com/coreui/coreui/commit/3fa81ce9615952d23549d576ba114593cb903f8a)
- feat: AsideMenu [`b32ae37`](https://github.com/coreui/coreui/commit/b32ae3759e8ef051e9c4549e38bf3be608b06db4)
- feat: add ghost and square buttons [`6d5e0f6`](https://github.com/coreui/coreui/commit/6d5e0f6920ee1b50de96733efe340bfe8b52480c)
- feat: list group with accent [`5590e03`](https://github.com/coreui/coreui/commit/5590e03a8792e328f738827c4559b5cd55e80e07)
- feat: sidebar set active using query string [`bb82dae`](https://github.com/coreui/coreui/commit/bb82daef9ba21f9853bf01bcbe119fde5049546b)
- feat: add npm postinstall scripts [`33d3b06`](https://github.com/coreui/coreui/commit/33d3b06315aafc833722ab9648cc139eb4365a97)
- feat: add img-circle [`5aa3b72`](https://github.com/coreui/coreui/commit/5aa3b7253735da506846e7583c5c7aec9e145621)
- feat: add d-minimized-none and d-compact-none [`f41761c`](https://github.com/coreui/coreui/commit/f41761c828a9bbc7eaee9c3fafcd3f8e334b2404)
- feat: enable rounded elements in layout [`7a3cba1`](https://github.com/coreui/coreui/commit/7a3cba16041347fb91f8362be614f953b68db444)
- feat: predefined c-icon sizes [`712cecf`](https://github.com/coreui/coreui/commit/712cecf8dd8cb9b2ed70f76167213bd62a43e0e8)
- feat: list group with accent [`89a4856`](https://github.com/coreui/coreui/commit/89a4856030689eaf8cd5183448d68a81c5cd1714)
- feat: list group with accent [`68645aa`](https://github.com/coreui/coreui/commit/68645aaa902c1ec857ab4cb3b71a045201784a2c)

### Fix

- fix: update nodemon to 1.18.7 [`609940e`](https://github.com/coreui/coreui/commit/609940ed7a4354ca121cc225fca29bdbd44fd020)
- feat: add prefixe; docs: update banners [`083ad60`](https://github.com/coreui/coreui/commit/083ad60ec82cefd6cfa8669b57364fc603066fe6)
- fix: add focus state styles [`4cb33ac`](https://github.com/coreui/coreui/commit/4cb33ace5bc020b5ca96e5e6ece734ddc2293e3c)
- fix: mobile sidebar [`f580bc9`](https://github.com/coreui/coreui/commit/f580bc99c6a5ead4447b0bc0ca33293c8fd22fa1)
- fix: prefixes; [`0924931`](https://github.com/coreui/coreui/commit/09249316ca4a0e82f68aaa891e48de9485b81468)
- fix: sidebar-right and rtl borders issue [`8ae909c`](https://github.com/coreui/coreui/commit/8ae909c858dfe5f91099874a6670557eea8d4c84)
- fix: sidebar-minimized z-index issue [`c873ab9`](https://github.com/coreui/coreui/commit/c873ab98d92e2a0c8213fbf98168a203ad43c127)
- fix: wrong display when dir=rtl [`7176fb7`](https://github.com/coreui/coreui/commit/7176fb727e2de57efc306d06da1dda79b21d7e3c)
- fix: add missing class [`7c7659d`](https://github.com/coreui/coreui/commit/7c7659de9d341b7df84e58c09fa69fe750a52330)
- fix: sidebar-right and rtl borders issue [`a4fc6f3`](https://github.com/coreui/coreui/commit/a4fc6f38f198b644d959658433cfda7f94984f6a)
- fix: minized sidebar issue [`f51238a`](https://github.com/coreui/coreui/commit/f51238a80bc40e52c6c18411c6779501302bac2a)
- fix: c-clearfix issue [`edfd3c3`](https://github.com/coreui/coreui/commit/edfd3c3c632473072c6e7aae7470adfd3e3def83)
- fix: sidebar minimizer chevron issue [`7d8dd6f`](https://github.com/coreui/coreui/commit/7d8dd6f72e31af504a83e5bc3668dee09b00a43d)
- fix: c-sidebar-minimizer is visible on mobile devices [`fbccdef`](https://github.com/coreui/coreui/commit/fbccdefff0c1810030fe6ee5a905a3829ce27d4e)
- fix: c-nav-link issue [`d5345fe`](https://github.com/coreui/coreui/commit/d5345fee1eacb177c215c35580fe4fb490b25cc0)
- fix: white progress-bar background issue [`019924b`](https://github.com/coreui/coreui/commit/019924bc5601d0b21ee1c2643d14a41dfd63d06c)
- fix: add c- prefix to show class [`2301cf3`](https://github.com/coreui/coreui/commit/2301cf39a2b0f07dae6d77bbb236839f0a05655d)
- fix: sidebar-right and rtl borders issue [`5320b3b`](https://github.com/coreui/coreui/commit/5320b3b9f74a10c40a45f7180ddf1517fe796bb7)
- fix: sidebar, sidebar-minimizer `rtl` ie issues, tweaks [`4fd3b0b`](https://github.com/coreui/coreui/commit/4fd3b0b2c0d3bb3bb60da435f95239b8cf3691c4)
- fix(ie): add `NodeList` `forEach` polyfill [`99411e8`](https://github.com/coreui/coreui/commit/99411e83f427872fc92be6c33a909b89359efe05)
- fix(layout): sidebar on mobile issue [`6b2bd0b`](https://github.com/coreui/coreui/commit/6b2bd0b025d4fcda4818ea5569e3a1e32a70c87d)
- fix(sidebar): `rtl` for `sidebar-minimizer` icon [`d30084c`](https://github.com/coreui/coreui/commit/d30084c1b45a22a5b196716a732e1ba5360044c7)
- fix(breadcrumb): `rtl` padding [`7b093a1`](https://github.com/coreui/coreui/commit/7b093a161c837660e56a712ff08c7483b33fa41c)
- fix(sidebar): `rtl` ps scrollbar issue temp fix/refactor [`046a16a`](https://github.com/coreui/coreui/commit/046a16a707dcf37cc2e7a3fd8cb35a552c476f4a)
- fix(card): `rtl` float for `card-header-actions` [`397a812`](https://github.com/coreui/coreui/commit/397a812af5edc608dd4745d0394649babaf7f0ec)
- fix(buttons.scss): remove `button { @extend .btn; }` [`c6a9292`](https://github.com/coreui/coreui/commit/c6a9292548dc783655203fbf29f0a6aed8dc5c35)
- fix(card): `rtl` for `card-header` icon margins [`0602445`](https://github.com/coreui/coreui/commit/06024455d6f58381ed32a411cbdfd3ff72c5dfb9)
- fix(rgbToHex): transparent is not a valid rgb color ie issue [`b3e15c2`](https://github.com/coreui/coreui/commit/b3e15c2ff76f3e9dd02668ce4386b637ef9a8e41)
- fix(build): add missing `commonjs` for utilities [`f782b1e`](https://github.com/coreui/coreui/commit/f782b1ec1d038a55276c1a17066891a592534852)
- fix(aside-menu): add `dataset.toggle` ie10 fix [`b263107`](https://github.com/coreui/coreui/commit/b263107e51f3d561d7c0f3ec93673d1a1df106d2)
- fix(sidebar): add `dataset.toggle` ie10 fix [`b340a2f`](https://github.com/coreui/coreui/commit/b340a2f1e82051ac03dcf5860bc5bc3354080c38)
- fix(buttons.scss): wrong cursor for disabled state [`9d926eb`](https://github.com/coreui/coreui/commit/9d926eb2a1f0c1cdc02f0978faeae2b6f14f3cd1)
- fix: add new event update [`33f90de`](https://github.com/coreui/coreui/commit/33f90deaade72be7bff3a6cb74e6f0351f07c8bb)
- fix: ie11-custom-properties [`d3a870f`](https://github.com/coreui/coreui/commit/d3a870f6e15119560e66dfd2ece4ff18f93f0095)
- fix: ie11-custom-properties [`c80c199`](https://github.com/coreui/coreui/commit/c80c199f41dd4002a37048f085b140dea8de255b)
- fix: navbar bg issue, hidden sidebar-minimizer on tablets [`6c4a93e`](https://github.com/coreui/coreui/commit/6c4a93ec18b591dec14b3a86c06d1efda6d1e7e5)
- fix: wrong functions names [`0c807a3`](https://github.com/coreui/coreui/commit/0c807a370466cb03d75f2464a32a2ca68d4f87eb)
- fix: XMLHttpRequest issue [`ed94d44`](https://github.com/coreui/coreui/commit/ed94d44d05a39a23819fab2c0a134d94489b9cc0)
- fix: ie11-custom-properties [`b5143bb`](https://github.com/coreui/coreui/commit/b5143bb428634c3e38f824f1dda8c6663f4a96cf)
- fix(sidebar): remove scrollbar when `sidebar-minimized` [`76c38bc`](https://github.com/coreui/coreui/commit/76c38bc134c4bf29035d6b53a904e490f86ff047)
- fix: switch-pill issue [`d73fcc1`](https://github.com/coreui/coreui/commit/d73fcc1b35e79d575c053d91d2051bbdc5785c0e)
- fix: add new event update [`3319a75`](https://github.com/coreui/coreui/commit/3319a750d1fd0c8237b5d79c78c28778f1247867)
- fix: ie11-custom-properties [`cd10d8c`](https://github.com/coreui/coreui/commit/cd10d8ca6475de87888ee5678c2106421572f2cd)
- fix: remove borders from disabled buttons [`a5be78a`](https://github.com/coreui/coreui/commit/a5be78a6542df1472937642bfb5fcc313e768098)
- fix(sidebar-toggler): `rtl` position issue [`59062e2`](https://github.com/coreui/coreui/commit/59062e2adf3708fb842aad8850fe4f256b0fdcba)
- fix: add border-radius to icons [`a268eb2`](https://github.com/coreui/coreui/commit/a268eb2aa4ac89ece12c69923413d5753815ba4b)
- fix: eslint errors [`48d6569`](https://github.com/coreui/coreui/commit/48d656925a8bf70d9ab44867590b95f9c939f8a9)
- fix: delegate event handlers to support turbolinks [`49ac147`](https://github.com/coreui/coreui/commit/49ac1477a939e93a23d51d111d927e1de7c5c8d0)
- fix: problems with link [`1fcba73`](https://github.com/coreui/coreui/commit/1fcba7349650f61618c2344699498b978f261ff2)
- fix: perfect scrollbar issue [`7876c07`](https://github.com/coreui/coreui/commit/7876c07c239b752cf824e5f77e28a8f34364c653)
- fix(sidebar): `rtl` scrollbar issue temp fix [`418ff65`](https://github.com/coreui/coreui/commit/418ff655246ae9cceb43374305c630697ef14486)
- fix(layout): aside IE issue with `.main` margin on mobile [`9de9f99`](https://github.com/coreui/coreui/commit/9de9f99e419c5f1f3b49a500a8c67e5e78af4306)
- fix(hex-to-rgb/a): add missing parenthesis [`4306cfb`](https://github.com/coreui/coreui/commit/4306cfb69725300404c15d7882520db3cba42abc)
- fix(sidebar): `rtl` IE issue with `sidebar-minimized` captions [`3169110`](https://github.com/coreui/coreui/commit/31691102d66f374896b3265b9a6d700900e27f6c)
- fix: problems with link [`1157d6d`](https://github.com/coreui/coreui/commit/1157d6d20a462f3bce05629e9f4a4e02bd01197a)
- fix: perfect scrollbar issue [`f3fdf76`](https://github.com/coreui/coreui/commit/f3fdf76904382d927eac613f67f4930d55782fe1)
- fix: remove .c-nav margins [`e6210e7`](https://github.com/coreui/coreui/commit/e6210e78fac0e98be52b23662c2a95af7f5d58b1)
- fix(.sidebar-minimizer): add `cursor: pointer` [`7f1f257`](https://github.com/coreui/coreui/commit/7f1f2579162f644f12b9946b9a1eaa05c9815f8c)
- fix: add left 0 to .chart-wrapper [`691b943`](https://github.com/coreui/coreui/commit/691b94373868f8960b1a743d18c5eee008de1af5)
- fix: hide nav-labels when sidebar-minimized [`36df591`](https://github.com/coreui/coreui/commit/36df591e88d8843fa45ac3d9f3968444f9acc225)

### Refactor

- refactor: merge boostrap and coreui [`14686cf`](https://github.com/coreui/coreui/commit/14686cf9571a8e10e0da17a55030be0633598ddc)
- refactor: remove prefixes from Bootstrap components [`f82df91`](https://github.com/coreui/coreui/commit/f82df9132d2b5ad434f326fe37b8326859227885)
- refactor: clean-up [`6cf8b0a`](https://github.com/coreui/coreui/commit/6cf8b0a3f1d3044d8222d259d9177e981ba4463f)
- refactor: sync with coreui pro [`bc36ac5`](https://github.com/coreui/coreui/commit/bc36ac56d2605f61cea9e6fd92b791ee719d80be)
- refactor: improve themes [`d43f83b`](https://github.com/coreui/coreui/commit/d43f83b0e92fc8b94e7d3e814373654f29399070)
- refactor: improve themes system [`78e788b`](https://github.com/coreui/coreui/commit/78e788bb0975b02583b4af41fe6bad3c5a8aec54)
- refactor: remove jQuery [`8dd6664`](https://github.com/coreui/coreui/commit/8dd666446de53330f33d74335e44f59fe377dda8)
- refactor: update Bootstraps scripts [`b1e9f61`](https://github.com/coreui/coreui/commit/b1e9f614c9f2884fc7ec1b7082aeb93f2922b9d8)
- refactor: moved some styles from layouts/_default.scss to _sidebar.scss; feat: add sidebar brand, light and dark layout, multiple sidebars support, left and right sidebar [`341a624`](https://github.com/coreui/coreui/commit/341a624502a9e44a79d10fb64b4c715f3e2cc9fe)
- refactor: add `c-` prefix to each class [`0b93c2f`](https://github.com/coreui/coreui/commit/0b93c2f710a032174309703439e105d87ba347c1)
- refactor: update to the latest version of Bootstrap [`4846c4e`](https://github.com/coreui/coreui/commit/4846c4efd2c7d2cd6a80f7e6bd8ea1b35cc137ea)
- refactor: improve script [`aa4cd0a`](https://github.com/coreui/coreui/commit/aa4cd0a38cb65bd5020f319f45d56e4f57defde6)
- refactor: update to the latest version of Bootstrap [`d832678`](https://github.com/coreui/coreui/commit/d8326787684330bac0eb3cb576876ac621282865)
- refactor: fix linter errors [`31e53e9`](https://github.com/coreui/coreui/commit/31e53e9243d3b8ad72e8c72f7c4a88c100e1653c)
- refactor: improve styles and clean-up [`55ba9e8`](https://github.com/coreui/coreui/commit/55ba9e8659c82d87834741635996d4b3ed56e6bd)
- refactor: moved layouts to separate files [`fb55768`](https://github.com/coreui/coreui/commit/fb557685ea1d5a89c2aa6564b97c2553ff4e67ec)
- refactor: removed jQuery and change name to AsyncLoad [`9da6f67`](https://github.com/coreui/coreui/commit/9da6f6770b4d4f68f93c8e407c39031a567457d8)
- refactor: theme generator, clean-up [`afb6a3f`](https://github.com/coreui/coreui/commit/afb6a3f47c8f3df0b386d0da85e8f0e20bedff1e)
- refactor: add `c-` prefix to each class [`c310afb`](https://github.com/coreui/coreui/commit/c310afb41c0e29035f0f01324d82bb962e17cfde)
- refactor: sync with coreui pro [`6858fc2`](https://github.com/coreui/coreui/commit/6858fc230d23a36f1120ae97abc03758df515c26)
- refactor: removed all togglers, use `.c-class-toggler` instead of [`166712e`](https://github.com/coreui/coreui/commit/166712e5894b0fb20c178fe5188ac399da47b851)
- refactor: remove aside component, add nav-tabs to sidebar [`fe602a7`](https://github.com/coreui/coreui/commit/fe602a7a159ce493e910cad0d696df69c18a86d6)
- refactor: add `c-` prefix to each class [`980c487`](https://github.com/coreui/coreui/commit/980c487fde1b7c1fe5da28d31236693364a6aa30)
- refactor: improve code quality [`8297caf`](https://github.com/coreui/coreui/commit/8297caf69d07f4ae504e03a7c49ad4ec7dde6a6f)
- refactor: remove jQuery [`a197d5f`](https://github.com/coreui/coreui/commit/a197d5f91c16c78ebb31a7ac4e2a23968f5d3891)
- refactor: change layout [`587fe1c`](https://github.com/coreui/coreui/commit/587fe1c51ccedc030032d44e103519320245d4fe)
- refactor: change size; feat: subheader [`2a31578`](https://github.com/coreui/coreui/commit/2a3157898c5bd3c1a559f2aed23d604f182dc22c)
- refactor: borders mixin [`cbcf6c3`](https://github.com/coreui/coreui/commit/cbcf6c38a7e7748abbb7beffb3a8e3c15fb735cc)
- feat: avatars with text, square avatars, rounded avatars; refactor: better styles [`3e77738`](https://github.com/coreui/coreui/commit/3e77738a1bbd845b089883d9142ad1d3d1f248c8)
- refactor: update colors; [`0c05730`](https://github.com/coreui/coreui/commit/0c05730fd5e9cd3bdb4af1c154c63d7ebea9cf09)
- refactor: clean-up [`ca4e870`](https://github.com/coreui/coreui/commit/ca4e8707b082d6cade27831b0fa64bffcd86f03b)
- refactor: moved animations to _transitions.scss [`9ff82d2`](https://github.com/coreui/coreui/commit/9ff82d2f9b8369bd30c501c59121737ae5329bb3)
- refactor: remove old scripts before loading new [`a90908c`](https://github.com/coreui/coreui/commit/a90908c0cee4d9b7470e83295ca501e69f683ca0)
- refactor: bg-* variants [`2ee5f1b`](https://github.com/coreui/coreui/commit/2ee5f1bedbc7c43810d6475e789d4a52743eaa4e)
- refactor: moved some styles from _layouts.scss [`9bcce73`](https://github.com/coreui/coreui/commit/9bcce73a73644650264fe88c41442b64de6cc2ff)
- refactor: clean-up [`05ee917`](https://github.com/coreui/coreui/commit/05ee917953a5ec3413a7d6e4d1e4a71cb00808b0)
- refactor: remove unnecessary fill property [`5b19f08`](https://github.com/coreui/coreui/commit/5b19f081e240d537bd43fc0713fb4973fe076e60)
- refactor: change rgba colors to variables [`e9cef97`](https://github.com/coreui/coreui/commit/e9cef97e54ea887edf9c909d47db489234c9dd66)
- refactor: change header height to 60px and header brand width to 250px [`fce9e9a`](https://github.com/coreui/coreui/commit/fce9e9a7602dc860b3b555af0aa35c928a42e1fb)
- refactor: update bootstrap styles [`95658f8`](https://github.com/coreui/coreui/commit/95658f8c00fc6ae4d144eed9567ba832f7384b73)
- refactor: change css clasess [`400032f`](https://github.com/coreui/coreui/commit/400032ffa2764fc20338b417e2ae2a25309de378)
- refactor: add height [`e4543c7`](https://github.com/coreui/coreui/commit/e4543c75650e543be3264d6d60901cad63cef951)
- refactor: change cap bg color [`b43b506`](https://github.com/coreui/coreui/commit/b43b50609480a2b377cf3f848df56ac1cdabe0db)
- refactor: change rgba colors to variables [`0a881e4`](https://github.com/coreui/coreui/commit/0a881e43e1213daaaea67d220b2fa27acab4ec70)
- refactor: change bg color [`635f335`](https://github.com/coreui/coreui/commit/635f335f2f0fd2d41d4fc2a4a690bd8f3ab9e8c2)
- refactor: change border color [`be22f62`](https://github.com/coreui/coreui/commit/be22f62ccd3f3bc0c178eb89a7b6623a60b33cf9)
- refactor: add margin-top to c-nav-title [`2d983d0`](https://github.com/coreui/coreui/commit/2d983d08deefa869dd3281547eeedb72630880da)
- refactor: change active link color to $white [`bc46704`](https://github.com/coreui/coreui/commit/bc467041d1d888dcc0c92ef4619485470a9349d4)
- refactor: change secondary color to lighter [`1e9ebd5`](https://github.com/coreui/coreui/commit/1e9ebd50ba72ed17cd6c45f51bb6b8ebd30a0ba1)
- refactor: linter [`9180c09`](https://github.com/coreui/coreui/commit/9180c090a21f8603004ff4e8caa64261e2bd9ce8)
- refactor: change name [`b79d7b0`](https://github.com/coreui/coreui/commit/b79d7b04e04798e6f8d99288b66f87762df4ef1d)
- refactor: add new class with prefix [`0774ef6`](https://github.com/coreui/coreui/commit/0774ef64628d711ffc965f9b2d791566df453962)
- refactor: add utilities/classes [`d4fca8c`](https://github.com/coreui/coreui/commit/d4fca8c48b1ecc8dc57a72ccf41fb164f22975b5)
- refactor: utilities/get-color [`1af26c7`](https://github.com/coreui/coreui/commit/1af26c74dac2b302b1f8d015a6d44025a4e421d9)
- refactor: deep-object-merge utility [`4a568f4`](https://github.com/coreui/coreui/commit/4a568f41ed239b8057624e8e910bd4719a522b1c)
- refactor(sidebar.js): ps minor cleanup [`736fc50`](https://github.com/coreui/coreui/commit/736fc50ad98bfcff4dc022c1a8a877d1d249bc2d)
- refactor: update to boostrap v4.1.0 [`a926b65`](https://github.com/coreui/coreui/commit/a926b65c2932926c6b52b4c2e2c2438166fb77be)
- refactor: improve gray colors [`04d0bbf`](https://github.com/coreui/coreui/commit/04d0bbf965917146bd67ed278f7941f123205083)
- refactor: new structure [`1c3b130`](https://github.com/coreui/coreui/commit/1c3b1304a112acc3fee900c4849095b30a9c4787)
- refactor: improve switches [`5282e19`](https://github.com/coreui/coreui/commit/5282e1939e584a4b13b1858e1ae1e8363423b5f5)
- refactor: new structure [`9c8e4a1`](https://github.com/coreui/coreui/commit/9c8e4a14bb4c352c1ddfe4c1a4a2e34403abcf02)
- refactor: improve switches [`961b80e`](https://github.com/coreui/coreui/commit/961b80e6aef836c1984537ac816d7c740a5fc8c0)
- refactor: improve avatar's styles [`3043b46`](https://github.com/coreui/coreui/commit/3043b4636c70223d159f474bba9b3268e9eb3f56)
- refactor: remove all functions [`db8173a`](https://github.com/coreui/coreui/commit/db8173a0fa87ba24ee6e62ab07a781dfc56974e8)
- refactor: change navnar to header [`27e5fc7`](https://github.com/coreui/coreui/commit/27e5fc769e8a1d9501867efe6314424c747362cc)
- refactor: remove pace [`cbdb79c`](https://github.com/coreui/coreui/commit/cbdb79cc2f75d782d70f6af1bb8f608dfe3e0b20)
- refactor: add error handling [`7e59665`](https://github.com/coreui/coreui/commit/7e596651918812ba685192e28a9759224c693e45)
- refactor: remove ResizeBroadcast funtion [`aabab0b`](https://github.com/coreui/coreui/commit/aabab0b8f43c388a1dd0c8ce128d9f286dfe6bf6)
- refactor(getStyle): polyfill IE custom properties [`ff12271`](https://github.com/coreui/coreui/commit/ff12271a838cd8c0fa83de17e83f794872487403)
- refactor: improve tooltips [`e6f8511`](https://github.com/coreui/coreui/commit/e6f8511022867f5ea8e927f63822203c7a45d570)
- refactor: add selectors [`74a12b7`](https://github.com/coreui/coreui/commit/74a12b779146b28d7d918bb8875fee0d7aa1b172)
- refactor: remove pace and eslint errors [`3128972`](https://github.com/coreui/coreui/commit/312897271033e9fbc21254e8c22aa5d39406f247)
- refactor: improve .card-actions [`b48f843`](https://github.com/coreui/coreui/commit/b48f8435043da5de945d349e31fd0f28b9bb65dc)
- refactor: update colors [`13fbde7`](https://github.com/coreui/coreui/commit/13fbde7d91b6da7840633a389050140340aa8969)
- refactor: add Selector.INIT [`b698234`](https://github.com/coreui/coreui/commit/b698234ec90445053a094344960a512814ddaacf)
- refactor: remove pace [`c5e04d3`](https://github.com/coreui/coreui/commit/c5e04d3befa1a894c302cd45be4e14f769bfc191)
- refactor: add border-radius(0) nav-link [`f7057d0`](https://github.com/coreui/coreui/commit/f7057d0aa58f435566e09f6abd76a5df186e9ff6)

## [v3.0.0-rc1](https://github.com/coreui/coreui/compare/v3.0.0-rc.2...v3.0.0-rc1)

> 27 July 2013
## [v3.0.0-rc.2](https://github.com/coreui/coreui/compare/v3.0.0-beta.4...v3.0.0-rc.2)

> 13 August 2013

### Fix

- fixes #: remove double background color on dropdown links [`5af5c2e`](https://github.com/coreui/coreui/commit/5af5c2ed368e8b728306b90082d32719d5a15b54)
- Better clearing on `.dl-horizontal` for empty `dd` elements [`37f4a25`](https://github.com/coreui/coreui/commit/37f4a25be436e8b25004d22541809032d8354600)
- finish fixing #9295: add button group buttons to new input group sizing [`4957670`](https://github.com/coreui/coreui/commit/49576704ea6c24fbc4cb32f44c5986a1e7714634)
- typo fixed: highligted source code of second radio button was missing in css.html -&gt; checkboxes & radios -&gt; default section [`6f9ed7e`](https://github.com/coreui/coreui/commit/6f9ed7efeb0a4f3252f0f11d53d5f9be065abc4f)
- Navbar toggle is not vertically aligned (3.0.0-wip) with custom navbar height [`0017f7f`](https://github.com/coreui/coreui/commit/0017f7fca4d34b37b63275f1aab79baad16ed5e1)
- alternate fix to #4522: increase line-height on btn-mini [`46c10c8`](https://github.com/coreui/coreui/commit/46c10c8b58919841d9adbc4908a127bf5eff88ad)
- hotfix: github buttons urls [`5df1e2c`](https://github.com/coreui/coreui/commit/5df1e2c00a295c45db7fa75dba333dc9464b128c)
- alt fix to #3029: change to single border-radii properties [`8575a45`](https://github.com/coreui/coreui/commit/8575a452942001bce522e8e258d9e192d24cb6ec)
- fix left and right tab-content alignment with width: auto; [`c4fb703`](https://github.com/coreui/coreui/commit/c4fb7032690ed10162562dfbf893311389a64dee)
- fix docs: move .pull-left from search input to search form in navbar [`7749044`](https://github.com/coreui/coreui/commit/774904464dc8237b36be8197ca7c91d701ce4f0e)
- fix right aligned dropdowns in navbar by adding left: auto; to nix default alignment [`ad78caa`](https://github.com/coreui/coreui/commit/ad78caa72639aa377caf584efc26fe7a5682b15c)

## [v3.0.0-beta.4](https://github.com/coreui/coreui/compare/v3.0.0-beta.3...v3.0.0-beta.4)

> 20 February 2020

### Refactor

- refactor: update to the latest version of Bootstrap [`4846c4e`](https://github.com/coreui/coreui/commit/4846c4efd2c7d2cd6a80f7e6bd8ea1b35cc137ea)
- refactor: update to the latest version of Bootstrap [`d832678`](https://github.com/coreui/coreui/commit/d8326787684330bac0eb3cb576876ac621282865)

## [v3.0.0-beta.3](https://github.com/coreui/coreui/compare/v3.0.0-beta.2...v3.0.0-beta.3)

> 18 November 2019

### Features

- feat: add new styles to toaster component [`0119e56`](https://github.com/coreui/coreui/commit/0119e5663149854f538690d01bed2518cf908c8b)

### Refactor

- refactor: remove unnecessary fill property [`5b19f08`](https://github.com/coreui/coreui/commit/5b19f081e240d537bd43fc0713fb4973fe076e60)

## [v3.0.0-beta.2](https://github.com/coreui/coreui/compare/v3.0.0-beta.1...v3.0.0-beta.2)

> 12 November 2019

### Refactor

- refactor: sync with coreui pro [`6858fc2`](https://github.com/coreui/coreui/commit/6858fc230d23a36f1120ae97abc03758df515c26)

## [v3.0.0-beta.1](https://github.com/coreui/coreui/compare/v3.0.0-beta.0...v3.0.0-beta.1)

> 1 November 2019

### Fix

- fix: sidebar-minimized z-index issue [`c873ab9`](https://github.com/coreui/coreui/commit/c873ab98d92e2a0c8213fbf98168a203ad43c127)

## [v3.0.0-beta.0](https://github.com/coreui/coreui/compare/v2.3.1...v3.0.0-beta.0)

> 18 October 2019

### Features

- feat: add support for multiple themes [`cbb7321`](https://github.com/coreui/coreui/commit/cbb73219a7de443b155c7647af825b47b5adb05f)
- feat: add dark layout to components [`ea97bf2`](https://github.com/coreui/coreui/commit/ea97bf2f13efc8dd4296b298c193a1e591218b14)
- refactor: moved some styles from layouts/_default.scss to _sidebar.scss; feat: add sidebar brand, light and dark layout, multiple sidebars support, left and right sidebar [`341a624`](https://github.com/coreui/coreui/commit/341a624502a9e44a79d10fb64b4c715f3e2cc9fe)
- feat: new c-header component [`f13ec5c`](https://github.com/coreui/coreui/commit/f13ec5c7659fa7d223c6020faecd3dbdc8532da8)
- feat: add class prefix [`3f3d9c2`](https://github.com/coreui/coreui/commit/3f3d9c28fbc3f21e623341dace5119bea6a20a5e)
- feat: add a smooth transition [`28153be`](https://github.com/coreui/coreui/commit/28153beff85fcd8df8f01c3cdaec3c72da63c25b)
- feat: Class Toggler [`29978df`](https://github.com/coreui/coreui/commit/29978df93943fd6f82987c19c51434ea064e65ca)
- feat: add prefix to .active, .focus, .disable classes [`5edbec2`](https://github.com/coreui/coreui/commit/5edbec22b4958a63244b6db7105762833da3364a)
- feat: add prefixe; docs: update banners [`083ad60`](https://github.com/coreui/coreui/commit/083ad60ec82cefd6cfa8669b57364fc603066fe6)
- feat: multiple sidebars support [`94bc392`](https://github.com/coreui/coreui/commit/94bc392135e5c5dbfb00ea3ba632d97c46005a5d)
- refactor: change size; feat: subheader [`2a31578`](https://github.com/coreui/coreui/commit/2a3157898c5bd3c1a559f2aed23d604f182dc22c)
- feat: add events [`29eb443`](https://github.com/coreui/coreui/commit/29eb44317ecbbcb4c448ae1b149583664200f507)
- feat: avatars with text, square avatars, rounded avatars; refactor: better styles [`3e77738`](https://github.com/coreui/coreui/commit/3e77738a1bbd845b089883d9142ad1d3d1f248c8)
- feat: predefined c-icon sizes [`6969aab`](https://github.com/coreui/coreui/commit/6969aab1c914397838b54bdb76e438081129a94b)
- feat(scss): sidebar-nav-link-disabled [`243694e`](https://github.com/coreui/coreui/commit/243694ed5d7e2bc81f30ddd4a34f6119b2377eea)
- feat: toggle on parentNode [`a808c30`](https://github.com/coreui/coreui/commit/a808c30df29ff3984a0817b33fc8abc037257334)
- feat: multiple sidebars support [`ff74d66`](https://github.com/coreui/coreui/commit/ff74d663cfc68ae5484f81720dbd50050146018f)
- feat: add footer variants [`f88fda0`](https://github.com/coreui/coreui/commit/f88fda0fdfe9439bf0778f27e9dc484a6db8c5b2)
- feat: add transparent borders [`cdc97d7`](https://github.com/coreui/coreui/commit/cdc97d72637e3963c66cdddd3a51a3054f41462b)
- feat: add events [`bbbaa08`](https://github.com/coreui/coreui/commit/bbbaa08d631b9292491cfb87f3c4f9e42254b07b)
- feat: add composer styles [`e3f011d`](https://github.com/coreui/coreui/commit/e3f011d114ea496bea5351532fa6836eaebb807a)
- feat: add meteor support [`3b10562`](https://github.com/coreui/coreui/commit/3b105629c125d078128b993be27fa1c763f6dcb2)
- feat: active links with hash and query strings [`e5d10d0`](https://github.com/coreui/coreui/commit/e5d10d0d1627fbfbdc83fb4d6e6932969b4966d5)
- feat: predefined c-icon sizes [`41a59ad`](https://github.com/coreui/coreui/commit/41a59ad3220a6daec0244d260fa2bcdf5ffc7856)
- feat: add smooth transition to navbar brand [`2325004`](https://github.com/coreui/coreui/commit/2325004b20c68c20e9bd98798bf282b136017b9b)
- feat: predefined c-icon sizes [`48169bc`](https://github.com/coreui/coreui/commit/48169bc93cfc276a20d26cb44d9d0b17dfd009d7)
- feat: vertical line [`16e794e`](https://github.com/coreui/coreui/commit/16e794e6b86e3687b5cff651ed49a6ed4adc83da)
- feat(sidebar): mobile clickout behaviour [`93c8895`](https://github.com/coreui/coreui/commit/93c8895a4d2b1ddde7b567121e7af6515272bb58)
- feat: add deep objects merge script [`d0c3f2f`](https://github.com/coreui/coreui/commit/d0c3f2f1e361f073daf09724534bafb4796a2d26)
- feat: sidebar set active using query string [`e1b5e41`](https://github.com/coreui/coreui/commit/e1b5e41c395f8031b25ca31c0d0be51f16de56ca)
- feat: add standalone styles [`0c40cf8`](https://github.com/coreui/coreui/commit/0c40cf8b182b61dcd0eb272fe625a548c3bde213)
- feat: add coreui utilities [`be0e20b`](https://github.com/coreui/coreui/commit/be0e20b8c2dd16720dc4dd27b247f9fdbc2b030b)
- feat: AjaxLoad [`1910aee`](https://github.com/coreui/coreui/commit/1910aee643a954122ab2ef4fab713ba88c11dad3)
- feat: Sidebar [`3fa81ce`](https://github.com/coreui/coreui/commit/3fa81ce9615952d23549d576ba114593cb903f8a)
- feat: AsideMenu [`b32ae37`](https://github.com/coreui/coreui/commit/b32ae3759e8ef051e9c4549e38bf3be608b06db4)
- feat: add ghost and square buttons [`6d5e0f6`](https://github.com/coreui/coreui/commit/6d5e0f6920ee1b50de96733efe340bfe8b52480c)
- feat: list group with accent [`5590e03`](https://github.com/coreui/coreui/commit/5590e03a8792e328f738827c4559b5cd55e80e07)
- feat: sidebar set active using query string [`bb82dae`](https://github.com/coreui/coreui/commit/bb82daef9ba21f9853bf01bcbe119fde5049546b)
- feat: add npm postinstall scripts [`33d3b06`](https://github.com/coreui/coreui/commit/33d3b06315aafc833722ab9648cc139eb4365a97)
- feat: add img-circle [`5aa3b72`](https://github.com/coreui/coreui/commit/5aa3b7253735da506846e7583c5c7aec9e145621)
- feat: add d-minimized-none and d-compact-none [`f41761c`](https://github.com/coreui/coreui/commit/f41761c828a9bbc7eaee9c3fafcd3f8e334b2404)
- feat: enable rounded elements in layout [`7a3cba1`](https://github.com/coreui/coreui/commit/7a3cba16041347fb91f8362be614f953b68db444)
- feat: predefined c-icon sizes [`712cecf`](https://github.com/coreui/coreui/commit/712cecf8dd8cb9b2ed70f76167213bd62a43e0e8)
- feat: add smooth transition to c-nav-link [`947681c`](https://github.com/coreui/coreui/commit/947681c02f4db73a0fc0eb500b546250c6c0de77)
- feat: list group with accent [`89a4856`](https://github.com/coreui/coreui/commit/89a4856030689eaf8cd5183448d68a81c5cd1714)
- feat: list group with accent [`68645aa`](https://github.com/coreui/coreui/commit/68645aaa902c1ec857ab4cb3b71a045201784a2c)

### Fix

- fix: update nodemon to 1.18.7 [`609940e`](https://github.com/coreui/coreui/commit/609940ed7a4354ca121cc225fca29bdbd44fd020)
- feat: add prefixe; docs: update banners [`083ad60`](https://github.com/coreui/coreui/commit/083ad60ec82cefd6cfa8669b57364fc603066fe6)
- fix: add focus state styles [`4cb33ac`](https://github.com/coreui/coreui/commit/4cb33ace5bc020b5ca96e5e6ece734ddc2293e3c)
- fix: mobile sidebar [`f580bc9`](https://github.com/coreui/coreui/commit/f580bc99c6a5ead4447b0bc0ca33293c8fd22fa1)
- fix: prefixes; [`0924931`](https://github.com/coreui/coreui/commit/09249316ca4a0e82f68aaa891e48de9485b81468)
- fix(ie): add `NodeList` `forEach` polyfill [`99411e8`](https://github.com/coreui/coreui/commit/99411e83f427872fc92be6c33a909b89359efe05)
- fix: sidebar-right and rtl borders issue [`8ae909c`](https://github.com/coreui/coreui/commit/8ae909c858dfe5f91099874a6670557eea8d4c84)
- fix: wrong display when dir=rtl [`7176fb7`](https://github.com/coreui/coreui/commit/7176fb727e2de57efc306d06da1dda79b21d7e3c)
- fix: add missing class [`7c7659d`](https://github.com/coreui/coreui/commit/7c7659de9d341b7df84e58c09fa69fe750a52330)
- fix: sidebar-right and rtl borders issue [`a4fc6f3`](https://github.com/coreui/coreui/commit/a4fc6f38f198b644d959658433cfda7f94984f6a)
- fix: minized sidebar issue [`f51238a`](https://github.com/coreui/coreui/commit/f51238a80bc40e52c6c18411c6779501302bac2a)
- fix(buttons.scss): remove `button { @extend .btn; }` [`c6a9292`](https://github.com/coreui/coreui/commit/c6a9292548dc783655203fbf29f0a6aed8dc5c35)
- fix: c-clearfix issue [`edfd3c3`](https://github.com/coreui/coreui/commit/edfd3c3c632473072c6e7aae7470adfd3e3def83)
- fix: sidebar minimizer chevron issue [`7d8dd6f`](https://github.com/coreui/coreui/commit/7d8dd6f72e31af504a83e5bc3668dee09b00a43d)
- fix: sidebar, sidebar-minimizer `rtl` ie issues, tweaks [`4fd3b0b`](https://github.com/coreui/coreui/commit/4fd3b0b2c0d3bb3bb60da435f95239b8cf3691c4)
- fix(layout): sidebar on mobile issue [`6b2bd0b`](https://github.com/coreui/coreui/commit/6b2bd0b025d4fcda4818ea5569e3a1e32a70c87d)
- fix(sidebar): `rtl` for `sidebar-minimizer` icon [`d30084c`](https://github.com/coreui/coreui/commit/d30084c1b45a22a5b196716a732e1ba5360044c7)
- fix(breadcrumb): `rtl` padding [`7b093a1`](https://github.com/coreui/coreui/commit/7b093a161c837660e56a712ff08c7483b33fa41c)
- fix(sidebar-toggler): `rtl` position issue [`59062e2`](https://github.com/coreui/coreui/commit/59062e2adf3708fb842aad8850fe4f256b0fdcba)
- fix(sidebar): `rtl` ps scrollbar issue temp fix/refactor [`046a16a`](https://github.com/coreui/coreui/commit/046a16a707dcf37cc2e7a3fd8cb35a552c476f4a)
- fix(card): `rtl` float for `card-header-actions` [`397a812`](https://github.com/coreui/coreui/commit/397a812af5edc608dd4745d0394649babaf7f0ec)
- fix(card): `rtl` for `card-header` icon margins [`0602445`](https://github.com/coreui/coreui/commit/06024455d6f58381ed32a411cbdfd3ff72c5dfb9)
- fix(sidebar): `rtl` scrollbar issue temp fix [`418ff65`](https://github.com/coreui/coreui/commit/418ff655246ae9cceb43374305c630697ef14486)
- fix(layout): aside IE issue with `.main` margin on mobile [`9de9f99`](https://github.com/coreui/coreui/commit/9de9f99e419c5f1f3b49a500a8c67e5e78af4306)
- fix(rgbToHex): transparent is not a valid rgb color ie issue [`b3e15c2`](https://github.com/coreui/coreui/commit/b3e15c2ff76f3e9dd02668ce4386b637ef9a8e41)
- fix(sidebar): `rtl` IE issue with `sidebar-minimized` captions [`3169110`](https://github.com/coreui/coreui/commit/31691102d66f374896b3265b9a6d700900e27f6c)
- fix(buttons.scss): wrong cursor for disabled state [`9d926eb`](https://github.com/coreui/coreui/commit/9d926eb2a1f0c1cdc02f0978faeae2b6f14f3cd1)
- fix: add new event update [`33f90de`](https://github.com/coreui/coreui/commit/33f90deaade72be7bff3a6cb74e6f0351f07c8bb)
- fix: ie11-custom-properties [`d3a870f`](https://github.com/coreui/coreui/commit/d3a870f6e15119560e66dfd2ece4ff18f93f0095)
- fix: ie11-custom-properties [`c80c199`](https://github.com/coreui/coreui/commit/c80c199f41dd4002a37048f085b140dea8de255b)
- fix: navbar bg issue, hidden sidebar-minimizer on tablets [`6c4a93e`](https://github.com/coreui/coreui/commit/6c4a93ec18b591dec14b3a86c06d1efda6d1e7e5)
- fix: wrong functions names [`0c807a3`](https://github.com/coreui/coreui/commit/0c807a370466cb03d75f2464a32a2ca68d4f87eb)
- fix: XMLHttpRequest issue [`ed94d44`](https://github.com/coreui/coreui/commit/ed94d44d05a39a23819fab2c0a134d94489b9cc0)
- fix: ie11-custom-properties [`b5143bb`](https://github.com/coreui/coreui/commit/b5143bb428634c3e38f824f1dda8c6663f4a96cf)
- fix(sidebar): remove scrollbar when `sidebar-minimized` [`76c38bc`](https://github.com/coreui/coreui/commit/76c38bc134c4bf29035d6b53a904e490f86ff047)
- fix: switch-pill issue [`d73fcc1`](https://github.com/coreui/coreui/commit/d73fcc1b35e79d575c053d91d2051bbdc5785c0e)
- fix: add new event update [`3319a75`](https://github.com/coreui/coreui/commit/3319a750d1fd0c8237b5d79c78c28778f1247867)
- fix: ie11-custom-properties [`cd10d8c`](https://github.com/coreui/coreui/commit/cd10d8ca6475de87888ee5678c2106421572f2cd)
- fix: remove borders from disabled buttons [`a5be78a`](https://github.com/coreui/coreui/commit/a5be78a6542df1472937642bfb5fcc313e768098)
- fix: add border-radius to icons [`a268eb2`](https://github.com/coreui/coreui/commit/a268eb2aa4ac89ece12c69923413d5753815ba4b)
- fix: eslint errors [`48d6569`](https://github.com/coreui/coreui/commit/48d656925a8bf70d9ab44867590b95f9c939f8a9)
- fix: delegate event handlers to support turbolinks [`49ac147`](https://github.com/coreui/coreui/commit/49ac1477a939e93a23d51d111d927e1de7c5c8d0)
- fix: problems with link [`1fcba73`](https://github.com/coreui/coreui/commit/1fcba7349650f61618c2344699498b978f261ff2)
- fix: perfect scrollbar issue [`7876c07`](https://github.com/coreui/coreui/commit/7876c07c239b752cf824e5f77e28a8f34364c653)
- fix(hex-to-rgb/a): add missing parenthesis [`4306cfb`](https://github.com/coreui/coreui/commit/4306cfb69725300404c15d7882520db3cba42abc)
- fix: c-sidebar-minimizer is visible on mobile devices [`fbccdef`](https://github.com/coreui/coreui/commit/fbccdefff0c1810030fe6ee5a905a3829ce27d4e)
- fix: c-nav-link issue [`d5345fe`](https://github.com/coreui/coreui/commit/d5345fee1eacb177c215c35580fe4fb490b25cc0)
- fix: white progress-bar background issue [`019924b`](https://github.com/coreui/coreui/commit/019924bc5601d0b21ee1c2643d14a41dfd63d06c)
- fix: add c- prefix to show class [`2301cf3`](https://github.com/coreui/coreui/commit/2301cf39a2b0f07dae6d77bbb236839f0a05655d)
- fix: sidebar-right and rtl borders issue [`5320b3b`](https://github.com/coreui/coreui/commit/5320b3b9f74a10c40a45f7180ddf1517fe796bb7)
- fix(build): add missing `commonjs` for utilities [`f782b1e`](https://github.com/coreui/coreui/commit/f782b1ec1d038a55276c1a17066891a592534852)
- fix(aside-menu): add `dataset.toggle` ie10 fix [`b263107`](https://github.com/coreui/coreui/commit/b263107e51f3d561d7c0f3ec93673d1a1df106d2)
- fix(sidebar): add `dataset.toggle` ie10 fix [`b340a2f`](https://github.com/coreui/coreui/commit/b340a2f1e82051ac03dcf5860bc5bc3354080c38)
- fix: problems with link [`1157d6d`](https://github.com/coreui/coreui/commit/1157d6d20a462f3bce05629e9f4a4e02bd01197a)
- fix: perfect scrollbar issue [`f3fdf76`](https://github.com/coreui/coreui/commit/f3fdf76904382d927eac613f67f4930d55782fe1)
- fix: remove .c-nav margins [`e6210e7`](https://github.com/coreui/coreui/commit/e6210e78fac0e98be52b23662c2a95af7f5d58b1)
- fix(.sidebar-minimizer): add `cursor: pointer` [`7f1f257`](https://github.com/coreui/coreui/commit/7f1f2579162f644f12b9946b9a1eaa05c9815f8c)
- fix: add left 0 to .chart-wrapper [`691b943`](https://github.com/coreui/coreui/commit/691b94373868f8960b1a743d18c5eee008de1af5)
- fix: hide nav-labels when sidebar-minimized [`36df591`](https://github.com/coreui/coreui/commit/36df591e88d8843fa45ac3d9f3968444f9acc225)

### Refactor

- refactor: merge boostrap and coreui [`14686cf`](https://github.com/coreui/coreui/commit/14686cf9571a8e10e0da17a55030be0633598ddc)
- refactor: remove prefixes from Bootstrap components [`f82df91`](https://github.com/coreui/coreui/commit/f82df9132d2b5ad434f326fe37b8326859227885)
- refactor: clean-up [`6cf8b0a`](https://github.com/coreui/coreui/commit/6cf8b0a3f1d3044d8222d259d9177e981ba4463f)
- refactor: sync with coreui pro [`bc36ac5`](https://github.com/coreui/coreui/commit/bc36ac56d2605f61cea9e6fd92b791ee719d80be)
- refactor: improve themes [`d43f83b`](https://github.com/coreui/coreui/commit/d43f83b0e92fc8b94e7d3e814373654f29399070)
- refactor: improve themes system [`78e788b`](https://github.com/coreui/coreui/commit/78e788bb0975b02583b4af41fe6bad3c5a8aec54)
- refactor: remove jQuery [`8dd6664`](https://github.com/coreui/coreui/commit/8dd666446de53330f33d74335e44f59fe377dda8)
- refactor: update Bootstraps scripts [`b1e9f61`](https://github.com/coreui/coreui/commit/b1e9f614c9f2884fc7ec1b7082aeb93f2922b9d8)
- refactor: moved some styles from layouts/_default.scss to _sidebar.scss; feat: add sidebar brand, light and dark layout, multiple sidebars support, left and right sidebar [`341a624`](https://github.com/coreui/coreui/commit/341a624502a9e44a79d10fb64b4c715f3e2cc9fe)
- refactor: add `c-` prefix to each class [`0b93c2f`](https://github.com/coreui/coreui/commit/0b93c2f710a032174309703439e105d87ba347c1)
- refactor: improve script [`aa4cd0a`](https://github.com/coreui/coreui/commit/aa4cd0a38cb65bd5020f319f45d56e4f57defde6)
- refactor: fix linter errors [`31e53e9`](https://github.com/coreui/coreui/commit/31e53e9243d3b8ad72e8c72f7c4a88c100e1653c)
- refactor: improve styles and clean-up [`55ba9e8`](https://github.com/coreui/coreui/commit/55ba9e8659c82d87834741635996d4b3ed56e6bd)
- refactor: moved layouts to separate files [`fb55768`](https://github.com/coreui/coreui/commit/fb557685ea1d5a89c2aa6564b97c2553ff4e67ec)
- refactor: removed jQuery and change name to AsyncLoad [`9da6f67`](https://github.com/coreui/coreui/commit/9da6f6770b4d4f68f93c8e407c39031a567457d8)
- refactor: theme generator, clean-up [`afb6a3f`](https://github.com/coreui/coreui/commit/afb6a3f47c8f3df0b386d0da85e8f0e20bedff1e)
- refactor: add `c-` prefix to each class [`c310afb`](https://github.com/coreui/coreui/commit/c310afb41c0e29035f0f01324d82bb962e17cfde)
- refactor: removed all togglers, use `.c-class-toggler` instead of [`166712e`](https://github.com/coreui/coreui/commit/166712e5894b0fb20c178fe5188ac399da47b851)
- refactor: remove aside component, add nav-tabs to sidebar [`fe602a7`](https://github.com/coreui/coreui/commit/fe602a7a159ce493e910cad0d696df69c18a86d6)
- refactor: add `c-` prefix to each class [`980c487`](https://github.com/coreui/coreui/commit/980c487fde1b7c1fe5da28d31236693364a6aa30)
- refactor: improve code quality [`8297caf`](https://github.com/coreui/coreui/commit/8297caf69d07f4ae504e03a7c49ad4ec7dde6a6f)
- refactor: remove jQuery [`a197d5f`](https://github.com/coreui/coreui/commit/a197d5f91c16c78ebb31a7ac4e2a23968f5d3891)
- refactor: change layout [`587fe1c`](https://github.com/coreui/coreui/commit/587fe1c51ccedc030032d44e103519320245d4fe)
- refactor: change size; feat: subheader [`2a31578`](https://github.com/coreui/coreui/commit/2a3157898c5bd3c1a559f2aed23d604f182dc22c)
- refactor: borders mixin [`cbcf6c3`](https://github.com/coreui/coreui/commit/cbcf6c38a7e7748abbb7beffb3a8e3c15fb735cc)
- feat: avatars with text, square avatars, rounded avatars; refactor: better styles [`3e77738`](https://github.com/coreui/coreui/commit/3e77738a1bbd845b089883d9142ad1d3d1f248c8)
- refactor: update colors; [`0c05730`](https://github.com/coreui/coreui/commit/0c05730fd5e9cd3bdb4af1c154c63d7ebea9cf09)
- refactor: clean-up [`ca4e870`](https://github.com/coreui/coreui/commit/ca4e8707b082d6cade27831b0fa64bffcd86f03b)
- refactor: moved animations to _transitions.scss [`9ff82d2`](https://github.com/coreui/coreui/commit/9ff82d2f9b8369bd30c501c59121737ae5329bb3)
- refactor: remove old scripts before loading new [`a90908c`](https://github.com/coreui/coreui/commit/a90908c0cee4d9b7470e83295ca501e69f683ca0)
- refactor: bg-* variants [`2ee5f1b`](https://github.com/coreui/coreui/commit/2ee5f1bedbc7c43810d6475e789d4a52743eaa4e)
- refactor: moved some styles from _layouts.scss [`9bcce73`](https://github.com/coreui/coreui/commit/9bcce73a73644650264fe88c41442b64de6cc2ff)
- refactor: clean-up [`05ee917`](https://github.com/coreui/coreui/commit/05ee917953a5ec3413a7d6e4d1e4a71cb00808b0)
- refactor: change rgba colors to variables [`e9cef97`](https://github.com/coreui/coreui/commit/e9cef97e54ea887edf9c909d47db489234c9dd66)
- refactor: change header height to 60px and header brand width to 250px [`fce9e9a`](https://github.com/coreui/coreui/commit/fce9e9a7602dc860b3b555af0aa35c928a42e1fb)
- refactor: update bootstrap styles [`95658f8`](https://github.com/coreui/coreui/commit/95658f8c00fc6ae4d144eed9567ba832f7384b73)
- refactor: add utilities/classes [`d4fca8c`](https://github.com/coreui/coreui/commit/d4fca8c48b1ecc8dc57a72ccf41fb164f22975b5)
- refactor: utilities/get-color [`1af26c7`](https://github.com/coreui/coreui/commit/1af26c74dac2b302b1f8d015a6d44025a4e421d9)
- refactor: deep-object-merge utility [`4a568f4`](https://github.com/coreui/coreui/commit/4a568f41ed239b8057624e8e910bd4719a522b1c)
- refactor(sidebar.js): ps minor cleanup [`736fc50`](https://github.com/coreui/coreui/commit/736fc50ad98bfcff4dc022c1a8a877d1d249bc2d)
- refactor: update to boostrap v4.1.0 [`a926b65`](https://github.com/coreui/coreui/commit/a926b65c2932926c6b52b4c2e2c2438166fb77be)
- refactor: improve gray colors [`04d0bbf`](https://github.com/coreui/coreui/commit/04d0bbf965917146bd67ed278f7941f123205083)
- refactor: new structure [`1c3b130`](https://github.com/coreui/coreui/commit/1c3b1304a112acc3fee900c4849095b30a9c4787)
- refactor: improve switches [`5282e19`](https://github.com/coreui/coreui/commit/5282e1939e584a4b13b1858e1ae1e8363423b5f5)
- refactor: new structure [`9c8e4a1`](https://github.com/coreui/coreui/commit/9c8e4a14bb4c352c1ddfe4c1a4a2e34403abcf02)
- refactor: improve switches [`961b80e`](https://github.com/coreui/coreui/commit/961b80e6aef836c1984537ac816d7c740a5fc8c0)
- refactor: improve avatar's styles [`3043b46`](https://github.com/coreui/coreui/commit/3043b4636c70223d159f474bba9b3268e9eb3f56)
- refactor: remove all functions [`db8173a`](https://github.com/coreui/coreui/commit/db8173a0fa87ba24ee6e62ab07a781dfc56974e8)
- refactor: change navnar to header [`27e5fc7`](https://github.com/coreui/coreui/commit/27e5fc769e8a1d9501867efe6314424c747362cc)
- refactor: remove pace [`cbdb79c`](https://github.com/coreui/coreui/commit/cbdb79cc2f75d782d70f6af1bb8f608dfe3e0b20)
- refactor: add error handling [`7e59665`](https://github.com/coreui/coreui/commit/7e596651918812ba685192e28a9759224c693e45)
- refactor: remove ResizeBroadcast funtion [`aabab0b`](https://github.com/coreui/coreui/commit/aabab0b8f43c388a1dd0c8ce128d9f286dfe6bf6)
- refactor(getStyle): polyfill IE custom properties [`ff12271`](https://github.com/coreui/coreui/commit/ff12271a838cd8c0fa83de17e83f794872487403)
- refactor: improve tooltips [`e6f8511`](https://github.com/coreui/coreui/commit/e6f8511022867f5ea8e927f63822203c7a45d570)
- refactor: add selectors [`74a12b7`](https://github.com/coreui/coreui/commit/74a12b779146b28d7d918bb8875fee0d7aa1b172)
- refactor: remove pace and eslint errors [`3128972`](https://github.com/coreui/coreui/commit/312897271033e9fbc21254e8c22aa5d39406f247)
- refactor: improve .card-actions [`b48f843`](https://github.com/coreui/coreui/commit/b48f8435043da5de945d349e31fd0f28b9bb65dc)
- refactor: update colors [`13fbde7`](https://github.com/coreui/coreui/commit/13fbde7d91b6da7840633a389050140340aa8969)
- refactor: add Selector.INIT [`b698234`](https://github.com/coreui/coreui/commit/b698234ec90445053a094344960a512814ddaacf)
- refactor: change css clasess [`400032f`](https://github.com/coreui/coreui/commit/400032ffa2764fc20338b417e2ae2a25309de378)
- refactor: add height [`e4543c7`](https://github.com/coreui/coreui/commit/e4543c75650e543be3264d6d60901cad63cef951)
- refactor: change cap bg color [`b43b506`](https://github.com/coreui/coreui/commit/b43b50609480a2b377cf3f848df56ac1cdabe0db)
- refactor: change rgba colors to variables [`0a881e4`](https://github.com/coreui/coreui/commit/0a881e43e1213daaaea67d220b2fa27acab4ec70)
- refactor: change bg color [`635f335`](https://github.com/coreui/coreui/commit/635f335f2f0fd2d41d4fc2a4a690bd8f3ab9e8c2)
- refactor: change border color [`be22f62`](https://github.com/coreui/coreui/commit/be22f62ccd3f3bc0c178eb89a7b6623a60b33cf9)
- refactor: add margin-top to c-nav-title [`2d983d0`](https://github.com/coreui/coreui/commit/2d983d08deefa869dd3281547eeedb72630880da)
- refactor: change active link color to $white [`bc46704`](https://github.com/coreui/coreui/commit/bc467041d1d888dcc0c92ef4619485470a9349d4)
- refactor: change secondary color to lighter [`1e9ebd5`](https://github.com/coreui/coreui/commit/1e9ebd50ba72ed17cd6c45f51bb6b8ebd30a0ba1)
- refactor: linter [`9180c09`](https://github.com/coreui/coreui/commit/9180c090a21f8603004ff4e8caa64261e2bd9ce8)
- refactor: change name [`b79d7b0`](https://github.com/coreui/coreui/commit/b79d7b04e04798e6f8d99288b66f87762df4ef1d)
- refactor: remove pace [`c5e04d3`](https://github.com/coreui/coreui/commit/c5e04d3befa1a894c302cd45be4e14f769bfc191)
- refactor: add new class with prefix [`0774ef6`](https://github.com/coreui/coreui/commit/0774ef64628d711ffc965f9b2d791566df453962)
- refactor: add border-radius(0) nav-link [`f7057d0`](https://github.com/coreui/coreui/commit/f7057d0aa58f435566e09f6abd76a5df186e9ff6)

## [v2.3.1](https://github.com/coreui/coreui/compare/v2.3.0...v2.3.1)

> 28 February 2013

## [v2.3.0](https://github.com/coreui/coreui/compare/v2.2.2...v2.3.0)

> 7 February 2013

## [v2.2.2](https://github.com/coreui/coreui/compare/v2.2.0...v2.2.2)

> 8 December 2012

## [v2.2.0](https://github.com/coreui/coreui/compare/v2.1.16...v2.2.0)

> 29 October 2012

### Fix

- fixes #: remove double background color on dropdown links [`5af5c2e`](https://github.com/coreui/coreui/commit/5af5c2ed368e8b728306b90082d32719d5a15b54)
- hotfix: github buttons urls [`5df1e2c`](https://github.com/coreui/coreui/commit/5df1e2c00a295c45db7fa75dba333dc9464b128c)
- alternate fix to #4522: increase line-height on btn-mini [`46c10c8`](https://github.com/coreui/coreui/commit/46c10c8b58919841d9adbc4908a127bf5eff88ad)
- alt fix to #3029: change to single border-radii properties [`8575a45`](https://github.com/coreui/coreui/commit/8575a452942001bce522e8e258d9e192d24cb6ec)
- fix left and right tab-content alignment with width: auto; [`c4fb703`](https://github.com/coreui/coreui/commit/c4fb7032690ed10162562dfbf893311389a64dee)
- fix docs: move .pull-left from search input to search form in navbar [`7749044`](https://github.com/coreui/coreui/commit/774904464dc8237b36be8197ca7c91d701ce4f0e)
- fix right aligned dropdowns in navbar by adding left: auto; to nix default alignment [`ad78caa`](https://github.com/coreui/coreui/commit/ad78caa72639aa377caf584efc26fe7a5682b15c)

## [v2.1.16](https://github.com/coreui/coreui/compare/v2.1.15...v2.1.16)

> 25 October 2019

### Fix

- fix: Event listeners for Sidebar and AsideMenu plugins persist in jQuery instance [`320d5f8`](https://github.com/coreui/coreui/commit/320d5f8b9e5345af6aefe843aa8100b71c3ef961)

## [v2.1.15](https://github.com/coreui/coreui/compare/v2.1.12...v2.1.15)

> 25 October 2019

### Fix

- fix(sidebar): Selector.NAV_LINK_QUERIED must be nav-link-queried [`81f2535`](https://github.com/coreui/coreui/commit/81f2535c5e2720f26a8155d93ccb246302cf69fb)

## [v2.1.12](https://github.com/coreui/coreui/compare/v2.1.11...v2.1.12)

> 12 June 2019

### Fix

- - fix(scss): new mobile breakpoint variables [`c67063b`](https://github.com/coreui/coreui/commit/c67063b3c7052906b32abaea136fe84a0672206f)
- fix(scss): rtl margin-right for sidebar-minimized [`b53e13c`](https://github.com/coreui/coreui/commit/b53e13c1a2782259483d13eb986e945c49577cc7)

## [v2.1.11](https://github.com/coreui/coreui/compare/v2.1.10...v2.1.11)

> 3 June 2019

### Fix

- fix(sidebar): Added extra container option so nav isn't required and when both are not set then return null for perfectScrollbar [`e8acd34`](https://github.com/coreui/coreui/commit/e8acd3493677149a29a73a1a5481fffc6a087e7e)

## [v2.1.10](https://github.com/coreui/coreui/compare/v2.1.9...v2.1.10)

> 31 May 2019

## [v2.1.9](https://github.com/coreui/coreui/compare/v2.1.8...v2.1.9)

> 22 March 2019

### Fix

- fix(input-group): rtl append, prepend border radius and margins [`0e98b7b`](https://github.com/coreui/coreui/commit/0e98b7b973548aa8de563dd3ba7c413e6c99a7cc)
- fix(rtl): rtl float, margin and padding [`08d9aca`](https://github.com/coreui/coreui/commit/08d9aca2f68f12f9b5ab1ffe0b35a0f5a42de0cd)
- fix(button-group): rtl margin and border-radius [`44346c7`](https://github.com/coreui/coreui/commit/44346c718766d931ecd89e4d58c2389401ee843a)
- fix(dropdown): rtl caret spacing [`d1f926b`](https://github.com/coreui/coreui/commit/d1f926b1966b17a5988365d4b90b48fb141f2287)

## [v2.1.8](https://github.com/coreui/coreui/compare/v2.1.7...v2.1.8)

> 8 March 2019

### Fix

- fix(scss): `cssnano` mangles `background-position` temp fix [`de0e768`](https://github.com/coreui/coreui/commit/de0e768a99a1fd6d9f34331a2e20513cbea8b663)

## [v2.1.7](https://github.com/coreui/coreui/compare/v2.1.6...v2.1.7)

> 21 February 2019

## [v2.1.6](https://github.com/coreui/coreui/compare/v2.1.5...v2.1.6)

> 11 January 2019

### Fix

- fix: clean exit on postinstall dependency missing #25 [`eec7f3c`](https://github.com/coreui/coreui/commit/eec7f3c2a62463aa6ad6e59e0fa8ed6313b64772)

## [v2.1.5](https://github.com/coreui/coreui/compare/v2.1.4...v2.1.5)

> 7 January 2019

## [v2.1.4](https://github.com/coreui/coreui/compare/v2.1.3...v2.1.4)

> 7 December 2018

### Fix

- fix(scss): .sidebar .nav-link.disabled [`c618f63`](https://github.com/coreui/coreui/commit/c618f63276f2b3b323bd8e80ccc27a677fdd0b87)

## [v2.1.3](https://github.com/coreui/coreui/compare/v2.1.2...v2.1.3)

> 27 November 2018

### Fix

- fix: update nodemon to 1.18.7 [`609940e`](https://github.com/coreui/coreui/commit/609940ed7a4354ca121cc225fca29bdbd44fd020)

## [v2.1.2](https://github.com/coreui/coreui/compare/v2.1.1...v2.1.2)

> 27 November 2018
## [v2.1.1](https://github.com/coreui/coreui/compare/v2.1.0...v2.1.1)

> 20 November 2018

## [v2.1.0](https://github.com/coreui/coreui/compare/v2.0.26...v2.1.0)

> 6 November 2018

### Features

- feat(scss): sidebar-nav-link-disabled [`243694e`](https://github.com/coreui/coreui/commit/243694ed5d7e2bc81f30ddd4a34f6119b2377eea)

## [v2.0.26](https://github.com/coreui/coreui/compare/v2.0.25...v2.0.26)

> 5 November 2018

### Fix

- fix: delegate event handlers to support turbolinks [`49ac147`](https://github.com/coreui/coreui/commit/49ac1477a939e93a23d51d111d927e1de7c5c8d0)
- fix(.sidebar-minimizer): add `cursor: pointer` [`7f1f257`](https://github.com/coreui/coreui/commit/7f1f2579162f644f12b9946b9a1eaa05c9815f8c)

## [v2.0.25](https://github.com/coreui/coreui/compare/v2.0.24...v2.0.25)

> 3 November 2018

### Fix

- fix(buttons.scss): remove `button { @extend .btn; }` [`c6a9292`](https://github.com/coreui/coreui/commit/c6a9292548dc783655203fbf29f0a6aed8dc5c35)

## [v2.0.24](https://github.com/coreui/coreui/compare/v2.0.23...v2.0.24)

> 3 November 2018

### Fix

- fix(build): add missing `commonjs` for utilities [`f782b1e`](https://github.com/coreui/coreui/commit/f782b1ec1d038a55276c1a17066891a592534852)

## [v2.0.23](https://github.com/coreui/coreui/compare/v2.0.22...v2.0.23)

> 3 November 2018

### Fix

- fix(ie): add `NodeList` `forEach` polyfill [`99411e8`](https://github.com/coreui/coreui/commit/99411e83f427872fc92be6c33a909b89359efe05)
- fix(aside-menu): add `dataset.toggle` ie10 fix [`b263107`](https://github.com/coreui/coreui/commit/b263107e51f3d561d7c0f3ec93673d1a1df106d2)
- fix(sidebar): add `dataset.toggle` ie10 fix [`b340a2f`](https://github.com/coreui/coreui/commit/b340a2f1e82051ac03dcf5860bc5bc3354080c38)

## [v2.0.22](https://github.com/coreui/coreui/compare/v2.0.21...v2.0.22)

> 31 October 2018

### Fix

- fix(buttons.scss): wrong cursor for disabled state [`9d926eb`](https://github.com/coreui/coreui/commit/9d926eb2a1f0c1cdc02f0978faeae2b6f14f3cd1)

## [v2.0.21](https://github.com/coreui/coreui/compare/v2.0.20...v2.0.21)

> 25 October 2018

### Features

- feat(sidebar): mobile clickout behaviour [`93c8895`](https://github.com/coreui/coreui/commit/93c8895a4d2b1ddde7b567121e7af6515272bb58)

### Refactor

- refactor: add utilities/classes [`d4fca8c`](https://github.com/coreui/coreui/commit/d4fca8c48b1ecc8dc57a72ccf41fb164f22975b5)
- refactor: utilities/get-color [`1af26c7`](https://github.com/coreui/coreui/commit/1af26c74dac2b302b1f8d015a6d44025a4e421d9)

## [v2.0.20](https://github.com/coreui/coreui/compare/v2.0.19...v2.0.20)

> 17 October 2018

### Features

- feat: add deep objects merge script [`d0c3f2f`](https://github.com/coreui/coreui/commit/d0c3f2f1e361f073daf09724534bafb4796a2d26)
- feat: sidebar set active using query string [`e1b5e41`](https://github.com/coreui/coreui/commit/e1b5e41c395f8031b25ca31c0d0be51f16de56ca)
- feat: sidebar set active using query string [`bb82dae`](https://github.com/coreui/coreui/commit/bb82daef9ba21f9853bf01bcbe119fde5049546b)
- feat: add npm postinstall scripts [`33d3b06`](https://github.com/coreui/coreui/commit/33d3b06315aafc833722ab9648cc139eb4365a97)
- feat: add img-circle [`5aa3b72`](https://github.com/coreui/coreui/commit/5aa3b7253735da506846e7583c5c7aec9e145621)
- feat: add d-minimized-none and d-compact-none [`f41761c`](https://github.com/coreui/coreui/commit/f41761c828a9bbc7eaee9c3fafcd3f8e334b2404)

### Fix

- fix: add new event update [`33f90de`](https://github.com/coreui/coreui/commit/33f90deaade72be7bff3a6cb74e6f0351f07c8bb)
- fix: sidebar, sidebar-minimizer `rtl` ie issues, tweaks [`4fd3b0b`](https://github.com/coreui/coreui/commit/4fd3b0b2c0d3bb3bb60da435f95239b8cf3691c4)
- fix(layout): sidebar on mobile issue [`6b2bd0b`](https://github.com/coreui/coreui/commit/6b2bd0b025d4fcda4818ea5569e3a1e32a70c87d)
- fix(sidebar): remove scrollbar when `sidebar-minimized` [`76c38bc`](https://github.com/coreui/coreui/commit/76c38bc134c4bf29035d6b53a904e490f86ff047)
- fix(sidebar): `rtl` for `sidebar-minimizer` icon [`d30084c`](https://github.com/coreui/coreui/commit/d30084c1b45a22a5b196716a732e1ba5360044c7)
- fix(breadcrumb): `rtl` padding [`7b093a1`](https://github.com/coreui/coreui/commit/7b093a161c837660e56a712ff08c7483b33fa41c)
- fix(sidebar-toggler): `rtl` position issue [`59062e2`](https://github.com/coreui/coreui/commit/59062e2adf3708fb842aad8850fe4f256b0fdcba)
- fix(sidebar): `rtl` ps scrollbar issue temp fix/refactor [`046a16a`](https://github.com/coreui/coreui/commit/046a16a707dcf37cc2e7a3fd8cb35a552c476f4a)
- fix(card): `rtl` float for `card-header-actions` [`397a812`](https://github.com/coreui/coreui/commit/397a812af5edc608dd4745d0394649babaf7f0ec)
- fix(card): `rtl` for `card-header` icon margins [`0602445`](https://github.com/coreui/coreui/commit/06024455d6f58381ed32a411cbdfd3ff72c5dfb9)
- fix(layout): aside IE issue with `.main` margin on mobile [`9de9f99`](https://github.com/coreui/coreui/commit/9de9f99e419c5f1f3b49a500a8c67e5e78af4306)
- fix(rgbToHex): transparent is not a valid rgb color ie issue [`b3e15c2`](https://github.com/coreui/coreui/commit/b3e15c2ff76f3e9dd02668ce4386b637ef9a8e41)
- fix: ie11-custom-properties [`d3a870f`](https://github.com/coreui/coreui/commit/d3a870f6e15119560e66dfd2ece4ff18f93f0095)
- fix: ie11-custom-properties [`c80c199`](https://github.com/coreui/coreui/commit/c80c199f41dd4002a37048f085b140dea8de255b)
- fix: XMLHttpRequest issue [`ed94d44`](https://github.com/coreui/coreui/commit/ed94d44d05a39a23819fab2c0a134d94489b9cc0)
- fix: ie11-custom-properties [`b5143bb`](https://github.com/coreui/coreui/commit/b5143bb428634c3e38f824f1dda8c6663f4a96cf)
- fix: add new event update [`3319a75`](https://github.com/coreui/coreui/commit/3319a750d1fd0c8237b5d79c78c28778f1247867)
- fix: ie11-custom-properties [`cd10d8c`](https://github.com/coreui/coreui/commit/cd10d8ca6475de87888ee5678c2106421572f2cd)
- fix: add border-radius to icons [`a268eb2`](https://github.com/coreui/coreui/commit/a268eb2aa4ac89ece12c69923413d5753815ba4b)
- fix: problems with link [`1fcba73`](https://github.com/coreui/coreui/commit/1fcba7349650f61618c2344699498b978f261ff2)
- fix: perfect scrollbar issue [`7876c07`](https://github.com/coreui/coreui/commit/7876c07c239b752cf824e5f77e28a8f34364c653)
- fix(sidebar): `rtl` scrollbar issue temp fix [`418ff65`](https://github.com/coreui/coreui/commit/418ff655246ae9cceb43374305c630697ef14486)
- fix(hex-to-rgb/a): add missing parenthesis [`4306cfb`](https://github.com/coreui/coreui/commit/4306cfb69725300404c15d7882520db3cba42abc)
- fix(sidebar): `rtl` IE issue with `sidebar-minimized` captions [`3169110`](https://github.com/coreui/coreui/commit/31691102d66f374896b3265b9a6d700900e27f6c)
- fix: problems with link [`1157d6d`](https://github.com/coreui/coreui/commit/1157d6d20a462f3bce05629e9f4a4e02bd01197a)
- fix: add left 0 to .chart-wrapper [`691b943`](https://github.com/coreui/coreui/commit/691b94373868f8960b1a743d18c5eee008de1af5)
- fix: hide nav-labels when sidebar-minimized [`36df591`](https://github.com/coreui/coreui/commit/36df591e88d8843fa45ac3d9f3968444f9acc225)

### Refactor

- refactor: deep-object-merge utility [`4a568f4`](https://github.com/coreui/coreui/commit/4a568f41ed239b8057624e8e910bd4719a522b1c)
- refactor(sidebar.js): ps minor cleanup [`736fc50`](https://github.com/coreui/coreui/commit/736fc50ad98bfcff4dc022c1a8a877d1d249bc2d)
- refactor: improve switches [`961b80e`](https://github.com/coreui/coreui/commit/961b80e6aef836c1984537ac816d7c740a5fc8c0)
- refactor: improve avatar's styles [`3043b46`](https://github.com/coreui/coreui/commit/3043b4636c70223d159f474bba9b3268e9eb3f56)
- refactor: change navnar to header [`27e5fc7`](https://github.com/coreui/coreui/commit/27e5fc769e8a1d9501867efe6314424c747362cc)
- refactor: remove pace [`cbdb79c`](https://github.com/coreui/coreui/commit/cbdb79cc2f75d782d70f6af1bb8f608dfe3e0b20)
- refactor: add error handling [`7e59665`](https://github.com/coreui/coreui/commit/7e596651918812ba685192e28a9759224c693e45)
- refactor(getStyle): polyfill IE custom properties [`ff12271`](https://github.com/coreui/coreui/commit/ff12271a838cd8c0fa83de17e83f794872487403)
- refactor: remove pace and eslint errors [`3128972`](https://github.com/coreui/coreui/commit/312897271033e9fbc21254e8c22aa5d39406f247)
- refactor: remove pace [`c5e04d3`](https://github.com/coreui/coreui/commit/c5e04d3befa1a894c302cd45be4e14f769bfc191)

## [v2.0.19](https://github.com/coreui/coreui/compare/v2.0.18...v2.0.19)

> 15 October 2018

### Features

- feat: sidebar set active using query string [`52f4f0b`](https://github.com/coreui/coreui/commit/52f4f0b728ff1e404868271d398dec5cb4d22b9a)
- feat: sidebar set active using query string [`5a03705`](https://github.com/coreui/coreui/commit/5a0370581ffbd3c348eab4cd775c7c5d34ed1bc6)

## [v2.0.18](https://github.com/coreui/coreui/compare/v2.0.17...v2.0.18)

> 12 October 2018

### Features

- feat: add deep objects merge script [`3d4b5f1`](https://github.com/coreui/coreui/commit/3d4b5f1f9608b4ef13e12a2677589a69afa48602)

### Fix

- fix(rgbToHex): transparent is not a valid rgb color ie issue [`92cc8a9`](https://github.com/coreui/coreui/commit/92cc8a9da2a27e2c50bf79ea56ec18c705939880)

### Refactor

- refactor: deep-object-merge utility [`f70ad13`](https://github.com/coreui/coreui/commit/f70ad1327cf1e6f52d3683d88b054d235b6ba656)

## [v2.0.17](https://github.com/coreui/coreui/compare/v2.0.16...v2.0.17)

> 11 October 2018

### Fix

- fix(sidebar): `rtl` for `sidebar-minimizer` icon [`379ffce`](https://github.com/coreui/coreui/commit/379ffcef5b3fe7e1bfb93cbabd5b02bd63064241)
- fix(card): `rtl` for `card-header` icon margins [`16f8145`](https://github.com/coreui/coreui/commit/16f81450189880929fcb1a39e067b5d3c7e0c137)

## [v2.0.16](https://github.com/coreui/coreui/compare/v2.0.15...v2.0.16)

> 10 October 2018

### Fix

- fix(breadcrumb): `rtl` padding [`34e7f10`](https://github.com/coreui/coreui/commit/34e7f103dc2cbbe2d4f4b1999cdec8523dade068)
- fix(sidebar): `rtl` ps scrollbar issue temp fix/refactor [`7c415f4`](https://github.com/coreui/coreui/commit/7c415f4ceb81a0eb48c22e4eb235b650af3f02c9)
- fix(card): `rtl` float for `card-header-actions` [`d494182`](https://github.com/coreui/coreui/commit/d494182dc40d92acdcb9fc0cc9d2ba1db10e351b)

## [v2.0.15](https://github.com/coreui/coreui/compare/v2.0.14...v2.0.15)

> 8 October 2018

## [v2.0.14](https://github.com/coreui/coreui/compare/v2.0.13...v2.0.14)

> 1 October 2018
## [v2.0.13](https://github.com/coreui/coreui/compare/v2.0.12...v2.0.13)

> 1 October 2018

## [v2.0.12](https://github.com/coreui/coreui/compare/v2.0.11...v2.0.12)

> 28 September 2018

### Fix

- fix(sidebar): `rtl` scrollbar issue temp fix [`af646a8`](https://github.com/coreui/coreui/commit/af646a8217db058a165c32abed064df2bce6277c)
- fix(layout): aside IE issue with `.main` margin on mobile [`c8abd0f`](https://github.com/coreui/coreui/commit/c8abd0f422b889ce223397fd831851c75ae05805)
- fix(sidebar): `rtl` IE issue with `sidebar-minimized` captions [`b1241b1`](https://github.com/coreui/coreui/commit/b1241b115a7260439c21961b70e3792753218170)

## [v2.0.11](https://github.com/coreui/coreui/compare/v2.0.10...v2.0.11)

> 27 September 2018

### Fix

- fix(sidebar-toggler): `rtl` position issue [`b29a153`](https://github.com/coreui/coreui/commit/b29a1537b499676622c93794359fd8d281b0ff58)

## [v2.0.10](https://github.com/coreui/coreui/compare/v2.0.9...v2.0.10)

> 26 September 2018

## [v2.0.9](https://github.com/coreui/coreui/compare/v2.0.6...v2.0.9)

> 24 September 2018

### Fix

- fix: add new event update [`081da0c`](https://github.com/coreui/coreui/commit/081da0c8eb6fdc99c8680271a93cf4da9ad88fc6)
- fix(sidebar): remove scrollbar when `sidebar-minimized` [`8498cb7`](https://github.com/coreui/coreui/commit/8498cb70b020b46cbd2c0e1c3d726566f94cb546)
- fix: add new event update [`337d5c8`](https://github.com/coreui/coreui/commit/337d5c8615aeec555801f30f4937fe3012d3a3fe)

## [v2.0.6](https://github.com/coreui/coreui/compare/v2.0.5...v2.0.6)

> 4 September 2018
## [v2.0.5](https://github.com/coreui/coreui/compare/v2.0.4...v2.0.5)

> 4 September 2018

### Features

- feat: add standalone styles [`0c40cf8`](https://github.com/coreui/coreui/commit/0c40cf8b182b61dcd0eb272fe625a548c3bde213)
- feat: add coreui utilities [`be0e20b`](https://github.com/coreui/coreui/commit/be0e20b8c2dd16720dc4dd27b247f9fdbc2b030b)
- feat: AjaxLoad [`1910aee`](https://github.com/coreui/coreui/commit/1910aee643a954122ab2ef4fab713ba88c11dad3)
- feat: Sidebar [`3fa81ce`](https://github.com/coreui/coreui/commit/3fa81ce9615952d23549d576ba114593cb903f8a)
- feat: AsideMenu [`b32ae37`](https://github.com/coreui/coreui/commit/b32ae3759e8ef051e9c4549e38bf3be608b06db4)
- feat: add ghost and square buttons [`6d5e0f6`](https://github.com/coreui/coreui/commit/6d5e0f6920ee1b50de96733efe340bfe8b52480c)
- feat: list group with accent [`5590e03`](https://github.com/coreui/coreui/commit/5590e03a8792e328f738827c4559b5cd55e80e07)
- feat: add npm postinstall scripts [`8f860c3`](https://github.com/coreui/coreui/commit/8f860c3ed28e343f5719de8081aed7931a42149d)
- feat: add img-circle [`c0527ba`](https://github.com/coreui/coreui/commit/c0527ba40d4aa8cb67af2dcc7d3a99f0ddb7a36b)
- feat: add d-minimized-none and d-compact-none [`a1d11c3`](https://github.com/coreui/coreui/commit/a1d11c3ab246cb3211738ba945c180764cdcd1a9)
- feat: enable rounded elements in layout [`7a3cba1`](https://github.com/coreui/coreui/commit/7a3cba16041347fb91f8362be614f953b68db444)
- feat: list group with accent [`89a4856`](https://github.com/coreui/coreui/commit/89a4856030689eaf8cd5183448d68a81c5cd1714)
- feat: list group with accent [`68645aa`](https://github.com/coreui/coreui/commit/68645aaa902c1ec857ab4cb3b71a045201784a2c)

### Fix

- fix: ie11-custom-properties [`22b4cdb`](https://github.com/coreui/coreui/commit/22b4cdbf6583edb730e8bb0cf95a2e5d71a7adbd)
- fix: ie11-custom-properties [`3219963`](https://github.com/coreui/coreui/commit/3219963bbbbdd10d6402388ed5e85deea346d9a1)
- fix: navbar bg issue, hidden sidebar-minimizer on tablets [`6c4a93e`](https://github.com/coreui/coreui/commit/6c4a93ec18b591dec14b3a86c06d1efda6d1e7e5)
- fix: wrong functions names [`0c807a3`](https://github.com/coreui/coreui/commit/0c807a370466cb03d75f2464a32a2ca68d4f87eb)
- fix: XMLHttpRequest issue [`8267986`](https://github.com/coreui/coreui/commit/826798629972ef253e4caf7b16ef97e18571eebc)
- fix: ie11-custom-properties [`032af3b`](https://github.com/coreui/coreui/commit/032af3b322ae975d30197b1a3dfeeaa4a45d19bf)
- fix: switch-pill issue [`d73fcc1`](https://github.com/coreui/coreui/commit/d73fcc1b35e79d575c053d91d2051bbdc5785c0e)
- fix: ie11-custom-properties [`2932e97`](https://github.com/coreui/coreui/commit/2932e974f14709f376a91b7d0721c27d82e13a55)
- fix: remove borders from disabled buttons [`a5be78a`](https://github.com/coreui/coreui/commit/a5be78a6542df1472937642bfb5fcc313e768098)
- fix: add border-radius to icons [`1962f1e`](https://github.com/coreui/coreui/commit/1962f1e36440932c6d195c7c63ec5f1feeb7a31a)
- fix: eslint errors [`48d6569`](https://github.com/coreui/coreui/commit/48d656925a8bf70d9ab44867590b95f9c939f8a9)
- fix: problems with link [`25b9f58`](https://github.com/coreui/coreui/commit/25b9f58e3434fa5218d55e20d177311ba69a1260)
- fix: perfect scrollbar issue [`10b1d0f`](https://github.com/coreui/coreui/commit/10b1d0f0634b98819b8b9657a5b3240f91fdfd46)
- fix(hex-to-rgb/a): add missing parenthesis [`0258188`](https://github.com/coreui/coreui/commit/02581889e6360cd6f8bbf16ae71d34b02cc2da0c)
- fix: problems with link [`21911eb`](https://github.com/coreui/coreui/commit/21911eb7bfd793d0f1f21c7803caeb7c1a18fca9)
- fix: perfect scrollbar issue [`f3fdf76`](https://github.com/coreui/coreui/commit/f3fdf76904382d927eac613f67f4930d55782fe1)
- fix: add left 0 to .chart-wrapper [`c19f858`](https://github.com/coreui/coreui/commit/c19f85851018b57dac7e0289d88baf411591b98f)
- fix: hide nav-labels when sidebar-minimized [`300b6fa`](https://github.com/coreui/coreui/commit/300b6fa30c6dc2a98e4fa4cd383f8512c826f24e)

### Refactor

- refactor: update to boostrap v4.1.0 [`a926b65`](https://github.com/coreui/coreui/commit/a926b65c2932926c6b52b4c2e2c2438166fb77be)
- refactor: improve gray colors [`04d0bbf`](https://github.com/coreui/coreui/commit/04d0bbf965917146bd67ed278f7941f123205083)
- refactor: new structure [`1c3b130`](https://github.com/coreui/coreui/commit/1c3b1304a112acc3fee900c4849095b30a9c4787)
- refactor: improve switches [`5282e19`](https://github.com/coreui/coreui/commit/5282e1939e584a4b13b1858e1ae1e8363423b5f5)
- refactor: new structure [`9c8e4a1`](https://github.com/coreui/coreui/commit/9c8e4a14bb4c352c1ddfe4c1a4a2e34403abcf02)
- refactor: improve switches [`e702cf4`](https://github.com/coreui/coreui/commit/e702cf486978239e3204823f7d5b1fbf2da0b167)
- refactor: improve avatar's styles [`2de7e40`](https://github.com/coreui/coreui/commit/2de7e4074e518d4028eaa824eb2c9a3db9668339)
- refactor: remove all functions [`db8173a`](https://github.com/coreui/coreui/commit/db8173a0fa87ba24ee6e62ab07a781dfc56974e8)
- refactor: change navnar to header [`167c03b`](https://github.com/coreui/coreui/commit/167c03b63494d05c41f6fd65a6a2e21acb4ddfd4)
- refactor: remove pace [`260a46d`](https://github.com/coreui/coreui/commit/260a46da803fe02d04477efc60a3c31411b48c39)
- refactor: add error handling [`ceec3c2`](https://github.com/coreui/coreui/commit/ceec3c213a70e320670ca723a8c5fb15f9727040)
- refactor: remove ResizeBroadcast funtion [`aabab0b`](https://github.com/coreui/coreui/commit/aabab0b8f43c388a1dd0c8ce128d9f286dfe6bf6)
- refactor(getStyle): polyfill IE custom properties [`62e3d43`](https://github.com/coreui/coreui/commit/62e3d43250d8082c4c0358c8ca61b512bb47ce03)
- refactor: improve tooltips [`e6f8511`](https://github.com/coreui/coreui/commit/e6f8511022867f5ea8e927f63822203c7a45d570)
- refactor: add selectors [`74a12b7`](https://github.com/coreui/coreui/commit/74a12b779146b28d7d918bb8875fee0d7aa1b172)
- refactor: remove pace and eslint errors [`c3e294a`](https://github.com/coreui/coreui/commit/c3e294a171103a66a01f4ddc1977485200b410d2)
- refactor: improve .card-actions [`b48f843`](https://github.com/coreui/coreui/commit/b48f8435043da5de945d349e31fd0f28b9bb65dc)
- refactor: update colors [`13fbde7`](https://github.com/coreui/coreui/commit/13fbde7d91b6da7840633a389050140340aa8969)
- refactor: add Selector.INIT [`b698234`](https://github.com/coreui/coreui/commit/b698234ec90445053a094344960a512814ddaacf)
- refactor: remove pace [`cd7cdd1`](https://github.com/coreui/coreui/commit/cd7cdd1df6a0c5f7f610495e06448fa9bcf9d789)
- refactor: add border-radius(0) nav-link [`f7057d0`](https://github.com/coreui/coreui/commit/f7057d0aa58f435566e09f6abd76a5df186e9ff6)

## [v2.0.4](https://github.com/coreui/coreui/compare/v2.0.3...v2.0.4)

> 1 June 2012

## [v2.0.3](https://github.com/coreui/coreui/compare/v2.0.2...v2.0.3)

> 24 April 2012

### Fix

- alt fix to #3029: change to single border-radii properties [`8575a45`](https://github.com/coreui/coreui/commit/8575a452942001bce522e8e258d9e192d24cb6ec)
- fix left and right tab-content alignment with width: auto; [`c4fb703`](https://github.com/coreui/coreui/commit/c4fb7032690ed10162562dfbf893311389a64dee)
- fix docs: move .pull-left from search input to search form in navbar [`7749044`](https://github.com/coreui/coreui/commit/774904464dc8237b36be8197ca7c91d701ce4f0e)
- fix right aligned dropdowns in navbar by adding left: auto; to nix default alignment [`ad78caa`](https://github.com/coreui/coreui/commit/ad78caa72639aa377caf584efc26fe7a5682b15c)

## [v2.0.2](https://github.com/coreui/coreui/compare/v2.0.1...v2.0.2)

> 22 June 2018

### Features

- feat: add standalone styles [`0c40cf8`](https://github.com/coreui/coreui/commit/0c40cf8b182b61dcd0eb272fe625a548c3bde213)
- feat: add coreui utilities [`be0e20b`](https://github.com/coreui/coreui/commit/be0e20b8c2dd16720dc4dd27b247f9fdbc2b030b)
- feat: AjaxLoad [`1910aee`](https://github.com/coreui/coreui/commit/1910aee643a954122ab2ef4fab713ba88c11dad3)
- feat: Sidebar [`3fa81ce`](https://github.com/coreui/coreui/commit/3fa81ce9615952d23549d576ba114593cb903f8a)
- feat: AsideMenu [`b32ae37`](https://github.com/coreui/coreui/commit/b32ae3759e8ef051e9c4549e38bf3be608b06db4)
- feat: add ghost and square buttons [`6d5e0f6`](https://github.com/coreui/coreui/commit/6d5e0f6920ee1b50de96733efe340bfe8b52480c)
- feat: list group with accent [`5590e03`](https://github.com/coreui/coreui/commit/5590e03a8792e328f738827c4559b5cd55e80e07)
- feat: add npm postinstall scripts [`8f860c3`](https://github.com/coreui/coreui/commit/8f860c3ed28e343f5719de8081aed7931a42149d)
- feat: add img-circle [`c0527ba`](https://github.com/coreui/coreui/commit/c0527ba40d4aa8cb67af2dcc7d3a99f0ddb7a36b)
- feat: add d-minimized-none and d-compact-none [`a1d11c3`](https://github.com/coreui/coreui/commit/a1d11c3ab246cb3211738ba945c180764cdcd1a9)
- feat: enable rounded elements in layout [`7a3cba1`](https://github.com/coreui/coreui/commit/7a3cba16041347fb91f8362be614f953b68db444)
- feat: list group with accent [`89a4856`](https://github.com/coreui/coreui/commit/89a4856030689eaf8cd5183448d68a81c5cd1714)
- feat: list group with accent [`68645aa`](https://github.com/coreui/coreui/commit/68645aaa902c1ec857ab4cb3b71a045201784a2c)

### Fix

- fix: ie11-custom-properties [`22b4cdb`](https://github.com/coreui/coreui/commit/22b4cdbf6583edb730e8bb0cf95a2e5d71a7adbd)
- fix: ie11-custom-properties [`3219963`](https://github.com/coreui/coreui/commit/3219963bbbbdd10d6402388ed5e85deea346d9a1)
- fix: navbar bg issue, hidden sidebar-minimizer on tablets [`6c4a93e`](https://github.com/coreui/coreui/commit/6c4a93ec18b591dec14b3a86c06d1efda6d1e7e5)
- fix: wrong functions names [`0c807a3`](https://github.com/coreui/coreui/commit/0c807a370466cb03d75f2464a32a2ca68d4f87eb)
- fix: XMLHttpRequest issue [`8267986`](https://github.com/coreui/coreui/commit/826798629972ef253e4caf7b16ef97e18571eebc)
- fix: ie11-custom-properties [`032af3b`](https://github.com/coreui/coreui/commit/032af3b322ae975d30197b1a3dfeeaa4a45d19bf)
- fix: switch-pill issue [`d73fcc1`](https://github.com/coreui/coreui/commit/d73fcc1b35e79d575c053d91d2051bbdc5785c0e)
- fix: ie11-custom-properties [`2932e97`](https://github.com/coreui/coreui/commit/2932e974f14709f376a91b7d0721c27d82e13a55)
- fix: remove borders from disabled buttons [`a5be78a`](https://github.com/coreui/coreui/commit/a5be78a6542df1472937642bfb5fcc313e768098)
- fix: add border-radius to icons [`1962f1e`](https://github.com/coreui/coreui/commit/1962f1e36440932c6d195c7c63ec5f1feeb7a31a)
- fix: eslint errors [`48d6569`](https://github.com/coreui/coreui/commit/48d656925a8bf70d9ab44867590b95f9c939f8a9)
- fix: problems with link [`25b9f58`](https://github.com/coreui/coreui/commit/25b9f58e3434fa5218d55e20d177311ba69a1260)
- fix: perfect scrollbar issue [`10b1d0f`](https://github.com/coreui/coreui/commit/10b1d0f0634b98819b8b9657a5b3240f91fdfd46)
- fix(hex-to-rgb/a): add missing parenthesis [`0258188`](https://github.com/coreui/coreui/commit/02581889e6360cd6f8bbf16ae71d34b02cc2da0c)
- fix: problems with link [`21911eb`](https://github.com/coreui/coreui/commit/21911eb7bfd793d0f1f21c7803caeb7c1a18fca9)
- fix: perfect scrollbar issue [`f3fdf76`](https://github.com/coreui/coreui/commit/f3fdf76904382d927eac613f67f4930d55782fe1)
- fix: add left 0 to .chart-wrapper [`c19f858`](https://github.com/coreui/coreui/commit/c19f85851018b57dac7e0289d88baf411591b98f)
- fix: hide nav-labels when sidebar-minimized [`300b6fa`](https://github.com/coreui/coreui/commit/300b6fa30c6dc2a98e4fa4cd383f8512c826f24e)

### Refactor

- refactor: update to boostrap v4.1.0 [`a926b65`](https://github.com/coreui/coreui/commit/a926b65c2932926c6b52b4c2e2c2438166fb77be)
- refactor: improve gray colors [`04d0bbf`](https://github.com/coreui/coreui/commit/04d0bbf965917146bd67ed278f7941f123205083)
- refactor: new structure [`1c3b130`](https://github.com/coreui/coreui/commit/1c3b1304a112acc3fee900c4849095b30a9c4787)
- refactor: improve switches [`5282e19`](https://github.com/coreui/coreui/commit/5282e1939e584a4b13b1858e1ae1e8363423b5f5)
- refactor: new structure [`9c8e4a1`](https://github.com/coreui/coreui/commit/9c8e4a14bb4c352c1ddfe4c1a4a2e34403abcf02)
- refactor: improve switches [`e702cf4`](https://github.com/coreui/coreui/commit/e702cf486978239e3204823f7d5b1fbf2da0b167)
- refactor: improve avatar's styles [`2de7e40`](https://github.com/coreui/coreui/commit/2de7e4074e518d4028eaa824eb2c9a3db9668339)
- refactor: remove all functions [`db8173a`](https://github.com/coreui/coreui/commit/db8173a0fa87ba24ee6e62ab07a781dfc56974e8)
- refactor: change navnar to header [`167c03b`](https://github.com/coreui/coreui/commit/167c03b63494d05c41f6fd65a6a2e21acb4ddfd4)
- refactor: remove pace [`260a46d`](https://github.com/coreui/coreui/commit/260a46da803fe02d04477efc60a3c31411b48c39)
- refactor: add error handling [`ceec3c2`](https://github.com/coreui/coreui/commit/ceec3c213a70e320670ca723a8c5fb15f9727040)
- refactor: remove ResizeBroadcast funtion [`aabab0b`](https://github.com/coreui/coreui/commit/aabab0b8f43c388a1dd0c8ce128d9f286dfe6bf6)
- refactor(getStyle): polyfill IE custom properties [`62e3d43`](https://github.com/coreui/coreui/commit/62e3d43250d8082c4c0358c8ca61b512bb47ce03)
- refactor: improve tooltips [`e6f8511`](https://github.com/coreui/coreui/commit/e6f8511022867f5ea8e927f63822203c7a45d570)
- refactor: add selectors [`74a12b7`](https://github.com/coreui/coreui/commit/74a12b779146b28d7d918bb8875fee0d7aa1b172)
- refactor: remove pace and eslint errors [`c3e294a`](https://github.com/coreui/coreui/commit/c3e294a171103a66a01f4ddc1977485200b410d2)
- refactor: improve .card-actions [`b48f843`](https://github.com/coreui/coreui/commit/b48f8435043da5de945d349e31fd0f28b9bb65dc)
- refactor: update colors [`13fbde7`](https://github.com/coreui/coreui/commit/13fbde7d91b6da7840633a389050140340aa8969)
- refactor: add Selector.INIT [`b698234`](https://github.com/coreui/coreui/commit/b698234ec90445053a094344960a512814ddaacf)
- refactor: remove pace [`cd7cdd1`](https://github.com/coreui/coreui/commit/cd7cdd1df6a0c5f7f610495e06448fa9bcf9d789)
- refactor: add border-radius(0) nav-link [`f7057d0`](https://github.com/coreui/coreui/commit/f7057d0aa58f435566e09f6abd76a5df186e9ff6)

## [v2.0.1](https://github.com/coreui/coreui/compare/v2.0.0...v2.0.1)

> 16 February 2012

## [v2.0.0](https://github.com/coreui/coreui/compare/v1.4.0...v2.0.0)

> 31 January 2012

### Fix

- fix docs: move .pull-left from search input to search form in navbar [`7749044`](https://github.com/coreui/coreui/commit/774904464dc8237b36be8197ca7c91d701ce4f0e)
- fix right aligned dropdowns in navbar by adding left: auto; to nix default alignment [`ad78caa`](https://github.com/coreui/coreui/commit/ad78caa72639aa377caf584efc26fe7a5682b15c)

## [v1.4.0](https://github.com/coreui/coreui/compare/v1.3.0...v1.4.0)

> 3 November 2011

## [v1.3.0](https://github.com/coreui/coreui/compare/v1.2.0...v1.3.0)

> 16 September 2011

## [v1.2.0](https://github.com/coreui/coreui/compare/v1.1.1...v1.2.0)

> 3 September 2011

## [v1.1.1](https://github.com/coreui/coreui/compare/v1.1.0...v1.1.1)

> 26 August 2011

## [v1.1.0](https://github.com/coreui/coreui/compare/v1.0.0...v1.1.0)

> 22 August 2011

## v1.0.0

> 18 August 2011

<!-- auto-changelog-above -->

## [v4.0.0-alpha.3](https://github.com/coreui/coreui/compare/v4.0.0-alpha.1...v4.0.0-alpha.2)

> 19 March 2021

### Features

- feat(Badge): add `badge-sm` [`8afa29b`](https://github.com/coreui/coreui/commit/8afa29be9a15696fb6755b7cb9bac3f67b478838)
- feat: add CSS Vars to border utilities [`d96aa5b`](https://github.com/coreui/coreui/commit/d96aa5bf8d89080644a0d896ed31cf8595f0db63)
- feat: add `contrast-ratio-correction` function [`c3e2cdc`](https://github.com/coreui/coreui/commit/c3e2cdc0d084a2b8cd4a4fa1b01f4824cc4e13e6)

### Fix

- fix: rename wrong CSS Variables names [`c187b59`](https://github.com/coreui/coreui/commit/c187b59bc2f8c2dcf591541891b401743101c731)
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

## [v4.0.0-alpha.0](https://github.com/coreui/coreui/compare/v3.4.0...v4.0.0-alpha.0)

> 13 January 2021

### Features

- feat: add sidebar component [`50e8743`](https://github.com/coreui/coreui/commit/50e87435da978bc1d56a139b2d1ca42e0eec57f5)
- feat: add header component [`436cbb7`](https://github.com/coreui/coreui/commit/436cbb72fa5dd56b77b5eb89bd20ae63d6e20b7d)
- feat: add avatar component [`a761149`](https://github.com/coreui/coreui/commit/a761149c5ad3865641eed68219d3bb0790e67f2e)
- feat: add vr component [`4e9e4ce`](https://github.com/coreui/coreui/commit/4e9e4ce63437b7d5067c12e4c9684eb6f1efd6b0)
- feat: add icon component, and progress group [`31fb6bd`](https://github.com/coreui/coreui/commit/31fb6bddb4e196e53e0fc9b27c0aab1b7f4c1184)
- feat: add ghost button [`7ac3b3c`](https://github.com/coreui/coreui/commit/7ac3b3cb38d2dd51179a115800670452cd26af45)
- feat(Form Switch): add LG and XL sizes [`797abef`](https://github.com/coreui/coreui/commit/797abefb34937689b63d8d1f69a535425791865e)
- feat(Callout): add callout component [`40b30b4`](https://github.com/coreui/coreui/commit/40b30b41fc839486b9ed69f099bd5ad0d254f7df)
- feat: add footer component [`60f5da2`](https://github.com/coreui/coreui/commit/60f5da29c4c0cfbc9f7f8eb301575d55b2065f6a)
- feat: add `border-{top | right | bottom | left}-color` and `border-{top | right | bottom | left}-width` utilities [`7d77559`](https://github.com/coreui/coreui/commit/7d77559d9dac779d7b55ec7b6ec9250d77237d30)
- feat(color-contrast): ensure we return a contrasted enough color (light-first), the most contrasted one otherwise [`1b8bf5b`](https://github.com/coreui/coreui/commit/1b8bf5b56c77a60aab4c228aada7565f77db17ce)
- feat: add font weight medium and semibold; [`1a505f4`](https://github.com/coreui/coreui/commit/1a505f407486c0ec381df7fc786394bc27254ff6)
- feat: add new text utilities [`25a0206`](https://github.com/coreui/coreui/commit/25a02065bedf7785bdda63db498a726e1718123d)
- feat: add breakpoint-before function [`cd7623f`](https://github.com/coreui/coreui/commit/cd7623f2840a85491d606fc00e7c2137ca2aa9c2)
- feat: CSS Variables support [`e038911`](https://github.com/coreui/coreui/commit/e03891128c8a5e9478dd602c7d5dd141c38a382a)
- feat: add callout [`e8d1bae`](https://github.com/coreui/coreui/commit/e8d1bae19d9571b2f6b7580a39ced652e555a131)
- feat(css): groups hr element [`ff39e0b`](https://github.com/coreui/coreui/commit/ff39e0bf842cbac99126689bc7cfd1fa882d5d93)
- feat: add `--cui-font-size-base` variable [`69ea9d7`](https://github.com/coreui/coreui/commit/69ea9d79b8b4d21d27ac6d4ae559383f84071587)
- feat(RTL): implement RTL [`9488978`](https://github.com/coreui/coreui/commit/9488978fb55286ba83e8193a871d1ff9815045b9)
- feat(plugins): allow to import separate plugins [`eb81c39`](https://github.com/coreui/coreui/commit/eb81c39f2c36d88d4ebc062a2fa179980827e8be)
- feat(dropdown): add original click event [`49e0946`](https://github.com/coreui/coreui/commit/49e094619b171568fcdf59cf2dbf0e8b790e8e54)
- browser-features.yml: Fix MS A11y UserVoice entry [`2133dbd`](https://github.com/coreui/coreui/commit/2133dbd718c1fe7976514970706d02d2ffe381b9)
- Most Wanted features: Add Edge UserVoice &lt;dialog&gt; entry [`6844745`](https://github.com/coreui/coreui/commit/6844745db5bdddca62fe7caf5c88dfda744babbe)
- feat(color-contrast): set min-contrast-ratio as an argument [`5b480fc`](https://github.com/coreui/coreui/commit/5b480fcc8021b0f465f3c5c2c6fa054188facd98)
- feat: keep contrast on `.table-dark` [`a16ffc7`](https://github.com/coreui/coreui/commit/a16ffc7ba1035d41a2cb3e68df5b8c6f756f90b1)
- _data/browser-features.yml: remove trailing spaces. [`2291d08`](https://github.com/coreui/coreui/commit/2291d087502df371afa5d4083576031b4e15f158)

### Fix

- feat: add font weight medium and semibold; [`1a505f4`](https://github.com/coreui/coreui/commit/1a505f407486c0ec381df7fc786394bc27254ff6)
- fix(css): adds a new opacity var [`52c5b06`](https://github.com/coreui/coreui/commit/52c5b06f1c0ed1aaed67012dcb29198618080f85)
- fix(breakpoints): use next breakpoint when targetting xs only [`7058f89`](https://github.com/coreui/coreui/commit/7058f8928641c847b6afb3a8ef2022ce75a5ded8)
- fix: typo in `list-group-variant` [`5a19b44`](https://github.com/coreui/coreui/commit/5a19b443df15767a321c81cea1fc6bcfc9d57b7f)
- fix: icon position [`7e23d7f`](https://github.com/coreui/coreui/commit/7e23d7f10ed008ccd9aa780c8b5489692ce05d24)
- fix: reorder css properties [`d7d8e56`](https://github.com/coreui/coreui/commit/d7d8e5630e6ac8bd2b76ae4e3772f34eee023b03)
- fix(event-handler): remove the use of our event handler in unit test [`9313446`](https://github.com/coreui/coreui/commit/9313446274edbb216fd7777c3d3f3147622e81e7)
- fix(manipulator): increase coverage for manipulator [`64591b3`](https://github.com/coreui/coreui/commit/64591b3722128d89252b8f1c840cd846940b7f5c)
- fix(data): do not use data object in our unit tests [`2b78078`](https://github.com/coreui/coreui/commit/2b780787797da2bed2af0f95963be61e2b8e94a4)
- fix(visual-test): remove jquery in them [`5dcca44`](https://github.com/coreui/coreui/commit/5dcca44fcfe3e4ae2820f4b8b115f006374985b3)
- fix(docs): remove jQuery from our docs [`cf821e1`](https://github.com/coreui/coreui/commit/cf821e1d4d1d67f6b4ce9651ae64c72a502c40ba)
- fix(data): increase coverage for data [`0b719e0`](https://github.com/coreui/coreui/commit/0b719e065c278d1d20f993bd2999dd108ac23682)
- fix(selector-engine): increase coverage for selector engine [`096413a`](https://github.com/coreui/coreui/commit/096413a9942178aa68925f032822b40900bac346)
- fix(modal): removes .navbar-toggler margin [`cb82394`](https://github.com/coreui/coreui/commit/cb82394fc8645d4e41476d19693844fac5022b4c)
- fix(tooltip): xss in container option [`2d90d36`](https://github.com/coreui/coreui/commit/2d90d369bbc2bd2647620246c55cec8c4705e3d0)
- fix(util): remove extend [`4510e7e`](https://github.com/coreui/coreui/commit/4510e7e61db27b264c1fadc125beb2d4c80f07df)
- fix(tests): visual plugins tests [`d180452`](https://github.com/coreui/coreui/commit/d18045210cdd09271ac033992341d4460d6bafac)
- fix(unit-test): dropdown, collapse and carousel [`6b08083`](https://github.com/coreui/coreui/commit/6b0808354d212272030e598f4e8ea9e2bce7703a)
- fix(tooltip): remove useless unit test [`f2aab5e`](https://github.com/coreui/coreui/commit/f2aab5ea99aae0726664d3f5ba9250629da45f04)
- fix(plugins): save instance in constructor [`467dd11`](https://github.com/coreui/coreui/commit/467dd113c50c50f69c1b17d40cbd41d0b175952a)
- fix(event-handler): remove polyfill and move it to index [`b4a3b00`](https://github.com/coreui/coreui/commit/b4a3b00ac8635b51b6216f540ac59219432c0d65)
- Alternate fix to #17965: Updates to use the new class name and adds some basic docs for custom checkbox/radio validation [`09aefaa`](https://github.com/coreui/coreui/commit/09aefaa2afe05f438b99caa63bb888c62c40bf73)
- fix(tooltip): get tip on placement change [`e57a2f2`](https://github.com/coreui/coreui/commit/e57a2f244ba8446fffe71847e6a58b18f7b2d541)
- fix(util): use getElementById when it's possible [`6b92321`](https://github.com/coreui/coreui/commit/6b92321f6a04f07e0a3531d0e546c3cc20867bdb)
- fix(util): increase util coverage [`a1cc9a6`](https://github.com/coreui/coreui/commit/a1cc9a6e332869519fcff2a3d0f976bdad0f14fd)
- fix(modal): fix unit test and resetting style [`283ab30`](https://github.com/coreui/coreui/commit/283ab30164f0f58ffb13063d800b7a2ee686bb8a)
- fix(collapse): xss in parent option [`1490960`](https://github.com/coreui/coreui/commit/149096016f70fd815540d62c0989fd99cdc809e0)
- fix(util): use querySelector for ids [`eab9da5`](https://github.com/coreui/coreui/commit/eab9da5beb5a2fdba8be4e54dfcdac0de4eba2f6)
- Docfix: Typo default -&gt; secondary, and reorder [`45cbbad`](https://github.com/coreui/coreui/commit/45cbbad87113053d6adb97e260c8689f77a3a8cd)
- fix(event-handler): use Object.key for passing values in an event [`8010c01`](https://github.com/coreui/coreui/commit/8010c010e9f15ec04e291a07316f93bda5b46f19)
- fix(build): remove jquery in our build [`83cea3b`](https://github.com/coreui/coreui/commit/83cea3bafa57987b8cd6be0557bbca8364ab1fee)
- Alternate fix to #18865: Change the .navbar-toggler color for light/dark navbars as we do with the .navbar-brand [`8b7ce08`](https://github.com/coreui/coreui/commit/8b7ce089c9886e8ec57b534b56ff98b03e8566ed)
- Remove #8702 entry from Wall of browser bugs [`7441d3f`](https://github.com/coreui/coreui/commit/7441d3f4c55e9180dcc1f7700fe1c9710213f032)
- fix(carousel): on load page create a carousel [`0b726de`](https://github.com/coreui/coreui/commit/0b726de94e6a30612dcd227222afd3b61516dae0)
- Remove vendor prefixes from appearance: none. [`9bacc67`](https://github.com/coreui/coreui/commit/9bacc6715a456f9fbd821a9e591dc789c331f603)
- Part 2 for fixing #13996: Add a docs callout to help folks using SVG images in IE8-10 [`4f5efb8`](https://github.com/coreui/coreui/commit/4f5efb84c9e81120b26949cecc626ae866fef46a)
- Alternate fix to #19006: Add a single variable for controlling that inner 1px padding on .popover [`df6facf`](https://github.com/coreui/coreui/commit/df6facf66e19566b962327899f981258b695076c)
- fix(dropdown): ensure [style] will override inline styles [`9312442`](https://github.com/coreui/coreui/commit/9312442338003d5011372e0cc3994de56179653b)
- Typo fix : depedending ⮞ depending [`f4e6932`](https://github.com/coreui/coreui/commit/f4e6932611a15ba4738f1cf519e5bf24c15ae8e3)
- Typo fix : individiual ⮞ individual [`588a029`](https://github.com/coreui/coreui/commit/588a029abc16cc7a54acbbd6ead9c3c0d72f686b)
- Typo fix : ocassions ⮞ occasions [`d2aefa7`](https://github.com/coreui/coreui/commit/d2aefa7d94d62fd637163d96d3054af2a35b3383)
- fix(scrollspy): xss in target option [`cc61edf`](https://github.com/coreui/coreui/commit/cc61edfa8af7b5ec9d4888c59bf94377e499b78b)
- fix(doc): typo in dropdowns.md [`f42ef5f`](https://github.com/coreui/coreui/commit/f42ef5fa690e1a36764dceef983f15e72ea822be)
- autoprefixer-settings.js: Link to Firefox ESR webpage [`e4989bf`](https://github.com/coreui/coreui/commit/e4989bf784bbf193abecfe38a00591b69cc369b2)
- reboot.md: fix typo: "to a minimal" [sic] [`e3899b4`](https://github.com/coreui/coreui/commit/e3899b4fa848e73a0efcbba614b5ddf1af1c677c)
- Affix docs: add MDN link for `position: sticky` [`89455af`](https://github.com/coreui/coreui/commit/89455afe97a267e7a37d5699d9f17e82630b8c04)
- fix(polyfill): disable coverage for our polyfills [`fe580a8`](https://github.com/coreui/coreui/commit/fe580a8e5a0c0eaa17d88d48051fae4eb542ccce)
- Part 1 for fixing #13996: Revert the width: 100% \9; IE hack for SVG img-responsive [`c769d7c`](https://github.com/coreui/coreui/commit/c769d7c21ff50d3cf2b3a9a97f0627d401e11f95)
- popovers.html: fix typo: "Dimissmisable" [`5b9e2bf`](https://github.com/coreui/coreui/commit/5b9e2bf1265eb50c0d4105b2eb3da12280c37430)
- fix part of #13111: hide the docs nav on small and below devices [`508d9f0`](https://github.com/coreui/coreui/commit/508d9f0d65ca215dfdfca6aa8cdd877f8dfebd11)
- button-groups.html: fix grammar: "in on" =&gt; "on" [`ff7e8d5`](https://github.com/coreui/coreui/commit/ff7e8d5054b95951541cbc01ee58cb46b753f597)
- alternate fix to #4522: increase line-height on btn-mini [`46c10c8`](https://github.com/coreui/coreui/commit/46c10c8b58919841d9adbc4908a127bf5eff88ad)
- hotfix: github buttons urls [`5df1e2c`](https://github.com/coreui/coreui/commit/5df1e2c00a295c45db7fa75dba333dc9464b128c)
- fixes #: remove double background color on dropdown links [`5af5c2e`](https://github.com/coreui/coreui/commit/5af5c2ed368e8b728306b90082d32719d5a15b54)
- alt fix to #3029: change to single border-radii properties [`8575a45`](https://github.com/coreui/coreui/commit/8575a452942001bce522e8e258d9e192d24cb6ec)
- fix left and right tab-content alignment with width: auto; [`c4fb703`](https://github.com/coreui/coreui/commit/c4fb7032690ed10162562dfbf893311389a64dee)
- Better clearing on `.dl-horizontal` for empty `dd` elements [`37f4a25`](https://github.com/coreui/coreui/commit/37f4a25be436e8b25004d22541809032d8354600)
- Alternate fix for #11303: add link to site in banner and remove @mdo and @fat usernames from it [`a7a9dca`](https://github.com/coreui/coreui/commit/a7a9dcaeb2231b2580cf79fcee7d777b98ac24d8)
- alt fix to #10278: Change Google Maps compatibility warning to a general box-sizing warning [`bfda156`](https://github.com/coreui/coreui/commit/bfda156bb95c115ac9abba880074d4582c81dc0d)
- Half fix for #9855: Don't fuck with margins for open modal dialog on account of Lion non-scrollbars and inconsistencies elsewhere [`352532c`](https://github.com/coreui/coreui/commit/352532cd63a2d8e03ba7db806aa3bd110c023532)
- finish fixing #9295: add button group buttons to new input group sizing [`4957670`](https://github.com/coreui/coreui/commit/49576704ea6c24fbc4cb32f44c5986a1e7714634)
- fix docs: move .pull-left from search input to search form in navbar [`7749044`](https://github.com/coreui/coreui/commit/774904464dc8237b36be8197ca7c91d701ce4f0e)
- fixes part of #11117: doc that modal show()/hide() return before animation finishes [`afbdc21`](https://github.com/coreui/coreui/commit/afbdc21def8cf451e73895a6e2594e3dfa0a64e5)
- typo fixed: highligted source code of second radio button was missing in css.html -&gt; checkboxes & radios -&gt; default section [`6f9ed7e`](https://github.com/coreui/coreui/commit/6f9ed7efeb0a4f3252f0f11d53d5f9be065abc4f)
- Small fix: I noticed the use of a deprecated variable. This seems to be the only occurrence. [`dd9c5fd`](https://github.com/coreui/coreui/commit/dd9c5fdb08a8445fc44117386ca3bead38b717a9)
- typo fix: replaced 'model-open' with 'modal-open' [`50f1bc4`](https://github.com/coreui/coreui/commit/50f1bc47ece352f1e647c345fd9b699707a40b98)
- Navbar toggle is not vertically aligned (3.0.0-wip) with custom navbar height [`0017f7f`](https://github.com/coreui/coreui/commit/0017f7fca4d34b37b63275f1aab79baad16ed5e1)
- fix right aligned dropdowns in navbar by adding left: auto; to nix default alignment [`ad78caa`](https://github.com/coreui/coreui/commit/ad78caa72639aa377caf584efc26fe7a5682b15c)
- Update justified-nav.css [`c76b7a5`](https://github.com/coreui/coreui/commit/c76b7a53a416f74ced4ad7124e38a305ac477bb5)

### Refactor

- refactor: clean-up [`6a9cbe5`](https://github.com/coreui/coreui/commit/6a9cbe5eda5da9ad5edbf8a4a7c47dd302ad270f)
- refactor: clean-up [`58721af`](https://github.com/coreui/coreui/commit/58721afd171b8e2d7ec023151039a8685c6206b7)
-  refactor: css variables; [`9407545`](https://github.com/coreui/coreui/commit/9407545f2a86094aa1d50fccb5f2e49d68dc5b23)
- refactor: backup bootstrap variables [`3832e90`](https://github.com/coreui/coreui/commit/3832e90363dd4ab0138e721e5e9078158e5266d1)
- refactor: update sidebar component [`6a092bd`](https://github.com/coreui/coreui/commit/6a092bd3054ad4c0a2be32190d2be1fdaefbda6a)
- refactor(sidebar): divide sidebar.js to sidebar.js and navigation.js [`97af33d`](https://github.com/coreui/coreui/commit/97af33d83f4d1aa1a097b1203c6b85b1659d12f9)
- refactor: add css variables [`080c774`](https://github.com/coreui/coreui/commit/080c774477d27f3594a89c8cad80a0448db2ffa5)
- refactor: clean-up and reorder variables; add markers to generate sass documentation for components [`bac1643`](https://github.com/coreui/coreui/commit/bac1643b96bbb1c96377192fea8ba03708a68d98)
- refactor: remove `c-` prefixes and clean-up [`9b9d099`](https://github.com/coreui/coreui/commit/9b9d0999c652f3338f21b9e3bbf9ccfcff609306)
- refactor: add css variables [`0ebb22a`](https://github.com/coreui/coreui/commit/0ebb22a93524339140df8fcbfd971af6812be77e)
- refactor: change project name [`3d4f620`](https://github.com/coreui/coreui/commit/3d4f6201728dcb3724e00e312ed5f4cae72292d6)
- refactor(Sidebar): add tranistions, rename `sidebar-unfoldable` to `sidebar-narrow-unfoldable`, update sidebar sizes [`1834cec`](https://github.com/coreui/coreui/commit/1834cecb029fe98c9df96c7b2a9390979a896b72)
- refactor: rebuild `.navbar-light` and `.navbar-dark` using CSS Variables [`8318a41`](https://github.com/coreui/coreui/commit/8318a418c67a68e7685aee8ccbff772a1f5985e9)
- refactor: rebuild `.navbar-light` and `.navbar-dark` using CSS Variables [`23a48aa`](https://github.com/coreui/coreui/commit/23a48aaa540b6fb21b679bbdb13ada333dce3660)
- refactor: rename data selectors, and data keys [`215611c`](https://github.com/coreui/coreui/commit/215611c40a233ee7f1b17689ef433c321c1a9105)
- refactor(Avatar): change px to rem [`ac6bd1c`](https://github.com/coreui/coreui/commit/ac6bd1cd2042be33fb525d22caef1fc6afe84efa)
- refactor: consolidated variables in variants [`6e378cc`](https://github.com/coreui/coreui/commit/6e378ccd57e34f3fc1b20280d5e3b5e7282f6b57)
- refactor: remove `c-` prefix [`8e11ef2`](https://github.com/coreui/coreui/commit/8e11ef2132e9bb79bf7d3a47d73c34f2eb3b13cf)
- refactor: rebuild `.dropdown-menu-dark` using CSS Variables [`86b3ca9`](https://github.com/coreui/coreui/commit/86b3ca90615b0fbc18e0c5a916b3ce64e070be7f)
- refactor: rebuild `.dropdown-menu-dark` using CSS Variables [`10a9839`](https://github.com/coreui/coreui/commit/10a98399ddbd1b67c2260802abb3932f4d5e7ca9)
- feat: add font weight medium and semibold; [`1a505f4`](https://github.com/coreui/coreui/commit/1a505f407486c0ec381df7fc786394bc27254ff6)
- refactor: remove `c-` prefix [`75794ca`](https://github.com/coreui/coreui/commit/75794cace6b8436e58eb3303e87ca80a28c91daa)
- refactor: update component to bs5 [`00ccc8c`](https://github.com/coreui/coreui/commit/00ccc8cb59759b964322a9448d2a8067fcb99f81)
- refactor: clean-up [`177dee4`](https://github.com/coreui/coreui/commit/177dee45ffe68451f2fc7a02a0799982719b0960)
- refactor: rebuild `.carousel-dark` using CSS Variables [`0c5081d`](https://github.com/coreui/coreui/commit/0c5081d5e285a0c0b6c23c61ab2e750243a7da89)
- refactor: rebuild `.carousel-dark` using CSS Variables [`81e3ca2`](https://github.com/coreui/coreui/commit/81e3ca2a727faa2da5a5786f8c6535114d02d517)
- refactor: change px to rem in footer, header, and sidebar; reorder transition values in sidebar [`2f159db`](https://github.com/coreui/coreui/commit/2f159db88e4672045dba6174259e30b00780148d)
- refactor: deprecated `.avatar-rounded` and `.avatar-square` [`7d6c71a`](https://github.com/coreui/coreui/commit/7d6c71ae80dbd1210f1506bbf84b1843b5c09944)
- refactor: change `${alert|button|list-group}-colors` to ${alert|button|list-group}-variants` [`7431673`](https://github.com/coreui/coreui/commit/7431673acd58debb1d9a2413cee33d1e6abbd537)
- refactor: remove `c-` prefix and fix icon position [`274a6cc`](https://github.com/coreui/coreui/commit/274a6cca5ac1e532779217d5995e5e423393bb90)
- refactor: change `$footer-height` variable to `$footer-min-height` [`ad129c3`](https://github.com/coreui/coreui/commit/ad129c3bb59d5841b2b892a6444d615c3244bb8d)
- refactor: remove `.focus` class [`8f1c395`](https://github.com/coreui/coreui/commit/8f1c3951f5c5fc941574521a8e5ee9c7631a8e4f)
- refactor: update variables [`c14ed01`](https://github.com/coreui/coreui/commit/c14ed01e06e4883858abfc8c5d1ab32f747b6fe9)
- refactor(header): change `.header-divider` width to 100% of `.header` [`4d8eae2`](https://github.com/coreui/coreui/commit/4d8eae23c5e76ea246cde26066d39861fd0afe70)
- refactor: change `$subheader-height` variable to `$subheader-min-height` [`9ba4faf`](https://github.com/coreui/coreui/commit/9ba4faf581086ce8564e7145816fcca775dadea3)
- refactor: change `$header-height` variable to `$header-min-height` [`31c5d62`](https://github.com/coreui/coreui/commit/31c5d6255bd12f9ba12520b33406b3070a590064)
- refactor: change first container height to match to a minimum height of the header [`147bc58`](https://github.com/coreui/coreui/commit/147bc58341048fa3b6cebe1182bff74b0930df8f)
- refactor: change divider with to 100% of parent [`f6c622d`](https://github.com/coreui/coreui/commit/f6c622d0757c79b1d4c8d1dff0129fb461b0d053)
- refactor: change margins in stacked avatars [`688a54b`](https://github.com/coreui/coreui/commit/688a54b7d23e1d7742912b84bb013585605cf5d2)
- refactor: remove `thead` `border-bottom-color` [`2ba6edd`](https://github.com/coreui/coreui/commit/2ba6edd20904219f88b22c2980b1ce751c33e763)
- refactor: remove `c-` prefix [`878ab64`](https://github.com/coreui/coreui/commit/878ab645390d756f09b775b2706748a2811b810a)
- refactor: add css vars [`7286111`](https://github.com/coreui/coreui/commit/72861110f9f993eae0e29c7e3e2104da3c1af233)
- refactor(polyfill): a file for polyfills [`4d6e41d`](https://github.com/coreui/coreui/commit/4d6e41dea6492f18029f0dd70b118217c02f27d8)
- refactor(plugins): query elements without jquery [`a79b8aa`](https://github.com/coreui/coreui/commit/a79b8aa16ab5fa5c71a91425d8464f0bdcd3fe37)
- refactor(plugins): improve how we query elements [`b1eb3fc`](https://github.com/coreui/coreui/commit/b1eb3fccfa722afc4f7ca0d00eb848353ce8aed8)
- refactor(Modal): add `_isTransitioning` default value [`65dc8c9`](https://github.com/coreui/coreui/commit/65dc8c907048111d7895b64da1207023ff4c9992)
