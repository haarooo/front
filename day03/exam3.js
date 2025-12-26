// 1. 숫자
100 // 숫자형
console.log(100) // 1. 소괄호 안 부터 읽는다.
console.log( typeof 150 ) // 2 typeof: 자료의 성질(타입)
console.log(3.37) // 3) 컴퓨너틑 소수좀 모른다. <부동소소점>


//2. 문자 : 
console.log("안녕"); // 1. 문자형은 큰따옴표로 감싼 형태
console.log('안녕'); // 2. 작은따옴표도 문자형
console.log(`안녕`); //3. tab 위에 있는 백틱기호로 해도 문자형

//4. 이스케이프(제어) 문자
console.log(`\\안녕4`); //4) 엔터위의 원화기호 키 \\일때 \ 하나만 출력
console.log("\n안녕") //5) 줄바꿈
console.log("\t안녕") //6) 들여쓰기
console.log("\'안녕\'") // 따옴표 출력

//5. 탬플릿 리터럴 : 문자열과 자료(변수,수식,함수)를 조합할때
let 키 = 170
console.log("나의 키 : "+키) //8) 문자열 + 변수명, 문자+숫자->문자
console.log(`나의 키 : ${키}`) //9) 백틱에다가 문자열${변수명/수식/함수호출}
// 문자 : 한글자 , 문자열 : 두글자이상 "문자열: 배열" 
console.log(`안녕하세요`.length)
console.log(`안녕하세요`[1]) // 인덱스 안0 녕1 하2 세3 요4 

//6. 논리형 (조건문/반복문) 자주 사용
console.log( true ) // 
console.log( false)

//4. xmrtn
let var1 ; //변수를 선언할떄 초기(처음)에 값을 대입(=)하지 않았다.
console.log(var1) //변수는 존재하지만 값이 없다
let var2 = null ; //null vs 0 vs "" vs undefined 다 다름
console.log(var2) //변수의 데이터가 유효하지 않는다 

// 5. 배열 :  여려개 자요들을 *순서*대로 저장하는 *자료*
let ary1 = [`봄`,`여름`,`가을`,`겨울`]; // let ary1 : 변수명 (선언/만들기)
// = 대입
// 봄,여름 등등 : 자료
// []]: 배열
// 6. 인덱스 : 배열내 저장된 순서번호 0번부터시작, 무조건 순차적으로 중간에 삭제되어도 한칸씩 당겨짐 
console.log( ary1 [0]); //배열내 자료가 4개이면 길이:4 인덱스: 0~3

//7. 배열내자료(요소) 수정: 변수명(수정할인덱스) = 새로운 값
ary1[ 0 ] = `spring`;
console.log(ary1[0]) 

//8. 배열내 자료 추가 : 변수명.push(새로운값), 마지막 인덱스 뒤로 추가됨
ary1.push(`spring2`);
console.log(ary1[5]) //세미콜론: 한문장의 마침표 의미. 한줄에 두문장이면 ;세미콜론 필수

//9. 배열내 자료 삭제 : 변수명.splice(삭제할 인덱스, 개수)
ary1.splice( 2 , 1 )
console.log(ary1)

//10. 배열내자료 중간 삽입 : 변수명.splice(삽입할인덱스 , 0 , )
ary1.splice( 2 , 0 , `Rose`)
console.log(ary1)

//11. 배열내 자료 값 찾기 : 변수명.indexof(찾을값) , 찾을 값이 존재하면 인덱스반환 없으면 -1
let result = ary1.indexOf(`Rose`); console.log(result)

//12. 배열내자료 개수 반환 : 변수명.length , 배열내 자료 총개수 반환
console.log(ary1.length) 

//13. 형변환, 다른 프로그래민/환경 통신간의 데이터 변환 다수 발생

let input = prompt("숫자 : "); //prompt : 무조건 문자열로 반환된다.
console.log(typeof input); //100 -> string(문자열)
input = (input *1);
console.log(typeof input); // 숫자열로 변환 number(숫자열) 방법1
input = Number(input); //문자를 숫자로 변환시키는 방법 2
console.log(typeof input);

console.log(Numver("100")); // "100"->100
console.log(parseInt("100")); // "100"->100
console.log(parseFloat("3.14")); //"3.14"-> 3.14
console.log(String(100)); // 100->"100"
console.log(100+""); //100->"100"
console.log(Boolean("true")); //"true" ->true