class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let prefix = new Array(nums.length).fill(1)
        let suffix = new Array(nums.length).fill(1)
        let output = new Array(nums.length).fill(1)
        // console.log(array)

        // 1. Loop and multiply the previous Prefix values (left to right) by the previous Nums value
        for (let i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1]
        }

        // 2. Loops the and multiply the previous Suffix value (right to left) by the previous num value
        for (let i = nums.length - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i + 1]
        }

        // 3. Loop and multiply the current index values together.
        for (let i = 0; i < nums.length; i++) {
            output[i] = prefix[i] * suffix[i]
        }

        return output
         
    }
}
