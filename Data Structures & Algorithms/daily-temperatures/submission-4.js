class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = []
        let result = new Array(temperatures.length).fill(0)

        for (let i = 0; i < temperatures.length; i++) {
            let currentTemp = temperatures[i]

            while (stack.length > 0 && currentTemp > temperatures[stack[stack.length - 1]]) {
                let popped = stack.pop()
                result[popped] = i - popped
            }

            stack.push(i)
            
        }

        return result
    }
}
