var runningSum = function(nums) {
  let sums = []
  for (x = 0; x < nums.length; x++) {
      let currentSum = 0
      for (y = 0; y <= x; y++) {
          currentSum += nums[y]
      }
      sums.push(currentSum)
  }
  return sums
};