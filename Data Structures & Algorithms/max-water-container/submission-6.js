class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0
        let left = 0
        let right = heights.length - 1

        while (left < right) {
            let minHeight = Math.min(heights[left], heights[right])
            let width = right - left
            let currentArea = minHeight * width
            maxArea = Math.max(maxArea, currentArea)
            if (heights[left] < heights[right]) left++
            else right--
        }

        return maxArea
    }
}
