let i = 0;
let j = 0;
let k = 0;
while (i <= 10) {
  j += i;
  k += i ** 2;
  i++;
}
j **= 2;
document.write("The difference between summing the squares of 1 to 10 & squaring the sums of 1 to 10 is: ", (k - j))
