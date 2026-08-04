class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        console.log(board)

        let rows = Array.from({length: 9}, () => new Set())
        let columns = Array.from ({length: 9}, () => new Set())
        let boxes = Array.from({length: 9}, () => new Set())

        for (let row = 0; row < board.length; row++) {
            for (let column = 0; column < 9; column++) {
                let val = board[row][column]
                if (val === ".") continue

                let boxIndex = Math.floor(row / 3) * 3 + Math.floor(column / 3)

                if (rows[row].has(val) || columns[column].has(val) || boxes[boxIndex].has(val)) return false

                rows[row].add(val)
                columns[column].add(val)
                boxes[boxIndex].add(val)
            }
        }

        return true
    }

}
