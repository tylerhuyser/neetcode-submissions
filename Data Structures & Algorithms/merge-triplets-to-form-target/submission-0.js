class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
mergeTriplets(triplets, target) {
    // Start with a valid base triplet
    let current = null
    
    for (let triplet of triplets) {
        if (triplet[0] <= target[0] && 
            triplet[1] <= target[1] && 
            triplet[2] <= target[2]) {
            current = [...triplet]
            break
        }
    }
    
    if (!current) return false
    
    // Greedy: keep combining until we reach target
    let changed = true
    while (changed) {
        changed = false
        
        // Try each triplet to see if it helps
        for (let triplet of triplets) {
            // Check if combining improves ANY dimension
            let newCombined = [
                Math.max(current[0], triplet[0]),
                Math.max(current[1], triplet[1]),
                Math.max(current[2], triplet[2])
            ]
            
            // Did we improve and stay <= target?
            if ((newCombined[0] > current[0] || 
                 newCombined[1] > current[1] || 
                 newCombined[2] > current[2]) &&
                newCombined[0] <= target[0] &&
                newCombined[1] <= target[1] &&
                newCombined[2] <= target[2]) {
                
                current = newCombined
                changed = true
            }
        }
    }
    
    // Check if we reached target
    return current[0] === target[0] && 
           current[1] === target[1] && 
           current[2] === target[2]
}
}
