function solution(id_list, report, k) {
    let answer = Array(id_list.length).fill(0)
    report = [...new Set(report)]
    let res = {}
    report.map(el => {
        const arr = el.split(' ')
        res[arr[1]] ? res[arr[1]].push(arr[0]) : res[arr[1]] = [arr[0]]
    })
    let stopMember = Object.keys(res).filter(el => res[el].length >= k)
    for (const member of stopMember) {
        res[member].forEach(el => answer[id_list.indexOf(el)] += 1)
    }
    return answer;
}