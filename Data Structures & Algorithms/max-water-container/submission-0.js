class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0

        // height = minHeight * distance between indexes

        for (let i = 0; i < heights.length; i++) {
            let left = heights[i]
            for (let j = i + 1; j < heights.length; j++) {
                let right = heights[j]
                max = Math.max(Math.min(left, right) * Math.abs(i - j), max)
            }
        }

        return max
    }
}
