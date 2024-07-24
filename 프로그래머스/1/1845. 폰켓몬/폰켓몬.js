function solution(nums) {
    const cnt = nums.length / 2
    const set = new Set(nums)
    return set.size > cnt ? cnt : set.size
}