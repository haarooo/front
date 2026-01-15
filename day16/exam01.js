// 1. 다른 js파일에서 변수 또는 함수 사용 가능여부
// html에서 여러개 js파일
// <script src="test.js"></script>
// <script src="exam01.js"></script>
console.log(var1);
func1();

// 2. js는 html의 종속된 관계라서  새로고침을 하면 초기화(변수 재생성) -> 백엔드 필요
// 백엔드 없어 영구저장? -> 가능: 자동로그인 , 검색기록, 비회원제 장바구니, 최근 본 제품 등등

//웹스토리지 : f12 -> application(응용프로그램) 탭클립 -> 
// 로컬 저장소, 섹션 저장소, 쿠키 = 브라우저 저장소

//sessionStorage : 서로다른 html공유 안함, 모든 브라우저를 종료하면 자동 삭제
//localStorage : 서로 다른 html에서도 공유 단 주소가 동일할때



//2. 주요 기능함수 .setItem("key" , value) 
//                .getItem("key" , value)

console.log(sessionStorage)
console.log(localStorage)

//저장
sessionStorage.setItem( 'name' , '유재석') ;
localStorage.setItem('age' , 40); //f12 -> application -> 확인 가능
//호출
console.log(sessionStorage.getItem('name'))
console.log(localStorage.getItem('age'))
//삭제
sessionStorage.removeItem('name')
localStorage.removeItem('age')
//활용 : 복잡한 샘플 데이터
//세션/로컬 저장소는 문자열만 저장 가능 --->배열과 객체를 문자열로 변환---> json: 자바스크립트 객체기반의 문자열 형식
//js객체를 문자를 변경할때 =json.stringfy(객체,배열)
sessionStorage.setItem('회원목록' ,JSON.stringify([{name : "유재석" , age: 40},{name : "강호동" , age : 40} ]))
//json.parse=출력할때 value 객체로 출력가능
console.log(JSON.parse(sessionStorage.getItem('회원목록')));