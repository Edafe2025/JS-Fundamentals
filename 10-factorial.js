const arg = process.argv[2];

if (arg === undefined) {
  console.log("No argument");
} else {
  const num = Number(arg);

  function factorial(n) {
    if (isNaN(n)) {
      return 1;
    }
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }

  console.log(factorial(num));
}