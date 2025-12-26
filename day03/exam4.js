//1) 산술연산자 : +,-,*,/,%(나머지) 몫: parseInt
console.log( 10 + 3 );
console.log( 10 - 3 );
console.log( 10 * 3);
console.log( 10 / 3); //3.3333333333
console.log(parseInt(10/3)); //몫
console.log(10 % 3); // 나머지 1
// [지문1] prompt 함수로 국어 , 영어 , 수학 점수를 각 입력받아서 (각 변수에 저장하고) 총점 과 평균을 계산하여 console탭에 출력하시오.
// 1. 국어, 영어, 수학 점수 입력받기 (Number()를 이용해 숫자형으로 변환)
/*
let kor = prompt("국어점수 : ");
let eng = prompt("영어점수 : ");
let math = prompt("수학점수 : ");
let sum = Number(kor) + Number(eng) + Number(math) ;
let avg = sum / 3 ;
console.log(`result1 sum : ${sum} , avg : ${avg}`)
*/


// [지문2] prompt 함수로 반지름를 입력받아서 원넓이[반지름*반지름*3.14] 계산하여 console탭에 출력하시오.

//let radius = Number( prompt(`반지름 : `) )
//console.group( ` result2 : ${ radius} * 3.14`)


// [지문3] prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console탭에 출력하시오.
/*
let f1 = Number( prompt(`실수1 : `) );
let f2 = Number( prompt(`실수2 : `) );
let ratio = ( f1 / f2 ) * 100;
console.log( `result3 : ${ ratio }%`);
*/

// 2) 비교연산자 : >초과 <미만 >=이상 <=이하 ==(값) 같다 !=(값) 같지않다 ===(값과타입) 같다 !==(값과타입) 같지 않다
// 3) 논리연산자 : && 이면서(2개다 참이여야 참) || 이거나(하나만 참이여도 참) (엔터위의 키 쉬프트) | 부정
// && 이면서 이고 면서 그리고 모두, 모두 참이면 참 , 초등학생이 사탕이면서 초콜릿도
// || 이거나 거나 또는 하나라도, 하나라도 참이면 참 , 초등학생이 사탕이거나 초콜릿 하나라도 먹으면 참
// ! 부정 반대 not  true -> false, false-> true 
//주의할점 : 범위조건이 없음 50<정수<100 이런 표현식 없음 --> 점수> 50 && 정수 <100 이렇게 나눠서 

// [지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false 로 console탭에 출력하시오.
/*
let num = Number( prompt(`정수 : `) );
let isOdd = ( num % 2 === 1 );
console.log( `result4 : ${ isOdd }` );
*/



// [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.
/*
let r1 = Number( prompt(`정수 : `) );
let r7 = ( r1 % 7 === 0 );
console.log( `result5 : ${ r7}` );
*/

// [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 (입력받은)아이디가 'admin' 이고 (입력받은)비밀번호가 1234 와 일치하면 true / 아니면 false 출력하시오.
/*
let id = ( prompt(`아이디 : `))
let ps = ( prompt(`비밀번호 : `))
let ip = ( id == "admin" && ps == "1234")
console.log ( ` result6 : ${ip}`)
*/


// [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이면서 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.
/*
let y1 = ( prompt( `정수 : `))
let y2 = ( y1 % 2 == 1 && y1 % 7 == 0 )
console.log( `result7 : ${y2}`)
*/
// [지문8] 1차점수 와 2차점수 prompt함수로 각 입력받아서 총점이 150점이상이면 '합격' 아니면 '불합격' HTML의 <h3> 에 출력하시오.
/*
let t1 = (Number(prompt( ` 1차점수 : `)))
let t2 = (Number(prompt( ` 2차점수 : `)))
let t3 = ( t1 + t2 >=  150 ? `합격` : `불합격` )
console.log( ` result8 : ${t3}`)
document.querySelector(`h3`).innerHTML=t3
*/

// [지문9] 두 사람의 이름을 prompt함수로 각 입력받아서 만일 이름이 '유재석' 이면 뒤에 (방장) 이라고 이름 뒤에 붙이고 아니면 생략한다.  HTML의 <ol> 에 결과를 출력하시오.

let n1 = (prompt( ` 이름1 : `))
let n2 = (prompt( ` 이름2 : `))
let n3 = ( n1 == `유재석` ? `유재석(방장)` : ``)
console.log( ` result9 : ${n3}`)
document.querySelector(`ol`).innerHTML=n3
console.log