Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

let iterable = [3, 5, 7];
iterable.foo = "hello";

for (let i in iterable) {
  console.log(i);
  console.log(typeof(i))
   // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
   // 모두 string
}

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
  console.log(typeof(i)); // number
}
