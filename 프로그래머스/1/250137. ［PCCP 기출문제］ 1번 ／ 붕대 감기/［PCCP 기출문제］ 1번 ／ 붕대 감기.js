function solution(bandage, health, attacks) {
   let lastAttackTime = attacks[attacks.length-1][0]
    let hp = health, sqncCnt = 0
    let attacksMap = new Map()
    attacks.map(el => attacksMap.set(el[0], el[1]))
    
    for (let i=1; i<=lastAttackTime; i++) {
        if (attacksMap.has(i)) { // 공격
            hp -= attacksMap.get(i)
            sqncCnt = 0
        } else { // 회복
            ++sqncCnt // 연속 횟수 +1            
            if (i === 1) continue
            
            hp += bandage[1] // 체력 회복++
            if (hp > health) { // 체력 최댓값 체크
                hp = health
                continue
            }
            
            if (sqncCnt === bandage[0]) { // 추가 회복++
                 hp += bandage[2]
                 sqncCnt = 0
            }
            
        }
        if (hp <= 0) {
            hp = -1
            break
        }
    }
    return hp;
}