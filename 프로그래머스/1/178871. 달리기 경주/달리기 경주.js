function solution(players, callings) {
    let map = new Map()
    players.forEach((el, i) => map.set(el, i))
    callings.forEach(el => {
        let i = map.get(el)
        let front = players[i-1]
        players[i-1] = el
        players[i] = front
        map.set(el, i-1)
        map.set(front, i)
    })
    return players;
}
