# esayemm-styles

Generic styles and helpers meant to be used with css-modules.

## Installation

```
npm i --save esayemm-styles
```

## Usage

```js
// entry file
import 'esayemm-styles/index.scss'
```

Use helpers

```css
import 'esayemm-styles/shared.scss'

.foo { composes: flex-row; }
```