class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // 1. Create a stack and an array to return as a result.
        let stack = []
        let result = new Array(temperatures.length).fill(0)

        // 2. Iterature through the temperatures.
        for (let i = 0; i < temperatures.length; i++) {
            let currentTemp = temperatures[i]
            // 2a. While there is a stack, and currentTemp is greater than previous temps, push the difference as a result.
            while (stack.length > 0 && currentTemp > temperatures[stack[stack.length - 1]]) {
                let popped = stack.pop()
                result[popped] = i - popped
            }
            // 3. Always push the index of the current Temp.
            stack.push(i)
        }

        return result
    }
}
