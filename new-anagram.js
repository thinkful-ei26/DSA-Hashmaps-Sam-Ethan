'use strict';

function anagram(array){
  const obj = {};
  for(let i=0; i < array.length; i++){
    let alphabetizedWord = alphabetize(array[i]);
    // if (array[i] === obj[key]){
    //   obj[key] += array[i];
    // } else {
    // obj[array[i]] = [alphabetizedWord];
    // let newArr = [];
    if (obj[alphabetizedWord]){
      obj[alphabetizedWord] =   [...obj[alphabetizedWord], array[i]] ;
    } else {
      obj[alphabetizedWord] =  [array[i]];
    }
    // }
  }
  return Object.values(obj);
}

function alphabetize(word){
  return word.split('').sort().join('');
  
}

const input = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];

console.log(anagram(input));