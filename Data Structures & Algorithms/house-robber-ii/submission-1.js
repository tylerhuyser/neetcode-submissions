class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        if (nums.length === 0) return 0
        if (nums.length === 1) return nums[0]

        function robbing (array) {
            let house1 = 0
            let house2 = 0

            for (let i = 0; i < array.length; i++) {
                let current = Math.max(house1, house2 + array[i])
                house2 = house1
                house1 = current
            }

            return house1
        }

        let path1 = robbing(nums.slice(1))
        let path2 = robbing(nums.slice(0, nums.length - 1))

        return Math.max(path1, path2)

    }
}
