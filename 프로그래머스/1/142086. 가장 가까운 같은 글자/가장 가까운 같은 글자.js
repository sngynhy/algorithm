function solution(s) {
    var answer = [];
    const arr = []
    s.split('').forEach((el, i) => {
        if (arr.includes(el)) {
            let index = arr.lastIndexOf(el)
            answer.push(i - index)
        } else {
            answer.push(-1)
        }
        arr.push(el)
    })
    return answer;
    
    // return [...s].map((el, i) =>{
    //     // 현재 인덱스까지 문자열 자른 후 lastIndexOf() 함수로 해당 문자 존재 여부 체크
    //     const index = s.slice(0, i).lastIndexOf(el)
    //     return index < 0 ? -1 : i - index
    // })
}