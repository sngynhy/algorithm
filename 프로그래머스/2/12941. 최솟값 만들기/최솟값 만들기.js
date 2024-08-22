function solution(A, B){
    A = A.sort((a, b) => a - b)
    B = B.sort((a, b) => b - a)
    return A.reduce((acc, curr, i) => {
        return acc += curr * B[i]
    }, 0);
}