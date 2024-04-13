/*
    Title: Correct the mistakes of the character recognition software

    Description:

        Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

        When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

        Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

            S is misinterpreted as 5
            O is misinterpreted as 0
            I is misinterpreted as 1
        The test cases contain numbers only by mistake.

    Source: https://www.codewars.com/kata/577bd026df78c19bca0002c0/javascript
*/
function correct(string)
{
	string = string.split('')
  for(let i = 0; i < string.length; i++)
  {
    if(string[i] == '5'){
      string[i] = 'S'
    }
    else if(string[i] == '0'){
      string[i] = 'O'
    }
    else if(string[i] == '1'){
      string[i] = 'I'
    }
  }
  string = string.join('')
  return string
}