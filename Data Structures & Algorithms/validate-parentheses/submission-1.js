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

        let openBrackets = new Set(Object.keys(brackets))
        let closedBrackets = new Set(Object.values(brackets))

        let parentheses = []

        for (const char of s) {

            if (openBrackets.has(char)) {
                parentheses.push(char)
            } else if (closedBrackets.has(char)) {
                let lastOpen = parentheses[parentheses.length - 1]
                if (
                    char === ")" && lastOpen === "(" ||
                    char === "}" && lastOpen === "{" ||
                    char === "]" && lastOpen === "["
                ) {
                    parentheses.pop()
                } else {
                    return false
                }
            }
        }


        return parentheses.length === 0 ? true : false

    }
}
