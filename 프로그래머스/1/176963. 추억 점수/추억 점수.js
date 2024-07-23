function solution(name, yearning, photo) {
    const map = name.reduce((map, curr, i) => map.set(curr, yearning[i]), new Map())
    return photo.map(el => {
        return el.reduce((acc, curr) => {
            return acc += map.get(curr) === undefined ? 0 : map.get(curr)
        }, 0)
    });
}