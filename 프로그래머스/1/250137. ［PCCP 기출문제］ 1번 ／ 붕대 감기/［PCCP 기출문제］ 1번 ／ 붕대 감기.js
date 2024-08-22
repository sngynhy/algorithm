function solution(bandage, health, attacks) {
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