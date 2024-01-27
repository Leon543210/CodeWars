/*
    Title: Grasshopper - Terminal game combat function

    Description: Create a combat function that takes the player's current health and the amount of damage recieved, 
        and returns the player's new health. 
    Health can't be less than 0.

    Source: https://www.codewars.com/kata/586c1cf4b98de0399300001d/javascript
*/

function combat(health, damage){
    health = health - damage;
    // Solution One
    // if(health < 0){
    //     health = 0;
    //     return /*"Health cannot go lower as it is: " + */ health;
    // }
    // else{
    //     return health;
    // }
    
    //Solution Two
    return health < 0 ? health = 0 : health
} 