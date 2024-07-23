function solution(strings, n) {
    return strings.sort((a, b) => {
        return !a[n].localeCompare(b[n]) ? a.localeCompare(b) : a[n].localeCompare(b[n])
    })
}