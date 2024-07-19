function solution(sizes) {
    let arr = []
    sizes.forEach(el => arr.push(el.sort((a, b) => a - b)))
    return Math.max(...arr.map(el => el[0])) * Math.max(...arr.map(el => el[1]))
}