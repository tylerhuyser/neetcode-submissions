class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        
        let prefix = new Array(height.length).fill(0)
        let suffix = new Array(height.length).fill(0)
        let output = new Array(height.length).fill(0)

        for (let i = 1; i < height.length; i++) {
            prefix[i] = Math.max(prefix[i - 1], height[i - 1])
        }

        for (let i = height.length - 2; i >= 0; i--) {
            suffix[i] = Math.max(suffix[i + 1], height[i + 1])
        }

        return height.reduce((acc, val, i) => {
            return acc + Math.max(Math.min(prefix[i], suffix[i]) - val, 0)
        }, 0)

    }

}
