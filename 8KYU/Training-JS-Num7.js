/*
    Title: Training JS #7: if..else and ternary operator

    Description:

        In JavaScript, if..else is the most basic conditional statement, it consists 
            of three parts:condition, statement1, statement2, like this:

            if (condition) statementa
            else           statementb

        It means that if the condition is true, then execute the statementa, otherwise execute the statementb. 
            If the statementa or statementb are more than one line, you need to add { and } at the head and tail 
            of statements in JS, to keep the same indentation on Python and to put an end in Ruby where it 
            indeed ends.

        For example, if we want to judge whether a number is odd or even, we can write code like this:

        function oddEven(n){
              if (n % 2 == 1) return "odd number";
              else            return "even number";
            }
        If there is more than one condition to judge, we can use the compound if...else statement. For example:

        function oldYoung(age){
          if (age < 16)      return "children"
          else if (age < 50) return "young man"   //use "else if" if needed
          else               return "old man"
        }

        This function returns a different value depending on the parameter age.

        Looks very complicated? Well, JS and Ruby also support the ternary operator and Python has something similar too:

        condition ? statementa : statementb
        Condition and statement separated by "?", different statement separated by ":" in both Ruby and JS; 
            in Python you put the condition in the middle of two alternatives. The two examples above can be 
            simplified with ternary operator:

            function oddEven(n){
              return n%2 == 1 ? "odd number" : "even number";
            }
            function oldYoung(age){
              return age < 16 ? "children" : age < 50 ? "young man" : "old man";
            }
        Task:
            Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter: 
            n, n is the number of hotdogs a customer will buy, different numbers have different prices 
            (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

            number of hotdogs	price per unit (cents)
                n < 5	100
                n >= 5 and n < 10	95
                n >= 10	90
            You can use if..else or ternary operator to complete it.

        When you have finished the work, click "Run Tests" to see if your code is working properly.

        In the end, click "Submit" to submit your code and pass this kata.

    Source: https://www.codewars.com/kata/57202aefe8d6c514300001fd/javascript
*/

function hotdogsSale(h){
    if(h < 5){
      return h * 100
    }
    else if(h >= 5 && h < 10){
      return h * 95
    }
    else{
      return h * 90
    }
  }

  // Additional Notes:
  // Multiple ternaries can be used in the same statement line, as followed: return h*(h<5?100:n<10?95:90)
  // Detailed explanation: h multiples (content); h<5 is the condition and 100 is on true side, whereas n<10?95:90 is 
  //    on false side, but then that is also broken down to n<10 being the condition, 95 on true and 90 on false