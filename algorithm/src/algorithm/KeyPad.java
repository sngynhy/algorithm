package algorithm;

public class KeyPad {
	// Ä«Ä«¿À - 
	public static String solution3(int[] numbers, String hand) {
        String answer = "";
        // [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5] => "LRLLRRLLLRR"
        // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] => "LLRLLRLLRL"
        for (int i=0; i<numbers.length; i++) {
        	int num = numbers[i];
            if (num == 1 || num == 4 || num == 7) {
            	answer += "L";
            } else if (num == 3 || num == 6 || num == 9) {
            	answer += "R";
            } else {
            	
            }
        }
        return answer;
    }
}
