/*
  Write some code that declares two variables, character and timesToRepeact.
  Using a loop, repeat that character that many times and then console.log it.
  Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log
  'fffff'
*/

let answer = "";
const character = "f";
let timesToRepeat = 11;
for (let i = 1; i < timesToRepeat; i++) {
  answer += character;
  console.log(answer);
}