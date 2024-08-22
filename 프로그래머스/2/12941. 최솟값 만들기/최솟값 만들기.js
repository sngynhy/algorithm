function solution(A, B){
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    return A.reduce((acc, curr, i) => acc += curr * B[i], 0);
}