// 把路径转为正则的库
const { pathToRegexp } = require('path-to-regexp');
// console.log(pathToRegexp)
/**
 * {
    parse: [Function: parse],
    compile: [Function: compile],
    tokensToFunction: [Function: tokensToFunction],
    match: [Function: match],
    regexpToFunction: [Function: regexpToFunction],
    tokensToRegexp: [Function: tokensToRegexp],
    pathToRegexp: [Function: pathToRegexp]
  }
 */
/^\/home[\/#\?]?$/i
var re = pathToRegexp('/home'); // /^\/home[\/#\?]?$/i
console.log(re);
let reg = /^\/home[\/#\?]?$/i;
let url = '/home';
let result = url.match(re);
console.log(result)