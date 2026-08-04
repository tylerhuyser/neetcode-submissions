class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        let sorted = intervals.sort((a, b) => (a[1] - a[0] + 1) - (b[1] - b[0] + 1))
        console.log(sorted)

        let output = []

        for (const query of queries) {
            console.log(query)
            let value = -1
            for (const interval of sorted) {
                if (interval[0] <= query && query <= interval[1]) {
                    value = interval[1] - interval[0] + 1
                    break
                } 
            } 
            output.push(value)
        }

        return output
    }
}
