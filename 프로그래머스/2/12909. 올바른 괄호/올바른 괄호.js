function solution(s){
    let cnt = 0
    for (const v of s) {
        if (cnt === 0 && v === ')') return false
        v === '(' ? ++cnt : --cnt
    }
    return cnt === 0;
}