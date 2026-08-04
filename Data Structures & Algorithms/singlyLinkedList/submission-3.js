class ListNode {
    constructor(val= 0, next = null) {
        this._val = val
        this._next = next
    }
}

class LinkedList {
    constructor() {
        this._head = null
        this._size = 0
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this._size) return -1
        let idx = 0
        let current = this._head
        while (idx < index) {
            current = current._next
            idx++
        }
        return current._val
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newNode = new ListNode(val)
        this._size++

        if (!this._head) {
            this._head = newNode
            return
        } else {
            newNode._next = this._head
            this._head = newNode
            return
        }
    }   

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let newNode = new ListNode(val)
        this._size++

        if (!this._head) {
            this._head = newNode
            return
        }

        let current = this._head
        while(current._next !== null) {
            current = current._next
        }
        current._next = newNode

        return
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (index < 0 || index >= this._size) return false

        if (index == 0) {
            this._head = this._head._next
            this._size--
            return true
        }

        let idx = 0
        let current = this._head
        while (idx < index - 1) {
            current = current._next
            idx++
        }

        if (current._next !== null) {
            current._next = current._next._next
        }

        this._size--
        return true

    }

    /**
     * @return {number[]}
     */
    getValues() {
        let values = []
        let current = this._head
        while (current !== null) {
            values.push(current._val)
            current = current._next
        }

        return values
    }
}
