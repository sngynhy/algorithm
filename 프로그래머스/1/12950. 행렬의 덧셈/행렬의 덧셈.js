function solution(arr1, arr2) {
    // let answer = Array.from({length: arr1.length}, () => new Array(1))
    // for (let i=0; i<arr1.length; i++) {
    //     for (let j=0; j<arr1[i].length; j++) {
    //         answer[i][j] = arr1[i][j] + arr2[i][j]
    //     }
    // }
    // return answer;
    return arr1.map((el, i) => el.map((val, j) => val + arr2[i][j]))
}