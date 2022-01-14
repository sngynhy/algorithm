package algorithm;

// ÇÏ»þµå ¼ö
public class HarshadNumber {
	
    public static boolean solution(int x) {
        boolean answer = true;
        String y = String.valueOf(x);
        char[] digits = y.toCharArray();
        int sum = 0;
        for (char v : digits) {
        	sum += Character.getNumericValue(v);
        }
        if (!(x % sum == 0)) {
        	answer = false;
        }
        return answer;
    }
}
