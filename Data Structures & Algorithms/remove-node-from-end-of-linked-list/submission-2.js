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

    twoPass (head, n) {
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

    onePass (head, n) {

    }

    removeNthFromEnd(head, n) {

        // twoPass(head, n)

        let dummy = new ListNode(0)
        dummy.next = head

        let left = dummy
        let right = head

        while (n > 0 && right !== null) {
            right = right.next
            n--
        }

        while (right !== null) {
            left = left.next
            right = right.next
        }

        left.next = left.next.next

        return dummy.next

    }
}
