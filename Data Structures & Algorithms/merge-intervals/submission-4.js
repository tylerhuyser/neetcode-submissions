class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let sorted = intervals.sort((a, b) => a[0] - b[0])
        let result = []
        let merged = sorted[0]
        console.log(merged)

        for (let i = 0; i < sorted.length; i++) {
            let current = sorted[i]

            if (merged[1] < current[0]) {
                result.push(merged)
                merged = current
            } else if (merged[1] >= current[0]) {
                merged = [Math.min(merged[0], current[0]), Math.max(merged[1], current[1])]
            }
        }

        if (merged.length === 2) result.push(merged)

        return result
            // If the previous interval does not overlap - push. If it does overlap -- merge them and save it as prev
        
    }
}
