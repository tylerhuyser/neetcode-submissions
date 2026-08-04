class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let bank = []

        for (let i = 0; i < s.length; i++) {
            if (
                s[i] === "(" ||
                s[i] === "{" ||
                s[i] === "["
            ) {
                bank.push(s[i])
            } else if (
                (s[i] === ")" && bank[bank.length - 1] === "(" ) ||
                (s[i] === "}" && bank[bank.length - 1] === "{") ||
                (s[i] === "]" && bank[bank.length - 1] === "[")
            ) {
                bank.pop()
            } else {
                return false
            }

            console.log(bank)
        }

        return bank.length === 0
    }
}
