# AWS SDK for JavaScript

## How To Install

The preferred way to install the `jshashmap` for Node.js is to use the
[npm](http://npmjs.org) package manager for Node.js. Simply type the following into a terminal:

```sh
npm install jshashmap
```

## Examples of Use

Version 1 only support 1 function that convert Javascript object into Javascript `Map` class

```javascript
const jshashmap = require("jshashmap");

const foodStocks = {
  apple: 12,
  bread: 20,
  meat: 2,
  vegetable: 35,
};
const hashmap = jshashmap.objToMap(foodStocks);
console.log(hashmap);
// Output:
// Map(4) { 'apple' => 12, 'bread' => 20, 'meat' => 2, 'vegetable' => 35 }
```
