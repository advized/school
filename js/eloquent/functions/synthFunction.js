function makeAddFunc(param) {
  function add(value) {
    return value + param;
  }
  return add;
}

var add2 = makeAddFunc(2);

var add5 = makeAddFunc(5);

console.log(add2(10));
console.log(add5(10));
