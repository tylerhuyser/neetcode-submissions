class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        let sorted = intervals.sort((a , b) => a[1] - b[1])
        console.log(sorted)
        let prev = sorted[0]

        let count = 0

        for (let i = 1; i < sorted.length; i++) {

            let current = sorted[i]
            if (current[0] < prev[1]) {
                count++
            } else {
                prev = current
            }

    
        }

            return count
        
    }
}
