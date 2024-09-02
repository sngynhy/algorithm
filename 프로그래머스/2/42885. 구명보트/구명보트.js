function solution(people, limit) {
    var answer = 0;
    people.sort((a, b) => a - b)
    let min = 0, max = people.length - 1
    while (min <= max) {
        if (people[min] + people[max] <= limit) {
            min++
            max--
        } else {
            max--
        }
        answer++
    }
    return answer;
}