let a1 = [{ "name": "홍길동", "age": 16 }, { "name": "임꺽정", "age": 19 }];

let s = JSON.stringify(a1); // 문자열로 변환 후
let a2 = JSON.parse(s); // 다시 객체 배열 생성

console.log(a2);

// 깊은 복사 방법