function solution(nums) {
    var answer = 0;
    let len = nums.length
    for (let i=0; i<len-2; i++) {
        for (let j=i+1; j<len-1; j++) {
            for (let k=j+1; k<len; k++) {
                if (isPrime(nums[i] + nums[j] + nums[k])) answer++
            }
        }
    }
    return answer;
}

function isPrime(n) {
    for (let i=2; i<=Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }
    return true
}