function solution(n, arr1, arr2) {
    // var answer = [];
    // let decimal1 = [], decimal2 = []
    // for (let i=0; i<arr1.length; i++) {
    //     const dec1 = arr1[i].toString(2).padStart(n, '0')
    //     const dec2 = arr2[i].toString(2).padStart(n, '0')
    //     let str = ''
    //     for (let j=0; j<dec1.length; j++) {
    //         str += !Number(dec1[j]) && !Number(dec2[j]) ? ' ' : '#'
    //     }
    //     answer.push(str)
    // }
    // return answer;
    
    return arr1.map((el, i) => {
        return (el|arr2[i]).toString(2).padStart(n, '0').replace(/0/g, ' ').replace(/1/g, '#')
    })
}