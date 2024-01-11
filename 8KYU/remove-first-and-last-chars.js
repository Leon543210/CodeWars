function removeChar(str){
     
    // let first = str[0];
    // let last = str.length - 1;
    // let last = str.shift()
    // let first = str.pop();
    // return last, first;
    
    
    return str.shift()
  }

console.log(removeChar("eloquent"));


/* Correct Solutions

1 - return str.slice(1, -1)

2 - return str.substring(1, str.length - 1)

3 - str1 = str.split(''); str1.shift(); str1.pop(); return str1.join('');


*/