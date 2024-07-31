class Solution {
    public int solution(String[][] board, int h, int w) {
        int answer = 0;
        String color = board[h][w];
        int[] hp = {0, -1, 1, 0};
        int[] wp = {-1, 0, 0, 1};
        for (int i = 0; i < 4; i++) {
            int hh = h + hp[i];
            int ww = w + wp[i];
            if (hh < 0 || ww < 0 || hh > board.length - 1 || ww > board[0].length - 1) continue;
            if (color.equals(board[hh][ww])) answer += 1 ;
        }
        return answer;
    }
}