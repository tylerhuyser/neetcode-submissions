class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // 1.) Sort the Array
        let sorted = nums.sort((a, b) => a - b)
        console.log(sorted)

        // 2.) Create an array to store solutions.
        let solutions = []

        // 3. Iterate over each number in the array
        for (let i = 0; i < nums.length; i++) {
            let currentNum = nums[i]
            // console.log(`Current Num: ${currentNum}`)

            // 3.a. Guard Against Duplicate Solutions -- if the next value to check matches the previous, move on.
            if (i > 0 && currentNum === nums[i - 1]) continue

            // 4.A Define TWO pointers --- left index as i + 1 and right index as the FINAL INDEX of the array
            let left = i + 1
            let right = nums.length - 1

            // 4b. INITIATE A TWO-POINTER WHILE LOOP
            while (left < right) {
                let leftVal = nums[left]
                // console.log(`Left Val: ${leftVal}`)
                let rightVal = nums[right]
                // console.log(`Right Val: ${rightVal}`)
                let currentSum = currentNum + leftVal + rightVal
                // console.log(`CurrentSum: ${currentSum}`)

                // 4c. If the current Sum = 0, push the solution and increment until a new value is found.
                if (currentSum === 0) {
                    solutions.push([currentNum, leftVal, rightVal])
                    left++
                    right--
                    while (left < right && nums[left] === leftVal) left++
                    while (left < right && nums[right] === rightVal) right--
                }
                // 4d. If the value is too small, make it bigger by moving the Left pointer
                else if (currentSum < 0) left++
                // 4e. If the value is too large, make it smaller by incrementing the right pointer.
                else if (currentSum > 0) right--
            }
        }

        return solutions
    }
}
