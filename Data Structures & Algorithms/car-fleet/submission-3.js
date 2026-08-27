class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pairs = position.map((position, index) => [position, speed[index]])
        pairs.sort((a, b) => b[0] - a[0])

        let stack = []


        for (let i = 0; i < pairs.length; i++) {
            let currentPair = pairs[i]
            let time = (target - currentPair[0]) / currentPair[1]
            stack.push(time)

            if (stack.length >= 2 && time <= stack[stack.length - 2]) stack.pop()
        }

        return stack.length
    }
}
