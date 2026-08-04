class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1
        let right = Math.max(...piles)

        function calculateHours(piles, speed) {
            let totalHours = 0
            for (let pile of piles) {
                totalHours += Math.ceil(pile / speed)
            }
            return totalHours
        }

        while (left < right) {
            let mid = Math.floor((left + right) / 2)
            let hoursNeeded = calculateHours(piles, mid)

            if (hoursNeeded <= h ) {
                right = mid
            } else {
                left = mid + 1
            }
        }

        return left

    }
}
