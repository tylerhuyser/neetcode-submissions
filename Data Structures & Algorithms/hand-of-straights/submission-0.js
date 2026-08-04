class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        let counts = {}

        for (const card of hand) {
            counts[card] = (counts[card] || 0) + 1
        }

        let sorted = Object.keys(counts).map(Number).sort((a, b) => a - b)

        console.log(sorted)

        for (let card of sorted) {
            while (counts[card] > 0) {
                for (let i = 0; i < groupSize; i++) {
                    let needed = card + i
                    if (!counts[needed] || counts[needed] === 0){
                    return false
                    }
                    counts[needed]--
                }
            }
        }
        return true
    }
}
