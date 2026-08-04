class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let initialNumber = n
        let digits = initialNumber.toString().split("")
        let pastSums = []

        while (true) {
            let currentSum = 0

            for (let i = 0; i < digits.length; i++) {
                let currentVal = parseInt(digits[i])
                currentSum += currentVal ** 2
            }
            
            if (currentSum === 1) return true
            if (pastSums.includes(currentSum)) {
                return false
            } else {
                pastSums.push(currentSum)
                digits = currentSum.toString().split("")
            }
        }

        return true

    //     console.log(n)
    //     let numbers = []

    //     let digits = n.toString().split("")
    //     console.log(number)

    //     let sum = 0

    //     for (let i = 0; i < digits.length; i++) {
    //         let current = nums[i]
    //         console.log(current)
    //         sum += current ** 2

    //         if (i === digits.length - 1 && sum === 1) {
    //             return true
    //         } else if (i === digits.length && numbers.includes(sum)) {
    //             return false
    //         }
    //         else if (i === digits.length - 1) {
    //             numbers.push(sum)
    //             sum = 0
    //         }
    //     }
    // }
    }
}
