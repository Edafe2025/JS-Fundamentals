const num = Number(process.argv[2]);

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

if (!num || num < 0 || isNaN(num)) {
  console.log(1);
} else {
  console.log(factorial(num));
}
