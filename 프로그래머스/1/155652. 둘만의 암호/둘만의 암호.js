function solution(s, skip, index) {
    // 소문자 유니코드 > 97 ~ 122 (26개)
    let unicode = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));
    unicode = unicode.filter(el => !skip.includes(el))
    return s.split('').map(el => unicode[(unicode.indexOf(el) + index) % unicode.length]).join('')
}