var romanToInt = function(s) {
  let values = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
  let output = 0
  let numerals = s.split('')

  for (x = 0; x < numerals.length; x++) {
      if (numerals[x] === 'I' && numerals[x + 1] !== 'V' && numerals[x + 1] !== 'X') {
          output += values[numerals[x]]
      } else if (numerals[x] === 'I' && numerals[x + 1] === 'V') {
          output += (values[numerals[x + 1]] - values[numerals[x]])
          x++
      } else if (numerals[x] === 'I' && numerals[x + 1] === 'X') {
          output += (values[numerals[x + 1]] - values[numerals[x]])
          x++
      } else if (numerals[x] === 'X' && numerals[x + 1] !== 'L' && numerals[x + 1] !== 'C') {
          output += values[numerals[x]]
      } else if (numerals[x] === 'X' && numerals[x + 1] === 'L') {
          output += (values[numerals[x + 1]] - values[numerals[x]])
          x++
      } else if (numerals[x] === 'X' && numerals[x + 1] === 'C') {
          output += (values[numerals[x + 1]] - values[numerals[x]])
          x++
      } else if (numerals[x] === 'C' && numerals[x + 1] !== 'D' && numerals[x + 1] !== 'M') {
          output += values[numerals[x]]
      } else if (numerals[x] === 'C' && numerals[x + 1] === 'D') {
          output += (values[numerals[x + 1]] - values[numerals[x]])
          x++
      } else if (numerals[x] === 'C' && numerals[x + 1] === 'M') {
          output += (values[numerals[x + 1]] - values[numerals[x]])
          x++
      } else {
          output +=(values[numerals[x]])
      }
  }

  return output
};