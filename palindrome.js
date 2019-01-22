'use strict';

function palindrome(string){
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  //we take in a string
  //get and hash each letter where key is letter and value is count
  let palindromeHashMap = new Map();
  for(let i=0; i < string.length; i++){
    // console.log(palindromeHashMap);
    if (palindromeHashMap.has(string[i])){
    //   console.log(palindromeHashMap.a.value);
    //   console.log(palindromeHashMap.string[i]);
    //   console.log('>>',palindromeHashMap.get(string[i]));
      let newCount = palindromeHashMap.get(string[i]) + 1;
      palindromeHashMap.set(string[i], newCount);
      //   palindromeHashMap.set(string[i])++
    } else {
      // console.log(string[i]);
      palindromeHashMap.set(string[i], 1);
    }
  }
  console.log(palindromeHashMap);
  console.log(palindromeHashMap.values());
  console.log(typeof(palindromeHashMap.values()));
  
  let counter = 0;

  // function oddCounter(value, key, map){
  //   if (value % 2 !== 0){
  //     // console.log('counter ran');
  //     counter++;
  //   }
  // }

  // new Map (palindromeHashMap).forEach(oddCounter);
  palindromeHashMap.forEach(key => {
    if (key % 2 !== 0){
      console.log(key);
      counter++;
    }
  });

  console.log(counter);

  if (counter < 2){
    return true;
  }
  return false;

  
  // if(palindromeHashMap)
//   console.log(palindromeHashMap.entries);
//if letter exists in map, increment count, otherwise create new KV pair
//once all values are hashed, if more than one value is odd, then return false
//else return true
}

console.log(palindrome('damadfef'));
//input will be a string
//output is boolean

