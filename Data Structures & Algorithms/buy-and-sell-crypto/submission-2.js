class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0]
        let profit = 0

        for (const price of prices) {
            if (price < minPrice) minPrice = price
            profit = Math.max(price - minPrice, profit)
        }

        return profit
    }
}
