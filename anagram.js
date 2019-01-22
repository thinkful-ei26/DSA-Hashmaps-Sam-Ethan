'use strict';
//imput: array of strings
//output: array of arrays with grouped strings
function anagram(array){
//map each anagram in an object
  const arrayOfMaps = [];
  const arrayOfStrings = []
  for (let i = 0; i < array.length; i++ ){

    let anagramHashMap = new Map();
    for (let k= 0; k < array[i].length; k++){
      if (anagramHashMap.has(array[i][k])){
        let newCount = anagramHashMap[i].get(array[i][k]) + 1;
        anagramHashMap.set(array[i][k], newCount);
      } else {
        anagramHashMap.set(array[i][k], 1);
      }
      
    }      
    arrayOfMaps.push(anagramHashMap);
    if(i === 0 && anagramHashMap){
      console.log(anagramHashMap.keys());
    } else {
      let newArray = [];
      newArray.push(array[i]);
      arrayOfStrings.push(newArray);
      arrayOfMaps.push(anagramHashMap);
    }
  }

  console.log(arrayOfMaps);
  return arrayOfStrings;

}
// output = [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]
const input = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];

console.log(anagram(input));
// console.log(anagramHashMap);