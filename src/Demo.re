let foo = string_of_int;

let bar = foo => foo(23);

Js.log(bar(foo));
