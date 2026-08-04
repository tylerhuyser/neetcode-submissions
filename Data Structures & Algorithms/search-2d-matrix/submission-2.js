class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let row = matrix.length - 1
        let col = 0

        while (row >= 0 && col < matrix[0].length) {
            let currentVal = matrix[row][col]

            if (currentVal === target) {
                return true
            } else if (currentVal > target) {
                row--
            } else {
                col++
            }
        }

        return false
    }

}
