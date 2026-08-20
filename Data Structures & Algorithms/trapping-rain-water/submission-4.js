class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let totalWater = 0

        let prefix = new Array(height.length).fill(0)
        let suffix = new Array(height.length).fill(0)

        for (let i = 1; i < height.length; i++) {
            prefix[i] = Math.max(prefix[i - 1], height[i - 1])
        }

        for (let i = height.length - 2; i >= 0; i--) {
            suffix[i] = Math.max(suffix[i + 1], height[i + 1])
        }

        for (let i = 0; i < height.length; i++) {
            totalWater = totalWater + Math.max(Math.min(prefix[i], suffix[i]) - height[i], 0)
        }

        return totalWater
    }
}
