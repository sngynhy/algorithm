function solution(a, b) {
    // 01일 금요일 => 금요일을 1번 인덱스로
    const days = ['THU', 'FRI','SAT','SUN','MON','TUE','WED']
    const lastDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    // 해당 날짜까지 총 일수 계산
    let day = a !== 1 ? lastDay.slice(0, a - 1).reduce((acc, curr) => acc + curr) + b : b
    return days[day % 7];
}