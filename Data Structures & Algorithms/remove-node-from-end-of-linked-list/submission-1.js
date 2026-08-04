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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // 1. reverse it - skip N -- then add the beginning? 
        let length = 0
        let current = head

        while (current !== null) {
            length++
            current = current.next
        }

        if (length === n) return head.next

        let prev = head
        for (let i = 1; i < length - n; i++) {
            prev = prev.next
        }

        prev.next = prev.next.next

        return head
    }
}
