let foo = string_of_int;

let n = 42;

let bar = foo => {
  let n = 23;
  foo(n);
};

Js.log(bar(foo));
