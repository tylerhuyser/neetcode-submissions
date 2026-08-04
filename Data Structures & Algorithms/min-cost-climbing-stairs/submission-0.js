class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let step1 = cost[0]
        let step2 = cost[1]

        for (let i = 2; i < cost.length; i++) {
            let current = cost[i] + Math.min(step1, step2)
            step1 = step2
            step2 = current
        }

        return Math.min(step1, step2)
    }
}
