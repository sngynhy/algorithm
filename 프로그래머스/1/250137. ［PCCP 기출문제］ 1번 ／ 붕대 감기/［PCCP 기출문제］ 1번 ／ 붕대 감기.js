function solution(bandage, health, attacks) {
    // 방법 1)
    // let lastAttackTime = attacks[attacks.length-1][0]
    // let hp = health, sqncCnt = 0
    // let attacksMap = new Map()
    // attacks.map(el => attacksMap.set(el[0], el[1]))
    // for (let i=1; i<=lastAttackTime; i++) {
    //     if (attacksMap.has(i)) { // 공격
    //         hp -= attacksMap.get(i)
    //         sqncCnt = 0
    //     } else { // 회복
    //         ++sqncCnt // 연속 횟수 +1
    //         hp += bandage[1] // 체력 회복++
    //         if (hp > health) { // 체력 최댓값 체크
    //             hp = health
    //             continue
    //         }
    //         if (sqncCnt === bandage[0]) { // 추가 회복++
    //              hp += bandage[2]
    //              sqncCnt = 0
    //         }
    //     }
    //     if (hp <= 0) {
    //         hp = -1
    //         break
    //     }
    // }
    
    // 방법 2)
    // 현재 체력, 이전 공격 시간
    let hp = health, prevAttackTime = 0
    for (let [currAttackTime, damage] of attacks) {
        // 누적 시간
        let accumulatedTime = currAttackTime - prevAttackTime - 1
        // 누적 회복력++
        hp += bandage[1] * accumulatedTime + bandage[2] * Math.trunc(accumulatedTime / bandage[0])

        if (hp > health) hp = health
        hp -= damage
        if (hp <= 0) return -1
        
        prevAttackTime = currAttackTime
    }
    return hp;
}