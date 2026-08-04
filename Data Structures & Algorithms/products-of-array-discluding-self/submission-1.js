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

        for (let i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1]
        }

        for (let i = nums.length - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i + 1]
        }

        for (let i = 0; i < nums.length; i++) {
            output[i] = prefix[i] * suffix[i]
        }

        return output
         
    }
}
