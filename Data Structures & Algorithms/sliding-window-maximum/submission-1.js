class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {

        // **O(n*K) solution**

        // let max = []

        // for (let i = 0; i < nums.length - k + 1; i++) {
        //     max[i] = Math.max(...nums.slice(i, i + k))
        // }

        // console.log(max)
        // return max

        // **O(n) Solution**

        let result = []
        let deque = []
        let left = 0

        for (let right = 0; right < nums.length; right++) {
            while(deque.length && nums[deque[deque.length - 1]] < nums[right]) {
                deque.pop()
            }
            deque.push(right)

            if (deque[0] < left) {
                deque.shift()
            }

            if (right >= k - 1) {
                result.push(nums[deque[0]]) 
                left++
            }
        }

        return result
    }
}
