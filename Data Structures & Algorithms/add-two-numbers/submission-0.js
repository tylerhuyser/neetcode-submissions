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
    addTwoNumbers(l1, l2) {
        let one = ''
        let two = ''

        let curr1 = l1
        let curr2 = l2

        console.log(curr1.next)

        while (curr1 !== null) {
            one = curr1.val + one
            console.log(one)
            curr1 = curr1.next
        }

        while (curr2 !== null) {
            two = curr2.val + two
            console.log(two)
            curr2 = curr2.next
        }

        let sum = (BigInt(one) + BigInt(two)).toString()

        console.log(sum)

        let result = new ListNode()
        let temp = result
        
        for (let i = sum.length - 1; i >= 0; i--) {
            temp.next = new ListNode(parseInt(sum[i]))
            temp = temp.next
        }

        return result.next
    }
}
