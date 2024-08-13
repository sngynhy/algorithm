function solution(wallpaper) {
    let coordinate = {y:[], x:[]}
    wallpaper.forEach((wp, i) => {
        wp.split('').forEach((el, j) => {
            if (el === '#') {
                coordinate.y.push(i)
                coordinate.x.push(j)
            }
        })
    })
    return [Math.min(...coordinate.y), Math.min(...coordinate.x), Math.max(...coordinate.y)+1, Math.max(...coordinate.x)+1];
}