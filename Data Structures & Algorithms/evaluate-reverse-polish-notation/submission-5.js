class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []

        for (const token of tokens) {
            if (!isNaN(token)) {
                stack.push(parseInt(token))
            } else {
                let second = stack.pop()
                let first = stack.pop()
                if (token === "+") stack.push(first + second)
                else if (token === "-") stack.push(first - second)
                else if (token === "*") stack.push(first * second)
                else if (token === "/") stack.push(Math.trunc(first / second))
            }


        }

        return stack[0]
    }
}
