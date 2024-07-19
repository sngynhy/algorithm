function solution(s) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    numbers.forEach((el, i) => s = s.split(el).join(i))
    return Number(s);
}