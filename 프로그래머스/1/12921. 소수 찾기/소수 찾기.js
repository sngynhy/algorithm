function solution(n) {
    // 에라토스테네스의 체
    // index가 0부터 시작하므로 n까지 채워지도록 길이가 n+1인 배열 생성
    let prime = Array(n + 1).fill(true)
    prime[0] = prime[1] = false // 0과 1은 소수가 아님
    for (let i=2; i<=Math.sqrt(n); i++) {
        if (prime[i]) {
            for (let j=i*i; j<=n; j+=i) {
                prime[j] = false;
            }
        }
    }
    
    return prime.filter(el => el).length
}