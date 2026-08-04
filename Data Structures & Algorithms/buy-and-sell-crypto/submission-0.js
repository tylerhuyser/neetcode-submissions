class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let purchasePrice = prices[0]
        let profit = 0

        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < purchasePrice) purchasePrice = prices[i]
            else if (prices[i] > purchasePrice) profit = Math.max(profit, prices[i] - purchasePrice)
        }

        return profit
    }
}
