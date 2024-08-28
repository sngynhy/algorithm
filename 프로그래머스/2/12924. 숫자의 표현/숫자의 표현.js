function solution(n) {
    var answer = 0;
    for (let k=1; k*(k-1)/2 < n; k++) {
        if ((n-k*(k-1)/2)%k === 0) answer++
    }
    return answer;
}