const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//seperate a sentence into individual words
const seperateSentence = sentence => sentence.split(' ');

//capitalize the first letter in each word
function capitalizeFirstLetter(str){
  return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
}

//combine steps into one function
function capSentence(sentence){
  const newSentence = seperateSentence(sentence).map(word => capitalizeFirstLetter(word));
  return newSentence.join(' ');
}

//return new capitalized array with .map()
const titleCased = () => tutorials.map(tutorial => capSentence(tutorial));