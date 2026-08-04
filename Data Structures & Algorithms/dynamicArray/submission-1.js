class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        if (capacity <= 0) {
            this._capacity = 1
        } else {
            this._capacity = capacity
        }

        this._array = new Array(this._capacity)
        this._size = 0
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        if (i < 0 || i >= this._size) {
            return false
        }

        return this._array[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        if (i < 0 || i >= this._size) {
            return false
        }

        this._array[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this._size === this._capacity) {
            this.resize()
        }

        this._array[this._size] = n
        this._size++
    }

    /**
     * @returns {number}
     */
    popback() {
        if (this._size === 0) {
            return false
        }

        this._size--
        let val = this._array[this._size]

        this._array[this._size] === undefined

        return val
    }

    /**
     * @returns {void}
     */
    resize() {
        this._capacity = this._capacity * 2
        let newArray = new Array(this._capacity)
        for (const [idx, val] of this._array.entries()) {
            if (idx >= this._size) break;
            newArray[idx] = val
        }
        

        this._array = newArray
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this._size
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this._capacity
    }
}
