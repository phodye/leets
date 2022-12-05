/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 */

var maxProfit = function(prices) {
  //return a profit- so we'll set to 0 to start
  let profit = 0
  //iterate through prices array- and establish baseline
  for (x = 0; x < prices.length; x++) {
      let startingPrice = prices[x]
      for (y = x + 1; y < prices.length; y++) {
         if (prices[y] - startingPrice > profit) {
             profit = prices[y] - startingPrice
         }
      }
  }
       //inside will iterate through each subsequent day, subtracting initial price from that price
       //if > 0, add to profit array

   // iterate through profit array, if profit is > profit, reset that variable
   //return profit
   return profit
};


//smarter solution
var maxProfit = function(prices) {
  let profit = 0
  let minPrice = prices[0]
  for(let sell = 1; sell < prices.length; sell++) {
      let sellPrice = prices[sell]
      let currentProfit = sellPrice - minPrice
      profit = Math.max(profit, currentProfit)
      if(sellPrice < minPrice) minPrice = sellPrice
  }
   return profit
};