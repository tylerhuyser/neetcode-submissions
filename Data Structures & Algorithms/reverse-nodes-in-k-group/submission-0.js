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
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        if (!head || k === 1) return head

        let check = head

        for (let i = 0; i < k; i++) {
            if (check === null) return head
            check = check.next
        }

        let prev = null
        let current = head
        let nextTemp = null
        let count = 0

        while (current !== null && count < k) {
            nextTemp = current.next
            current.next = prev
            prev = current
            current = nextTemp
            count++
        }

        if (nextTemp !== null) {
            head.next = this.reverseKGroup(nextTemp, k)
        }

        return prev
    }
}
