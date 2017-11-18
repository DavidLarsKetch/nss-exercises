// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let sentenceToPrint = '';

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
  for (let i = 0; i < sentence.length; i++){
    sentenceToPrint += sentence[i] + " ";
    console.log(sentenceToPrint);
  }
}

// Invoke the function and pass in the array
addExcitement(sentence);
