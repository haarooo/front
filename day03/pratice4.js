//밑변과 높이를 각각 prompt 함수로 입력받아, 삼각형의 넓이를 계산하여 콘솔에 출력하는 프로그램을 작성하시오.
//삼각형 넓이 공식: 밑변 * 높이 / 2
/*
let n1 = Number(prompt(` 밑변 : `))
let n2 = Number(prompt(` 높이 : `))
let result10 = ( n1 * n2 /2)
console.log(result10) */

//섭씨 온도를 prompt 함수로 입력받아, 화씨 온도로 변환하여 콘솔에 출력하는 프로그램을 작성하시오.
//화씨 변환 공식: (섭씨 온도 * 9 / 5) + 32
/*
let n1 = prompt(` 섭씨 온도 : `)
let result11 = (n1 * 9 /5 +32)
console.log(result11) */

//태어난 년도를 prompt 함수로 입력받아, 2025년 기준 현재 나이를 계산하여 콘솔에 출력하는 프로그램을 작성하시오.
//나이 계산 공식: 2025 - 태어난 년도

/*
let n1 = prompt(` 태어난년도 : `)
let result12 = ( 2025 - n1 )
console.log(result12)
*/

/*
키(cm)와 몸무게(kg)를 각각 prompt 함수로 입력받아 BMI 지수를 계산하여 콘솔에 출력하는 프로그램을 작성하시오.
BMI 지수 공식: 몸무게(kg) / (키(m) * 키(m))
*힌트: 키는 cm 단위로 입력받지만, 공식에는 m 단위가 사용됩니다. 키(cm) / 100을 통해 단위를 변환해야 합니다.
*/

/*
let n1 = prompt(` 키 : `)
let n2 = prompt(` 몸무게 : `)
let result13 = ( n2 / ((n1 / 100) * (n1 / 100)))
console.log(result13)
*/

//아이디와 이메일을 prompt 함수로 입력받습니다. 아이디가 'admin'이거나 또는 이메일이 'admin@test.com'이면 '관
//리자'를, 그렇지 않으면 '일반 사용자'를 콘솔에 출력하는 프로그램을 작성하시오.
/*
let id = prompt( ` 아이디 : `)
let em = prompt( ` 이메일 : `)
let result15 = (id == `admin` || em == `admin@test.com` ? `관리자` : `일반 사용자`)
console.log(result15)
*/

/*
100점 만점의 점수를 prompt 함수로 입력받아, 점수에 따라 아래와 같이 등급을 부여하고 HTML 문서에 <h2> 태그로 출력
하는 프로그램을 작성하시오.
90점 이상: 'A'
80점 이상 90점 미만: 'B'
70점 미만: 'C'
*/
/*
let 점수 = Number(prompt(` 점수 : `))
let result16 = ((점수 >= 90) ? `A` : (점수>=80) ? `B` : (점수 <70) ? `C` : ``)
document.querySelector(`h2`).innerHTML=result16
console.log(result16)
*/

//나이를 prompt로 입력받아, 20대 (20세 이상 그리고 29세 이하)에 해당하는 경우 "이벤트 대상입니다."를, 그렇지 않으면
//"이벤트 대상이 아닙니다."를 콘솔에 출력하는 프로그램을 작성하시오.
/*
let 나이 = Number(prompt(` 나이 : `))
let result17 = (나이 >= 20 && 나이 <=29 ? `이벤트 대상입니다` : `이벤트 대상이 아닙니다`)
console.log(result17)
*/


/*
'좋아요' 수를 저장하는 likeCount 변수를 3으로 선언하고, 증감 연산자(++)를 사용하여 변수의 값을 1 증가시킨 뒤, "좋아
요: [숫자]" 형식으로 새로운 '좋아요' 수를 콘솔에 출력하는 코드를 작성하시오.
let likeCount = 3;
*/
/*
let likeCount = 3
console.log(`좋아요 : ${++likeCount}`)
*/

/*
다음과 같이 할 일 목록이 담긴 todoList 배열이 있습니다. prompt를 사용하여 새로운 할 일을 입력받아 배열의 마지막에
추가한 후, 변경된 배열 전체를 콘솔에 출력하는 프로그램을 작성하시오.
초기 배열: let todoList = ['장보기', '과제하기'];
힌트: 배열에 요소를 추가할 때는 .push() 메소드를 사용합니다.
*/

/*
let todoList = [`장보기` , `과제하기`]
let 할일 = prompt(` 할일 : `)
todoList.push(할일)
console.log(todoList)
*/


/*
다음과 같이 대기자 명단이 담긴 waitingList 배열이 있습니다. 배열의 마지막에 있는 사람의 이름을 찾아 "마지막 대기자
는 [이름]입니다." 형식으로 콘솔에 출력하는 프로그램을 작성하시오.
초기 배열: let waitingList = ['김민준', '이서연', '박도윤', '최지우'];
힌트: 배열의 마지막 요소 인덱스는 배열.length - 1 입니다.
*/
/*
let waitingList = [`김민준` , `이서연` , `박도윤` , `최지우`]
let 마지막인덱스 = waitingList.length-1 
console.log(`결과10 : 마지막 대기자는 ${ waitingList[ 마지막인덱스] }`)
*/ 
// 문제