class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) this.keyStore.set(key, [])
        this.keyStore.get(key).push([timestamp, value])
    }


    get(key, timestamp) {

        if (!this.keyStore.get(key)) {
            return ""
        }

        let store = this.keyStore.get(key)
        let string = ""

        let left = 0
        let right = store.length - 1

        while (left <= right) {
            let mid = Math.floor((left + right) / 2)

            if (store[mid][0] === timestamp) {
                return store[mid][1]
            } else if (store[mid][0] < timestamp) {
                string = store[mid][1]
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return string

    }
}
