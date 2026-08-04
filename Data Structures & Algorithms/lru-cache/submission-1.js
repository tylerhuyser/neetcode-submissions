class Node {
    constructor (key, val) {
        this.key = key
        this.val = val
        this.prev = null
        this.next = null
    }
}


class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.map = new Map() 

        this.size = 0       
        this.capacity = capacity

        this.head = new Node(0, 0)
        this.tail = new Node(0, 0)
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    /**
     * @param {number} key
     * @return {number}
     */

    remove(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }

    insert (node) {
        node.next = this.head.next
        node.next.prev = node
        this.head.next = node
        node.prev = this.head
    }


    get(key) {
        if (!this.map.has(key)) return -1

        const node = this.map.get(key)
        this.remove(node)
        this.insert(node)
        return node.val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key)
            node.val = value
            this.remove(node)
            this.insert(node)
            return
        }

        if (this.map.size === this.capacity) {
            const node = this.tail.prev
            this.remove(node)
            this.map.delete(node.key)
        }

        const newNode = new Node(key, value)
        this.map.set(key, newNode)
        this.insert(newNode)

    }
}
