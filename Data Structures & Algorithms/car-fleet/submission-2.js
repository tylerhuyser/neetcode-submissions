class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // 1. Link the Position and Speed and Sort in DESCENDING ORDER
        let pairs = position.map((position, index) => [position, speed[index]])
        pairs.sort((a , b) => b[0] - a[0])

        let stack = []

        // 2. Iterate through the sorted pairs

        for (const [pos, spd] of pairs) {
            // 2a. Calculate the time.
            let time = (target - pos) / spd
            stack.push(time)

            // 2b. If a car will arrive quicker than the previous car, merge them.
            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop()
            }
        }

        return stack.length
    }
}
