var findJudge = function(n, trust) {
    if (n === 1) return 1; 
    
    const trustCount = new Array(n + 1).fill(0);
    const trustedByCount = new Array(n + 1).fill(0);
    
    for (let [a, b] of trust) {
        trustCount[a]++;
        trustedByCount[b]++;
    }
    
    for (let j = 1; j <= n; j++) {
        if (trustCount[j] === 0 && trustedByCount[j] === n - 1) {
            return j;
        }
    }
    
    return -1;
};
