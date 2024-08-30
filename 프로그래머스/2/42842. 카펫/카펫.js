function solution(brown, yellow) {
    let answer = [];
    // w >= h
    // w * h = yellow => w, h는 yellow의 약수
    // w + h <= (brown - 4) / 2
    let w = [], h = []
    for (let i=1; i<=Math.sqrt(yellow); i++) {
        if (yellow % i === 0) {
            h.push(i)
            w.push(yellow / i)
        }
    }
    
    for (let i=0; i<w.length; i++) {
        if (w[i]+h[i] === (brown-4)/2) {
            answer.push(w[i]+2)
            answer.push(h[i]+2)
        }
    }
    return answer;
}