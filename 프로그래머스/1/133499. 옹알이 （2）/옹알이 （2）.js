function solution(babbling) {
    let answer = 0;
    let possible = ["aya", "ye", "woo", "ma"]
    for (const babble of babbling) {
        let word = babble
        for (const el of possible) {
            // 같은 단어 반복되는 경우는 패스
            if (babble.includes(el.repeat(2))) break
            
            word = word.split(el).join('.')
        }
        if (word.split('.').join('') === '') answer++
    }
    return answer;
}