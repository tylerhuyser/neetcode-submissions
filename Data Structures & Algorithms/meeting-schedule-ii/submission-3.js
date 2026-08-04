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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (intervals.length === 0) return 0
        let sorted = intervals.sort((a, b) => a.start - b.start)
        let prev = sorted[0]
        let ends = [prev.end]

        for (let i = 1; i < sorted.length; i++) {
            let current = sorted[i]
            console.log(current)

            let earliestAvailableRoom = Math.min(...ends)

            if (earliestAvailableRoom > current.start) {
                ends.push(current.end)
            } else {
                let index = ends.indexOf(earliestAvailableRoom)
                ends[index] = current.end
            }
        }

        return ends.length
    }
}
