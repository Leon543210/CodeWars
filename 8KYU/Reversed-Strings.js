function reverse(str){
    
    let reversedStr = '';
    for(i = str.length - 1; i >= 0; i--){

        reversedStr += str[i];
        
    }
    return reversedStr;
}