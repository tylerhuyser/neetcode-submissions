class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        let result = 0

        for (let i = 0; i < tokens.length; i++) {
            let currentVal = tokens[i]
            if (!isNaN(currentVal)) {
                stack.push(parseInt(tokens[i]))
            } else {
                let second = stack.pop()
                let first = stack.pop()
                if (currentVal === "+") {
                    stack.push(first + second)
                } else if (currentVal === "-") {
                    stack.push(first - second)
                } else if (currentVal === "*") {
                    stack.push(first * second)
                } else if (currentVal === "/") {
                    stack.push(Math.trunc(first / second))
                }
            }

            console.log(stack)
        }

        return stack[0]
    }
}
