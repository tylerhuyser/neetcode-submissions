class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0
        let left = 0
        let right = heights.length - 1

        while (left < right) {
            let minHeight = Math.min(heights[left], heights[right])
            let width = Math.abs(right - left)
            let currentArea = minHeight * width
            max = Math.max(max, currentArea)
            if (heights[left] < heights[right]) left++
            else right--
        }

        return max
    }
}
