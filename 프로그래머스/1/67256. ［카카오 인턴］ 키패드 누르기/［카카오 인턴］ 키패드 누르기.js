function solution(numbers, hand) {
    var answer = '';
    hand = hand.toUpperCase().slice(0,1)
    let pos = new Map()
    pos.set('L', '10') // 처음 왼손가락 위치 * => 10으로 설정
    pos.set('R', '12') // 처음 오른손가락 위치 # => 12으로 설정
    numbers.forEach((n, i) => {
        let res = ''
        if ([1,4,7].includes(n)) res = 'L'
        else if ([3,6,9].includes(n)) res = 'R'
        else { // 2,5,8,0
            n = n === 0 ? 11 : n
            let l = Math.abs(n - pos.get('L')), r = Math.abs(n - pos.get('R'))
            let distanceL = Math.floor(l/3) + Math.floor(l%3), distanceR = Math.floor(r/3) + Math.floor(r%3)
            res = distanceL === distanceR ? hand : distanceL < distanceR ? 'L' : 'R'
        }
        answer += res
        pos.set(res, n)
    })
    return answer;
}