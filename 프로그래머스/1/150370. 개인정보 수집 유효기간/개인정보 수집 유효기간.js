function solution(today, terms, privacies) {
    // #1
    // 1 > 2021.05.02 A => 2021년 11월 1일까지 => 파기
    // 2 > 2021.07.01 B => 2022년 6월 28일까지
    // 3 > 2022.02.19 C => 2022년 5월 18일까지 => 파기
    // 4 > 2022.02.20 C => 2022년 5월 19일까지
    // #2
    // 1 > 2019.01.01 D => 2019년 5월 28일까지 보관 => 파기
    // 2 > 2019.11.15 Z => 2020년 2월 14일까지 보관
    // 3 > 2019.08.02 D => 2020년 1월 1일까지 보관
    // 4 > 2019.07.01 D => 2019년 11월 28일까지 보관 => 파기
    // 5 > 2018.12.28 Z => 2019년 3월 27일까지 보관 => 파기
    
    var answer = [];
    let period = new Map()
    terms.forEach(el => period.set(el.split(' ')[0], Number(el.split(' ')[1])))
    privacies.forEach((el, i) => {
        let type = el.split(' ')[1], tempDate = getDate(el.split(' ')[0])
        
        tempDate.date -= 1
        if (tempDate.date === 0) {
            tempDate.date = 28
            tempDate.month -= 1
        }
        
        let months = period.get(type)
        if (months > 12) tempDate.year += Math.trunc(months / 12), tempDate.month += months % 12
        else tempDate.month += months
        
        if (tempDate.month > 12) {
            tempDate.year += 1
            tempDate.month -= 12
        }
        
        if (new Date(today) > new Date(tempDate.year + '.' + tempDate.month + '.' + tempDate.date)) {
            answer.push(i+1)
        }
    })
    return answer;
}

function getDate (date) {
    return {
        year: new Date(date).getYear() + 1900,
        month: new Date(date).getMonth() + 1,
        date: new Date(date).getDate()
    }
}