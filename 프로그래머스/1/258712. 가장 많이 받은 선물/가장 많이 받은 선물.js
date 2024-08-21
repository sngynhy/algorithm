function solution(friends, gifts) {
    // 선물 지수, 주고 받은 선물 개수
    let index = new Map(), interaction = new Map()
    friends.forEach(el => {
        index.set(el, 0)
        interaction.set(el, friends.reduce((acc, curr) => {
            acc[curr] = curr === el ? null : 0
            return acc
        }, {}))
    })
    gifts.forEach(el => {
        let give = el.split(' ')[0], receive = el.split(' ')[1]
        index.set(give, index.get(give) + 1)
        index.set(receive, index.get(receive) - 1)
        
        interaction.get(give)[receive] += 1
    })
    
    let res = []
    interaction.forEach((receivers, giver) => {
        let temp = { name: '', count: 0 }
        let cnt = 0
        for (const receiver in receivers) {
            if (receivers[receiver] === null) continue
            
            let give = receivers[receiver], receive = interaction.get(receiver)[giver]
            if (give > receive || (give === receive && index.get(giver) > index.get(receiver))) {
                temp.name = giver
                temp.count = ++cnt
            }
        }
        res.push(temp)
    })
    return Math.max(...res.map(el => el.count));
}