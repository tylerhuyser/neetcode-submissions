class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let totalLength = nums1.length + nums2.length
        let shortest = nums1.length <= nums2.length ? nums1 : nums2
        let longest = nums1.length > nums2.length ? nums1 : nums2

        console.log(shortest)
        console.log(longest)

        let left = 0
        let right = shortest.length

        while (left <= right) {
            let shortMid = Math.floor((left + right) / 2)
            let longMid = Math.floor((shortest.length + longest.length + 1) / 2) - shortMid

            let left1 = shortMid === 0 ? -Infinity : shortest[shortMid - 1]
            let left2 = longMid === 0 ? -Infinity : longest[longMid - 1]
            let right1 = shortMid === shortest.length ? Infinity : shortest[shortMid]
            let right2 = longMid === longest.length ? Infinity : longest[longMid]

            if (left1 <= right2 && left2 <= right1) {
                if (totalLength % 2 === 0) {
                    return (Math.max(left1, left2) + Math.min(right1, right2)) / 2
                } else {
                    return Math.max(left1, left2)
                }
            } else if (left1 > right2) {
                right = shortMid - 1
            } else {
                left = shortMid + 1
            }
        }


    }
}
