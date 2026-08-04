class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let index = digits.length - 1
        let carry = 0

        while (index >= 0) {
            let currentVal = digits[index]
            if (currentVal < 9) {
                digits[index] = currentVal + 1
                carry = 0
                return digits
            } else {
                digits[index] = 0
                carry = 1
            }
            index--
        }

        if (carry > 0) {
            digits.unshift(carry)
        }

        return digits
    }
}
