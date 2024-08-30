function solution(brown, yellow) {
    // 1) S => w * h = brown + yellow (w >= h)
    // 2) brown = 2w + 2(h - 2) => h = (brown - 2w + 4) / 2
    // 2번식을 1번식의 h에 대입하여 S를 w에 대한 식으로 나타내면
    // w((brown - 2w + 4) / 2) = brown + yellow
    // 위의 식을 w에 대한 이차 방정식으로 표현하면
    // w^2 - (2 + 0.5 * brown)w + (brown + yellow) = 0
    // 근의 공식을 이용하여 w값 구하기
    let a = 1, b = (2 + 0.5 * brown), c = brown + yellow
    let w1 = (b + Math.sqrt(Math.pow(b, 2) - (4*a*c))) / 2
    let w2 = (b - Math.sqrt(Math.pow(b, 2) - (4*a*c))) / 2
    return [w1, w2];
}