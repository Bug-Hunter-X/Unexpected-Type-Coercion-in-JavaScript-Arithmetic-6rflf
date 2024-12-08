function foo(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // or throw an error
  }
  return a + b;
}

console.log(foo(1, '2')); // Output: NaN

function bar(a, b) {
  return a + b;
}

console.log(bar(1, 2)); // Output: 3