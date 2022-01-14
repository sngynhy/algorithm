package algorithm;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;

public class StringIntegerWord {
	// 카카오 - 숫자 문자열과 영단어
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

		// map에 저장된 key-value값 추출
		Set<String> keySet = map.keySet(); // key들을 추출하여 Set컬렉션에 저장
		Iterator<String> keyItr = keySet.iterator(); // 반복자를 통해 key를 하나씩 얻어오기
		while (keyItr.hasNext()) {
			String key = keyItr.next();
			String value = Integer.toString(map.get(key)); // get()메소드를 이용해 해당 키의 값을 얻어오기

			// map의 key값이 인자 s에 포함되어있는지 체크
			// 만약 포함되어 있다면 해당 key의 value값으로 치환 - replace
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

		// 인자값 s를 int형으로 변환
		int answer = Integer.parseInt(s);
		return answer;
	}
}
