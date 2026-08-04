class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let max = 0
        let stack = []

        for (let i = 0; i < heights.length; i++) {
            while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
                let heightIndex = stack.pop()
                let width = stack.length > 0 ? i - stack[stack.length - 1] - 1 : i;
                max = Math.max(max, heights[heightIndex] * width )
            }

            stack.push(i)

        }

    while (stack.length > 0) {
        let heightIndex = stack.pop()
        let width = stack.length > 0 ? heights.length - stack[stack.length - 1] - 1 : heights.length
        max = Math.max(max, heights[heightIndex] * width)
    }

        return max
    
    }
}
