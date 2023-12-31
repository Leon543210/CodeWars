function remove (str){
    for(let i = 0; i < str.length; i++){
        console.log(str[i]);
    }
}

/*
Possible solutions 
-Use .replace(/!$/, '')
- Use .slice with .charAt
    Example: str.charAt(str.length - 1) === "!" ? str.slice(0, str.length - 1) : str
- if(str[str.length - 1].includes("!")) {
        str.pop()
    }
-


*/