var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
const grades = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  F: 0
}
for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 91) {
    grades.A++;
  } else if (scores[i] >= 81) {
    grades.B++;
  } else if (scores[i] >= 71) {
    grades.C++;
  } else if (scores[i] >= 61) {
    grades.D++;
  } else {
    grades.F++;
  }
}
console.log("There are", grades.F, "Fs,", grades.D, "Ds,", grades.C, "Cs,", grades.B, "Bs, and", grades.A, "As.");

scores.sort();
console.log("The lowest score is:", scores[0], "& the highest score is:", scores[scores.length - 1]);
