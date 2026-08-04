class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        let rows = Array.from({length: 9}, () => new Set())
        let cols = Array.from({length: 9}, () => new Set())
        let boxes = Array.from({length: 9}, () => new Set())

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let currentCell = board[r][c]
                if (currentCell === ".") continue

                let currentBox = Math.floor(r / 3) * 3 + Math.floor(c / 3)

                if (rows[r].has(currentCell) || cols[c].has(currentCell) || boxes[currentBox].has(currentCell)) {
                    return false
                }

                rows[r].add(currentCell)
                cols[c].add(currentCell)
                boxes[currentBox].add(currentCell)
            }
        }

        return true
    }
}
