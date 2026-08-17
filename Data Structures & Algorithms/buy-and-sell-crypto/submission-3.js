class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let lowestPrice = prices[0]

        for (const price of prices) {
            if (price < lowestPrice) lowestPrice = price
            else {
                maxProfit = Math.max(price - lowestPrice, maxProfit)
            }
        }

        return maxProfit
    }
}
