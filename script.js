fibArr = [0, 1];
for (let i = fibArr[1]; i < 500; i) {
  i = fibArr[0] + fibArr[1];
  fibArr[0] = fibArr[1];
  fibArr[1] = i;
  document.write(fibArr[0], "<br>");
}
