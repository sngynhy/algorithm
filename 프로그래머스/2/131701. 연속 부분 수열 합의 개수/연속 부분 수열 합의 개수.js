function solution(elements) {
    let set = new Set()
    let arr = [...elements, ...elements]
    for (let i=0, n=1; i<elements.length; i++, n++) {
        for (let j=0; j<elements.length; j++) {
            let sum = arr.slice(j, j+n).reduce((acc, curr) => {
                return acc + curr
            }, 0)
            if (!set.has(sum)) set.add(sum)
            if (i === elements.length-1) break
        }
    }
    return set.size;
}