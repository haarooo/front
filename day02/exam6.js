// 1. 출력 기능/함수
console.log("안녕하세요1")
alert("안녕하세요1");
document.write("<h3> 안녕하세요 </h3>")
document. querySelector("h3").innerHTML = "안녕하세요2";



// 2. 입력 기능/함수
let 반환값1 =confirm(); // 확인/취소 버튼 제공 
let 반환값2 =prompt(); // 입력상자 제공 알림 주관식 답변 처럼, 사용자의 값이 변수에 저장

let 반환값3 = document.querySelector("h3").innerHTML = "안녕하지마"
console.log( 반환값3 );