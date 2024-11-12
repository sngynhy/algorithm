function solution(k, tangerine) {
    var answer = 0;
    const obj = tangerine.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1
        return acc
    }, {})
    // const arr = Object.values(obj).sort().reverse()
    const arr = Object.values(obj).sort((a, b) => b - a)
    for (const cnt of arr) {
        answer++
        if (k > cnt) k -= cnt
        else break
    }
    return answer
}

/*
sort() 함수 사용 시 비교 값을 파라미터로 넘겨줄 것!
배열의 요소를 비교하기 위해 비교 함수가 필요한데, 이 비교 함수의 복잡성도 성능에 영향을 미침.
숫자 정렬일 때 sort((a, b) => a - b)와 같은 방식으로 비교함수를 사용하는 것이 성능 최적화에 유리
ㄴ 시간 복잡도는 일반적으로 O(n log n), 하지만 데이터가 커지면 O(n^2)가 될 수도 있음

reverse() 함수는 단순히 배열을 뒤집는 것
ㄴ 시간 복잡도는 O(n), 비교적 일정한 성능. 대규모 데이터일 때 성능적으로 유리함
*/