
for (let i = 1; i < 10; i++) {
  let n = 1;
  while ((i % n) !== 0) {
    n++;
  }
  console.log("The lowest divisor for", i, "is", n);
}

console.log("Unless you want a more illuminating answer.");
for (var i = 2; i < 10; i++) {
  let n = 2
  while (i % n !== 0) {
    n++;
  }
  console.log("The lowest divisor for", i, "other than 1 is", n);
}
