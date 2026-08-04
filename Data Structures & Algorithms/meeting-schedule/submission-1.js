/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        let sorted = intervals.sort((a, b) => a.start - b.start)
        console.log(sorted)
        let prev = sorted[0]

        console.log(prev)

        for (let i = 1; i < sorted.length; i++) {
            let current = sorted[i]
            console.log(current.start)
            console.log(prev.end)

            if (current.start < prev.end) {
                return false
            } else {
                prev = current
            }
        }

        return true

    }
}
