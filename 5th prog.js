const bestsum = (targetsum, num, memo = {}) => {
    if (targetsum in memo) return memo[targetsum];
    let shortcombination = null;
    if (targetsum === 0) return [];
    if (targetsum < 0) return false;
    for (let nums in num) {
        let remainder = targetsum - nums;
        if (remainder < 0) continue;
        else {
            let combinations = bestsum(remainder, num, memo);
            if (combinations !== null) {
                let combo = [...combinations,num[i]];
                if (shortcombination === null || combo.length < shortcombination.length)
                    shortcombination = combo;
            }
        }
    }

    memo[targetsum] = shortcombination;
    return shortcombination;
}

console.log(bestsum(7, [2, 3])); // Output: [2,2,3]
console.log(bestsum(10, [4, 6])); // Output: [4,6]
//console.log(bestsum(15, [8, 9, 10])); // Output: [8,9]
console.log(bestsum(-1, [4, 5])); // Output: false
console.log(bestsum(150, [])); //null
