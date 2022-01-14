package algorithm;

public class New_ID {
	// īī�� - �ű� ���̵�
	public static String solution1(String new_id) {
		String answer = new_id;
		// 1�ܰ� ��� ���ڸ� �ҹ��ڷ� ġȯ
		answer = answer.toLowerCase();
		// 2�ܰ� �ҹ���, ����, ����(-), ����(_), ��ħǥ(.)�� ������ ��� ���ڸ� ����
		String match = "[^\\w\\-_.]"; // \w : a-zA-Z0-9
		answer = answer.replaceAll(match, "");
		// 3�ܰ� ��ħǥ(.)�� 2�� �̻� ���ӵ� �κ��� �ϳ��� ��ħǥ(.)�� ġȯ
		match = "\\.{2,}";
		answer = answer.replaceAll(match, ".");
		// 4�ܰ� ��ħǥ(.)�� ó���̳� ���� ��ġ�Ѵٸ� ����
		match = "^[.]|[.]$";
		answer = answer.replaceAll(match, "");
		// 5�ܰ� �� ���ڿ��̶��, new_id�� "a"�� ����
		if (answer.length() == 0) {
			answer = "a";
		}
		// 6�ܰ� ���̰� 16�� �̻��̸�, new_id�� ù 15���� ���ڸ� ������ ������ ���ڵ��� ��� ����
		if (answer.length() >= 16) {
			answer = answer.substring(0, 15);
			answer = answer.replaceAll("[.]$",""); // ���Խ� ��� �� replaceAll�� ��� ����, replace�� ���ڿ��� ����
		}
		// 7�ܰ� ���̰� 2�� ���϶��, new_id�� ������ ���ڸ� new_id�� ���̰� 3�� �� ������ �ݺ��ؼ� ���� ����
		if (answer.length() < 3) {
			for (int i=answer.length(); i<3; i++) {
				answer += answer.substring(answer.length()-1);
			}
		}
		return answer;
	}
}
