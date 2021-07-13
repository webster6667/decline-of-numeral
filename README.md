<p align="center" style="text-align:center">
    <img src="./illustration.svg" alt="illustration" width="100"/>
</p>

# decline-of-numeral

> description

[![npm version](https://badge.fury.io/js/decline-of-numeral.svg)](https://www.npmjs.com/package/decline-of-numeral)
[![](https://data.jsdelivr.com/v1/package/npm/decline-of-numeral/badge)](https://www.jsdelivr.com/package/npm/decline-of-numeral)


## Table of Contents

- [Quick start](#quick-start)
  - [Install](#install)
  - [Initialization](#initialization)
- [Methods](#methods)

## Quick start

### Install

We support all platforms.

#### npm

For module bundlers such as Webpack or Browserify.

```shell
npm i decline-of-numeral
```

#### Include with &lt;script&gt;

1. <a href="https://cdn.jsdelivr.net/npm/decline-of-numeral/dist/lib/decline-of-numeral.js" target="_blank">Download lib</a>
2. Add script to html

```html
<script src="decline-of-numeral.js"></script>
```

##### CDN

Recommended for learning purposes, you can use the latest version:

```html
<script src="https://cdn.jsdelivr.net/npm/decline-of-numeral/dist/lib/decline-of-numeral.js"></script>
```

Recommended for production for avoiding unexpected breakage from newer versions:

```html
<script src="https://cdn.jsdelivr.net/npm/decline-of-numeral@0.0.0/dist/lib/decline-of-numeral.js"></script>
```

### Initialization

#### ES6

decline-of-numeral as an ES6 module.

```js
import { declineOfNumeral } from 'decline-of-numeral';

declineOfNumeral(1, ['минута', 'минуты', 'минут'])

```

#### Node

decline-of-numeral as a Node.js module

```js
const { declineOfNumeral } = require('decline-of-numeral');

declineOfNumeral(1, ['минута', 'минуты', 'минут'])

```

#### Browser

Exports a global variable called `decliner`. Use it like this

Connect to html file ```<script src="https://cdn.jsdelivr.net/npm/decline-of-numeral/dist/lib/decline-of-numeral.js" ></script>```

```html
<script>
    decliner.declineOfNumeral(1, ['минута', 'минуты', 'минут'])
</script>
```

#### AMD

decline-of-numeral as an AMD module. Use with Require.js, System.js, and so on.

1. <a href="https://cdn.jsdelivr.net/npm/decline-of-numeral/dist/lib/decline-of-numeral.js" target="_blank">Download lib</a>
2. Connect to your module loader

```js
requirejs(['decline-of-numeral'], function(decliner) {
    decliner.declineOfNumeral(1, ['минута', 'минуты', 'минут'])
});
```

## Methods


## Author

webster6667
