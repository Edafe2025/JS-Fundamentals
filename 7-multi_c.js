const x = process.argv[2];

if (!x || isNaN(x) || x <= 0) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  while (i < x) {
    console.log("C is fun");
    i++;
  }
}