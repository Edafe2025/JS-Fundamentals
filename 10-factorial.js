const arg = process.argv[2];

if (!arg || isNaN(Number(arg))) {
  console.log("No argument");
  process.exit(0);
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const num = Number(arg);
console.log(factorial(num));
