function solution(array, commands) {
    return commands.map((el, index) => {
        let [i, j, k] = el
        console.log(i,j,k)
        return array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]
    });
}