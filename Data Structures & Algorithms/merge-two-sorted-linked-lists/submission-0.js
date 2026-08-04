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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        let merged = new ListNode(0)
        let current = merged

        let a = list1
        let b = list2

        while (a !== null && b !== null) {
            if (a.val <= b.val) {
                current.next = a
                a = a.next
            } else {
                current.next = b
                b = b.next
            }
            current = current.next
        }

        current.next = a !== null ? a : b

        console.log(merged)
        return merged.next

    }
}
