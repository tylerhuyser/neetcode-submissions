class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let purchasePrice = prices[0]
        let profit = 0

        for (let i = 1; i < prices.length; i++) {
            let currentPrice = prices[i]
            if (currentPrice < purchasePrice) {
                purchasePrice = currentPrice
            }
            profit = Math.max(profit, currentPrice - purchasePrice)
        }

        return profit

    }
}
