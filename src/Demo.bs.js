// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");

function foo(prim) {
  return String(prim);
}

function bar(foo) {
  return Curry._1(foo, 23);
}

console.log(String(23));

var n = 42;

exports.foo = foo;
exports.n = n;
exports.bar = bar;
/*  Not a pure module */
