# AWS SDK for JavaScript

## How To Install

The preferred way to install the `jshashmap` for Node.js is to use the
[npm](http://npmjs.org) package manager for Node.js. Simply type the following into a terminal:

```sh
npm install jshashmap
```

## Examples of Use

Version 1 only support 2 functions:

- `objtToMap()`: Convert Javascript object into Javascript `Map` class
- `arraytToMap()`: Convert Javascript object into Javascript `Map` class based on index

```javascript
const jshashmap = require("jshashmap");

const foodStocks = {
  apple: 12,
  bread: 20,
  meat: 2,
  vegetable: 35,
};
const hashmap1 = jshashmap.objToMap(foodStocks);
console.log(hashmap1);
// Output:
// Map(4) { 'apple' => 12, 'bread' => 20, 'meat' => 2, 'vegetable' => 35 }

const fruits = ["Apple", "Orange", "Blueberry"];
const hashmap2 = jshashmap.arrayToMap(fruits));
console.log(hashmap2)
// Output:
// Map(3) { 0 => 'Apple', 1 => 'Orange', 2 => 'Blueberry'
```
