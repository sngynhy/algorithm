function solution(strings, n) {
    return strings.sort((a, b) => {
        return a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
    })
    // 'a'.localeCompare('b')
    // 사전 정렬 기준 a가 b보다 빠르면 -1, 느리면 1, 같으면 0 반환
}