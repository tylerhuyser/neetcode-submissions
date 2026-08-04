// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null

        const nodeMap = new Map()

        let current = head
        while (current !== null) {
            nodeMap.set(current, new Node(current.val))
            current = current.next
        }

        current = head
        while (current !== null) {
            let clone = nodeMap.get(current)
            clone.next = current.next ? nodeMap.get(current.next) : null
            clone.random = current.random ? nodeMap.get(current.random) : null;
            current = current.next
        }

        return nodeMap.get(head)
    }
}
