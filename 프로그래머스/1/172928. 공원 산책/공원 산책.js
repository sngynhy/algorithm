function solution(park, routes) {
    let start = [] // 시작 위치
    for (let i=0; i<park.length; i++) {
        let index = park[i].indexOf('S')
        if (index > -1) {
            start = [i, index]
            break
        }
    }
    
    let prev = [...start], curr = [] // 이전 위치, 현재 위치
    routes.forEach(el => {
        let dir = el.split(' ')[0], dis = Number(el.split(' ')[1]) // 방향, 거리
        let flag = true
        for (let j=1; j<=dis; j++) {
            curr = move(prev, dir)
            let res = park[curr[0]] ? park[curr[0]][curr[1]] : undefined
            if (res === 'X' || res === undefined) {
                flag = false
                break
            }
            prev = [...curr]
        }
        flag ? start = curr : prev = [...start]
    })
    return start;
}

function move (curr, dir) { // 현재위치, 방향
    switch (dir) {
        case 'N':
            curr[0] -= 1
            break
        case 'S':
            curr[0] += 1
            break
        case 'W':
            curr[1] -= 1
            break
        case 'E':
            curr[1] += 1
            break
    }
    return curr
}