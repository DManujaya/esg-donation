# esg-donation

[![npm (scoped)](https://img.shields.io/npm/v/@bamblehorse/tiny.svg)](https://www.npmjs.com/package/@bamblehorse/tiny)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@bamblehorse/tiny.svg)](https://www.npmjs.com/package/@bamblehorse/tiny)

Removes all spaces from a string.

## Install

```
$ npm install esg-donation
```

## Usage

```js
const tiny = require("esg-donation");
or;
import tiny from "esg-donation";

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
