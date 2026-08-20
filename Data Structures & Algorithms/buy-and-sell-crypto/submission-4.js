class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0]
        let maxProfit = 0

        for (const price of prices) {
            if (price < minPrice) minPrice = price
            else maxProfit = Math.max(maxProfit, price - minPrice)
        }

        return maxProfit
    }
}
