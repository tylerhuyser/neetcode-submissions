class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {

        for (let i = 0; i < gas.length; i++) {
            console.log(`**INITIALIZE**`)
            let tank = 0
            let current = i
            let attempts = 0
            let valid = true

            while (attempts < cost.length) {
                console.log(`Current: ${current}`)
                console.log(`Attempts: ${attempts}`)
                console.log(`Tank: ${tank}`)
                console.log(`**TRAVEL TO NEW STATION**`)

                tank += gas[current]
                tank -= cost[current]

                if (tank < 0) {
                    valid = false
                    console.log('**BREAK**')
                    break}
                if (attempts === cost.length) return start
                
                current = (current + 1) % gas.length
                attempts++
            }

            if (valid && attempts === gas.length) {
                return i
            }
        }

        return -1
    }
}
