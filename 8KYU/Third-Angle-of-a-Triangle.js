/*You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle

https://www.codewars.com/kata/5a023c426975981341000014/javascript
*/
function otherAngle(a, b) {
    let c = 180;
    let result = c - (a + b);
    return result;
  }