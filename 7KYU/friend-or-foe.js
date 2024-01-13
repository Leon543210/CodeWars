
/*
    Title: Friend or Foe?

    Description: 

        Make a program that filters a list of strings and returns a list with only your friends name in it.

        If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

        Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

        i.e. friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
        Note: keep the original order of the names in the output.

    Source: https://www.codewars.com/kata/55b42574ff091733d900002f
*/

function friendList(friend){
    let str = []
    for(let i = 0; i < friend.length; i++){
        if(friend[i].length <= 4){
            str.push(friend[i])
        }
    
    }
    return str
}

//Alternative Solution
//return friends.filter(n => n.length === 4)