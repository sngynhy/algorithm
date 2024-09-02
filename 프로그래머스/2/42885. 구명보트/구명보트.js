function solution(people, limit) {
    people.sort((a, b) => a - b)
    // 보트엔 2명만 탈 수 있음 => 가장 가벼운 사람과 가장 무거운 사람
    for (var min=0, max=people.length - 1; min<max; max--) {
        if (people[min] + people[max] <= limit) min++
    }
    return people.length - min;
    
    // var answer = 0;
    // let min = 0, max = people.length - 1
    // while (min <= max) {
    //     if (people[min] + people[max] <= limit) {
    //         min++
    //         max--
    //     } else {
    //         max--
    //     }
    //     answer++
    // }
    // return answer;
}