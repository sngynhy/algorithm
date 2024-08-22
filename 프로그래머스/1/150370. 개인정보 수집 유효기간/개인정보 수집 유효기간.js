function solution(today, terms, privacies) {  
    var answer = [];
    let period = new Map()
    terms.forEach(el => period.set(el.split(' ')[0], Number(el.split(' ')[1])))
     privacies.forEach((el, i) => {
        let type = el.split(' ')[1], [year, month, date] = el.split(' ')[0].split('.').map(Number)
        
        let months = period.get(type)
        if (months > 12) year += Math.trunc(months / 12), month += months % 12
        else month += months
        
        if (month > 12) {
            year += 1
            month -= 12
        }
        
        let expiresDate = [year, month, date].join('.')
        if (new Date(today) >= new Date(expiresDate)) answer.push(i+1)
    })
    return answer;
}