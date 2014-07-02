# {%= name %} {%= badge("fury") %}

> {%= description %}

## Install
{%= include("install") %}

## Usage

```js
var lineNumber = require('{%= name %}');
var fixture = fs.readFileSync('LICENSE-MIT', 'utf8');
var re = /Jon[^,]+/g;
console.log(lineNumber(fixture, re));
//=> results in:
// [
//   {
//     "line": "Copyright (c) 2014 Jon Schlinkert, contributors.",
//     "number": 1,
//     "match": "Jon Schlinkert"
//   }
// ];
```


## Author
{%= include("author") %}

## License
{%= copyright() %}
{%= license() %}

***

{%= include("footer") %}