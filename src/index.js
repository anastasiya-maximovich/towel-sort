module.exports = function towelSort (matrix) {
    return matrix && matrix.length > 0 ? matrix.flatMap((acc, elem) => (elem % 2 === 0 ? acc : acc.reverse())) : []
  }
