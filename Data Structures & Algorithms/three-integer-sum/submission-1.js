class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sorted = nums.sort((a, b) => a - b)
        console.log(sorted)

        let solutions = []

        for (let i = 0; i < nums.length; i++) {
            let currentNum = nums[i]
            // console.log(`Current Num: ${currentNum}`)

            if (i > 0 && currentNum === nums[i - 1]) continue

            let left = i + 1
            let right = nums.length - 1

            while (left < right) {
                let leftVal = nums[left]
                // console.log(`Left Val: ${leftVal}`)
                let rightVal = nums[right]
                // console.log(`Right Val: ${rightVal}`)
                let currentSum = currentNum + leftVal + rightVal
                // console.log(`CurrentSum: ${currentSum}`)

                if (currentSum === 0) {
                    solutions.push([currentNum, leftVal, rightVal])
                    left++
                    right--
                    while (left < right && nums[left] === leftVal) left++
                    while (left < right && nums[right] === rightVal) right--
                }
                else if (currentSum < 0) left++
                else if (currentSum > 0) right--
            }
        }

        return solutions
    }
}
