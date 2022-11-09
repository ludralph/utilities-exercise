// add numbers in an array
const sum = (arr) => {
    // const total = 0;
    let total = 0;
    arr.forEach((x) => {
      total += x;
    })
    return total
  }
  
  // concatenate two arrays
  const concat = (arr1, arr2) => {
    return [...arr1, ...arr2]
  }

  
//   using the ES6 syntax of exporting

module.exports = {
    sum,
    concat
 }