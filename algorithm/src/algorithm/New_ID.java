package algorithm;

public class New_ID {
	// 카카오 - 신규 아이디
	public static String solution1(String new_id) {
		String answer = new_id;
		// 1단계 모든 문자를 소문자로 치환
		answer = answer.toLowerCase();
		// 2단계 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
		String match = "[^\\w\\-_.]"; // \w : a-zA-Z0-9
		answer = answer.replaceAll(match, "");
		// 3단계 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
		match = "\\.{2,}";
		answer = answer.replaceAll(match, ".");
		// 4단계 마침표(.)가 처음이나 끝에 위치한다면 제거
		match = "^[.]|[.]$";
		answer = answer.replaceAll(match, "");
		// 5단계 빈 문자열이라면, new_id에 "a"를 대입
		if (answer.length() == 0) {
			answer = "a";
		}
		// 6단계 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
		if (answer.length() >= 16) {
			answer = answer.substring(0, 15);
			answer = answer.replaceAll("[.]$",""); // 정규식 사용 시 replaceAll만 사용 가능, replace는 문자열만 가능
		}
		// 7단계 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙임
		if (answer.length() < 3) {
			for (int i=answer.length(); i<3; i++) {
				answer += answer.substring(answer.length()-1);
			}
		}
		return answer;
	}
}
