class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let result = []
        let merged = newInterval
        let i = 0

        while (i < intervals.length && intervals[i][1] < merged[0]) {
            result.push(intervals[i])
            i++
        }

        while (i < intervals.length && intervals[i][0] <= merged[1]) {
            merged[0] = Math.min(merged[0], intervals[i][0])
            merged[1] = Math.max(merged[1], intervals[i][1])
            i++
        }

        result.push(merged)

        while (i < intervals.length) {
            result.push(intervals[i])
            i++
        }

        return result
    }
}
