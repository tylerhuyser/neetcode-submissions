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

        for (const [post, spd] of pairs) {
            let time = (target - post) / spd
            stack.push(time)
            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop()
            }
        }

        return stack.length
    }
}
