/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */

    solutionONMTwoPass(l1, l2) {
        let sum = []

        let c1 = l1
        let c2 = l2

        let remainder = 0

        while (c1 !== null || c2 !== null) {
            let v1 = c1 ? c1.val : 0
            let v2 = c2 ? c2.val : 0

            let digitSum = v1 + v2 + remainder

            if (digitSum < 10) {
                sum.push(digitSum)
                remainder = 0
            } else if (digitSum >= 10) {
                remainder = 1
                sum.push(digitSum - 10)
            }

            if (c1 !== null) c1 = c1.next
            if (c2 !== null) c2 = c2.next

        }

        if (remainder > 0) sum.push(remainder)

        console.log(sum)

        let list = new ListNode(null)
        let current = list

        for (let i = 0; i < sum.length; i++) {
            let node = new ListNode(sum[i])
            current.next = node
            current = current.next
        }

        console.log(list)

        return list.next
    }

    solutinOnePass(l1, l2) {
        let remainder = 0

        let dummy = new ListNode(null)
        let current = dummy
        
        let c1 = l1
        let c2 = l2

        while(c1 !== null || c2 !== null || remainder > 0) {
            let v1 = c1 ? c1.val : 0
            let v2 = c2 ? c2.val : 0

            let digitSum = v1 + v2 + remainder

            remainder = Math.floor(digitSum / 10)
            
            let digit = digitSum % 10

            current.next = new ListNode(digit)
            current = current.next

            if (c1 !== null) c1 = c1.next
            if (c2 !== null) c2 = c2.next
        }

        return dummy.next
    }

    addTwoNumbers(l1, l2) {
        // return this.solutionONMTwoPass(l1, l2)
        return this.solutinOnePass(l1, l2)
    }
}
