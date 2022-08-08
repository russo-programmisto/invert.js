<p align="center">
    <a href="https://nodejs.org">
        <img src="https://img.shields.io/badge/Created for-Node.js-teal.svg?style=flat">
    </a>
    <a href="https://www.typescriptlang.org">
        <img src="https://img.shields.io/badge/Written in-TypeScript-purple.svg?style=flat">
    </a>
    <a href="https://tldrlegal.com/license/mit-license">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat">
    </a>
</p>

## At a Glance

`invert.js` makes it super easy to switch your website from light color scheme to dark and back.

## How to Get Started

Type in Terminal:

`npm install --save @russo-programmisto/invert`

or, if you prefer `yarn` over `npm`, type:

`yarn add @russo-programmisto/invert`

## Requirements

TypeScript.

## Usage

Import library:

```typescript
import { invert } from "@russo-programmisto/invert"
```

Then simply call:

```typescript
invert({
    defaultColorScheme: "light",
    watchForSchemeChange: true
})
```

## License

`invert.js` is available under the MIT license. See the [LICENSE](./LICENSE) file for more info.
