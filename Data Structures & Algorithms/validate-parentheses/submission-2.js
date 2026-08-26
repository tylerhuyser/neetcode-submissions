class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        
        let brackets = {
            "(": ")",
            "{": "}",
            "[": "]"
        }

        let openBrackets = Object.keys(brackets)
        let closedBrackets = Object.values(brackets)

        let parentheses = []

        for (const char of s) {

            if (openBrackets.includes(char)) parentheses.push(char)
            else {
                let finalBracket = parentheses[parentheses.length - 1]
                if (
                    char === ")" && finalBracket === "(" ||
                    char === "}" && finalBracket === "{" ||
                    char === "]" && finalBracket === "["
                ) {
                    parentheses.pop()
                } else return false
            }

        }


        return parentheses.length === 0 ? true : false

        
        
    }
}
