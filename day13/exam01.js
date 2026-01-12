//1. 함수
//한번 넣어둔 숫자/코드를 재사용(공식 , 라이브러리/API)

//함수 만들기
/*
function 함수명(){
    console.log("함수명") // 중괄호 안에 미리 정의할 코드
} //fun end
*/
//함수명( ); //함수 호출 방법


//함수 종류: 1.내가만든함수 2. 남이만든함수(console.log alert 등)

//함수 예
/*
function 믹서기(과일){
    let 주스 = 과일 + "주스"; //믹서기 함수가 처리하는 코드 정의/만들기
    return 주스; //처리된 결과를 반환
}
let 컵 = 믹서기("사과") //믹서기 함수에 사과라는 문자열을 전달했다: 인자값(인수) ====> 중재 ===> 매개변수
//참고 : "사과"이면 자료 , 사과: 변수/함수
let data = "딸기"
let 컵2 = 믹서기함수(data);
*/

//매개변수 x 반환 x
/*
function func1( ){ console.log("func1 exe")}
func1();

//매개변수 O 반환 X ex: console.log()
function func2( x , y){console.log("func2 exe")}
func2( 3, 5)
//매개변수 O 반환 O ex: prompt()
function func3( x , y ){ console.log("func3 exe"); return x + y;} 
let result1 = func3( 3 , 5 )
//매개변수 x 반환 O
function func4( ){console.log("func4 exe"); return 10;}
let result2 = func4( );


let 전역변수 = "대한민국"
if(true){
    let 지역변수1 = "경기도"
    console.log(지역변수1)
    for( let i = 0 ; i <1 ; i++){
        let 지역변수2 = "안양시"
        console.log(지역변수2)
    }
}

function func5(지역변수3){
    let 지역변수4 = "수원시"
    console.log(지역변수4)
}
func5("안산시")
*/

//함수 호출/사용 하는 방법
//alert("js에서 실행")
//html에서 호출: <마크업명 이벤트 속성명 = "함수명()"
//onclick: 해당 마크업 클릭했을때 (이벤트)발생

/*예제 1: 기본 함수 선언 및 호출
'함수 호출 성공!'이라는 메시지를 콘솔에 출력하는 sayHello 라는 이름의 함수를 정의하고, 그 함수를 호출하시오.*/
// [매개변수]무엇을 넣고 [명령어]무엇을 처리하고 [반환값]무엇을 반환할지
/*
function sayHello(){
    console.log("함수 호출 성공")
}
sayHello();
*/

/*예제 2: 매개변수를 사용하는 함수
임의의 두 개의 숫자(number)를 매개변수로 받아, 그 합을 콘솔에 출력하는 printSum 함수를 정의하시오. printSum(5, 10)을 호출하여 결과를 확인하시오.*/
/*
function printSum( x , y){
    console.log(x+y)
}
printSum(5 , 10) 
*/
/*예제 3: 값을 반환(return)하는 함수
임의의 이름을 문자열(string)로 매개변수를 받아 "환영합니다, [이름]님!" 형식의 문자열을 반환하는 getWelcomeMessage 함수를 정의하시오.
함수를 호출한 결과를 변수에 저장하고, 그 변수를 콘솔에 출력하시오. */
/*
function getWelcomeMessage(name){
    return `환영합니다, ${name}님!`;
}
let result3 = getWelcomeMessage("유재석");
console.log(result3);
*/
/*예제 4: 함수를 이용한 카운터
0의 값을 가진 counter라는 전역 변수를 만드시오. 호출될 때마다 counter의 값을 1씩 증가시키는 increaseCount 함수를 정의하시오.
함수를 세 번 호출한 뒤, counter의 값을 콘솔에 출력하여 3이 되었는지 확인하시오.*/
/*
let counter = 0
function increaseCount( ){
    counter+=1;
}
increaseCount();
increaseCount();
increaseCount();
console.log(counter)
*/
/*예제 5: for 반복문을 포함한 함수
임의의 숫자 n을 매개변수로 받아, 1부터 n까지의 숫자를 콘솔에 차례대로 출력하는 printNumbers 함수를 정의하시오.*/
/*
function printNumbers(n){
    for( let i = 0 ; i <= n ; i++){
        console.log(i)
    }
}
printNumbers(5);
*/

/*예제 6: prompt와 함수 활용
prompt를 이용해 사용자로부터 이름을 입력받으시오. 입력받은 이름을 매개변수로 받아, 해당 이름이 저장된 userList 전역 배열에 push하는 addUser 함수를 정의하고 호출하시오.*/
/*
let userList = []
function addUser(name){
    userList.push(name);
}
let name = prompt("이름 : ")
addUser(이름);
console.log(userList)
*/

/*예제 7: 배열을 매개변수로 전달
임의의 이름 들이 담긴 배열을 매개변수로 받아, for 반복문을 사용하여 배열의 모든 요소를 콘솔에 하나씩 출력하는 printFruits 함수를 정의하시오. */
/*
function printFruits(list){
    for(let index = 0 ; index <= list.length -1 ; index++)
        console.log(list[index])
}
printFruits(nameList) ;
*/


/*예제 8: Boolean 값 반환하기
임의의 숫자 하나를 매개변수로 받아, 그 숫자가 0보다 크면 true를, 그렇지 않으면 false를 반환하는 isPositive 함수를 만들어 보세요. */
/*
function isPositive(i){
    if( i > 0){return true;}
        else{return false;}
}
isPositive(3)
let result5 = isPositive(-1);
console.log(result5)
*/



/*예제 9: 전역 변수와 지역 변수
let globalText = '전역'; 변수를 선언하세요. printLocal 함수 안에서는 let localText = '지역'; 변수를 선언하고, 
두 변수를 모두 콘솔에 출력해 보세요. 함수 바깥에서는 globalText만 출력되는 것을 확인하세요.  */
/*
let globalText = "전역"
function printLocal(){
    let localText = "지역"
    console.log( globalText);
    console.log( localText);
}
console.log(globalText);
*/