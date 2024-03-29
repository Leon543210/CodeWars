/*
    Title: A wolf in sheep's clothing

    Description:

        Wolves have been reintroduced to Great Britain. 
            You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. 
            Fortunately, you are good at spotting them.

        Warn the sheep in front of the wolf that it is about to be eaten. 
            Remember that you are standing at the front of the queue which is at the end of the array:

            [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
             7      6      5      4      3            2      1
        If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". 
            Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N 
            is the sheep's position in the queue.

        Note: there will always be exactly one wolf in the array.

        Examples
            Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
            Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

            Input: ["sheep", "sheep", "wolf"]
            Output: "Pls go away and stop eating my sheep"

    Source: https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/javascript
*/

//function wolf(queue){
    //let sheep;
    // for(let i = 0; i < queue.length; i++){
    //     if(queue[0] == "wolf"){
    //         return "Pls go away and stop eating my sheep"
    //     }

    //     else if(queue[i] == "wolf"){
    //         sheep = i - 1;
    //         return `Oi! Sheep number ${sheep += 1}! You are about to be eaten by a wolf!`
    //     }
    // }

    // for(let i = queue.length - 1; i > 0; i--){
    //     let wolf;
    //     if(queue[queue.length - 1] === "wolf"){
    //             return "Pls go away and stop eating my sheep"
    //         }
    //     else if(queue[i] == "wolf"){
    //         wolf = i + 1;
    //         return `Oi! Sheep number ${wolf}! You are about to be eaten by a wolf!`
    //     }
    // }
    
    /*
        Note: both of the above work accordingly, just fails the tests on codewars
    */

    /*
        Correct/Accepted Solution
        1) Use reverse() on the array, while getting wolf index
        2) Return that var within a ternary statement
    */
//}