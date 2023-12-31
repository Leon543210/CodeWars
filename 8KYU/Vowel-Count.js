function getCount(str) {
  
    // let count = 0;
    
    for(let i = 0; i < str.length; i++){
      if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
        //console.log(i
        return 'works'
      }
      else{
        return 'not working'
      }
    }
  }

  //use split or .match with var array