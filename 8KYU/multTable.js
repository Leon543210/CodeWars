function multTable(number){
    let tracker = ''
    for(let i = 1; i <= 10; i++){
        let result = i * number;
        tracker += `${i} * ${number} = ${result}\n`
         
    }return tracker + "\n";
}

//console.log(`${i} * ${number} = ${result}`);