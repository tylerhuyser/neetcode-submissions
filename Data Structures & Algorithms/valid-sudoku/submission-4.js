class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({length: 9}, () => new Set())
        let cols = Array.from({length: 9}, () => new Set())
        let boxes = Array.from({length: 9}, () => new Set())

        for (let r = 0; r < rows.length; r++) {
            for (let c = 0; c < cols.length; c++) {
                let currentCell = board[r][c]
                if (currentCell === ".") continue
                let currentBox = Math.floor(r / 3) * 3 + Math.floor(c / 3)
                if (!rows[r].has(currentCell) && !cols[c].has(currentCell) && !boxes[currentBox].has(currentCell)) {
                    rows[r].add(currentCell)
                    cols[c].add(currentCell)
                    boxes[currentBox].add(currentCell)
                } else {
                    return false
                }
            }
        }

        return true
    }
}
