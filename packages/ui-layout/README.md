---
category: packages
---

## ui-layout

[![npm][npm]][npm-url]
[![build-status][build-status]][build-status-url]
[![MIT License][license-badge]][LICENSE]
[![Code of Conduct][coc-badge]][coc]


### Installation

```sh
yarn add @instructure/ui-layout
```
### Usage

```js
import React from 'react'
import { DrawerLayout } from '@instructure/ui-layout'

const MyLayout = () => {
  return (
    <DrawerLayout>
      <DrawerLayout.Tray>Hello from layout tray</DrawerLayout.Tray>
      <DrawerLayout.Content>Hello from layout content</DrawerLayout.Content>
    </DrawerLayout>
  )
}
```

### Components
The `ui-layout` package contains the following components:
- [ContextView](#ContextView)
- [DrawerLayout](#DrawerLayout)
- [Flex](#Flex)
- [Grid](#Grid)
- [Media](#Media)
- [Position](#Position)
- [View](#View)

### Utilities
The `ui-layout` package contains the following utilities:
- [calculateElementPosition](#calculateElementPosition)
- [addElementQueryMatchListener](#addElementQueryMatchListener)
- [addMediaQueryMatchListener](#addMediaQueryMatchListener)

### Contribute

See the [contributing guidelines](#contributing) for details.

### License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/@instructure/ui-layout.svg
[npm-url]: https://npmjs.com/package/@instructure/ui-layout

[build-status]: https://travis-ci.org/instructure/instructure-ui.svg?branch=master
[build-status-url]: https://travis-ci.org/instructure/instructure-ui "Travis CI"

[license-badge]: https://img.shields.io/npm/l/instructure-ui.svg?style=flat-square
[license]: https://github.com/instructure/instructure-ui/blob/master/LICENSE

[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/instructure/instructure-ui/blob/master/CODE_OF_CONDUCT.md
