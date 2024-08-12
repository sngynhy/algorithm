function solution(board, moves) {
    var answer = 0;
    let arr = []
    for (let i=0; i<board.length; i++) {
        let list = []
        for (let j=0; j<board[i].length; j++) {
            list.push(board[j][i])
        }
        arr.push(list)
    }
    let stack = []
    moves.forEach((move, i) => {
        let index = arr[move-1].findIndex(el => el !== 0)
        if (index > -1) {
            stack.push(arr[move-1][index])
            arr[move-1][index] = 0
            if (i > 0 && stack[stack.length - 2] === stack[stack.length - 1]) {
                answer += 2
                stack.splice(-2)
            }
        }
    })
    return answer;
}