package algorithm;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;

public class StringIntegerWord {
	// īī�� - ���� ���ڿ��� ���ܾ�
	public static int solution2(String s) {
		HashMap<String, Integer> map = new HashMap<String, Integer>();
		map.put("zero", 0);
		map.put("one", 1);
		map.put("two", 2);
		map.put("three", 3);
		map.put("four", 4);
		map.put("five", 5);
		map.put("six", 6);
		map.put("seven", 7);
		map.put("eight", 8);
		map.put("nine", 9);

		// map�� ����� key-value�� ����
		Set<String> keySet = map.keySet(); // key���� �����Ͽ� Set�÷��ǿ� ����
		Iterator<String> keyItr = keySet.iterator(); // �ݺ��ڸ� ���� key�� �ϳ��� ������
		while (keyItr.hasNext()) {
			String key = keyItr.next();
			String value = Integer.toString(map.get(key)); // get()�޼ҵ带 �̿��� �ش� Ű�� ���� ������

			// map�� key���� ���� s�� ���ԵǾ��ִ��� üũ
			// ���� ���ԵǾ� �ִٸ� �ش� key�� value������ ġȯ - replace
			if (s.contains(key)) {
				s = s.replace(key, value);
			}
		}

		//			Set<HashMap.Entry<String, Integer>> entrySet = map.entrySet();
		//			Iterator<HashMap.Entry<String, Integer>> entryIterator = entrySet.iterator();
		//			while (entryIterator.hasNext()) {
		//				HashMap.Entry<String, Integer> entry = entryIterator.next();
		//				String key = entry.getKey();
		//				int value = entry.getValue();
		//				if (s.contains(key)) {
		//					s = s.replace(key, Integer.toString(value));
		//				}
		//			}

		// ���ڰ� s�� int������ ��ȯ
		int answer = Integer.parseInt(s);
		return answer;
	}
}
