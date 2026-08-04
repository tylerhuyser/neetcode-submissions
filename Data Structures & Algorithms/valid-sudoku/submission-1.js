class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({length: 9}, () => new Set())
        let columns = Array.from({length: 9}, () => new Set())
        let boxes = Array.from({length: 9}, () => new Set())

        for (let i = 0; i < 9; i++) {

            let currentRow = board[i]

            for (let j = 0; j < 9;  j++) {

                let currentCell= currentRow[j]

                console.log(currentCell)

                if (currentCell === ".") continue

                let currentBox = Math.floor(i / 3) * 3 + Math.floor(j / 3)

                if (rows[i].has(currentCell) || columns[j].has(currentCell) || boxes[currentBox].has(currentCell)) {
                    return false
                }

                rows[i].add(currentCell)
                columns[j].add(currentCell)
                boxes[currentBox].add(currentCell)
            }
        }

        return true
    }
}
