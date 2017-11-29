const printToDOM = document.getElementById("printHere");
let end = 0;
let happyNums = [];
let num = 1;

function splitSquareAdd(workingNum) {
  let workingArr = workingNum.toString().split('');
  workingArr = workingArr.map(x => x**2);
  let end = 0;
  for (let i = 0; i < workingArr.length; i++) {
    end += workingArr[i];
  }
  return end;
}

function captureHappyNums(end, idx) {
  for (let i = 0; i < 10; i++) {
    end = splitSquareAdd(end);
    if (end === 1) {
      happyNums.push(num);
      printToDOM.innerHTML += (idx + 1) + " -  " + num + "<br>";
      num++;
      return end;
    }
  }
  num++;
  return end;
}

