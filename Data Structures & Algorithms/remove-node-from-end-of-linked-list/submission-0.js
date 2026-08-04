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
        let nodes = 0
        let current = head
        
        while (current !== null) {
            nodes++
            current = current.next
        }

        console.log(nodes)

        let end = nodes - n

        if (end === 0) {
            return head.next;
        }

        console.log(n)

        let temp = head

        while (end > 1) {
            temp = temp.next
            end--
        }

        temp.next = temp.next.next

        return head
    }
}
