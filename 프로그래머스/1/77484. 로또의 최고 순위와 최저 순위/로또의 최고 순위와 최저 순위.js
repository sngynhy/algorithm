function solution(lottos, win_nums) {
    var answer = [];
    let ranking = new Map()
    ranking.set(6, 1)
    ranking.set(5, 2)
    ranking.set(4, 3)
    ranking.set(3, 4)
    ranking.set(2, 5)
    ranking.set(1, 6)
    ranking.set(0, 6)
    
    let winCnt = 0, zeroCnt = 0
    lottos.forEach(el => {
        if (el === 0) zeroCnt++
        else if (win_nums.indexOf(el) > -1) winCnt++
    })
    return [ranking.get(winCnt + zeroCnt), ranking.get(winCnt)]; 
}