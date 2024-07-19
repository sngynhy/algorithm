function solution(d, budget) {
    // let answer = 0
    // d.sort((a, b) => a - b).reduce((acc, price, index) => {
    //     answer = acc > budget ? index - 1 : d.length
    //     return acc + price
    // }, 0)
    // return answer;
    
    return d.sort((a, b) => a - b).reduce((count, price) => {
        return count + ((budget -= price) >= 0);
    }, 0);
}