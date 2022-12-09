/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
*/

var fib = function(n) {
  let fibs = [0, 1]
  while (fibs.length - 1 < n) {
      let next = fibs[fibs.length - 1] + fibs[fibs.length - 2]
      fibs.push(next)
  }
  return fibs[n]
};

//faster

var fib = function(n) {
  if (n === 0 || n === 1) return n;

let first = 0, second = 1;
let sum = first + second;

for (let i = 2; i < n; i++) {
  first = second;
  second = sum;

  sum = first + second;
}

return sum
};