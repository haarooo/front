// 1. 객체 선언 = { }
// 2. 선언한 객체를 변수에 대입
let obj1 = { }; 
// 3. 객체 선언과 동시에 속성{속성명 : 값} 정의/구성
// 3-1: 속성명과 속성값은 하나의 쌍(엔트리=entry) 이며 , 쉼표로 쌍 구분
// 3-2: 속성명은 문자취급하며 , 특수문자가 들어간 경우 "" or ''로 감싼다.
// 3-3 : 속성명은 자료(속성값)를 식별하는 목적으로 동일한 객체내 중복 불가능하다.
let obj2 = { 속성명1 : 10 , 속성명2 : "hello"}
//4. 객체 호출 .(접근/도트 연산자)란 앞에있는 항의 주소값(위치)를 호출
console.log(obj2);
console.log(obj2.속성명1);//객체변수명.속성명 = 속성값  obj2.= obj로 이동해라 , obj2.속성명1 : obj2로 이동해서 속성명1 호출
console.log(Object.keys(obj2));//객체내 모든 속성명 호출
console.log(Object.values(obj2));// 모든 값 호출
console.log(Object.entries(obj2));//모든 엔트리 호출

//객체 속성(엔트리) 추가 = 객체변수명.새로운속성명 = 값
obj2.속성명3 = true;
//객체 속성 값 수정 객체변수명.수정할속성명  = 새로운값 , 주의할점:  수정할 속성명이 존재하지 않으면 추가
obj2.속성명3 = false;
//객체 속성 삭제
delete obj2.속성명3
// 객체 속성 내 자료는 모든 자료형(타입)이 가능하다
let obj3 = {a : 1 , 0 : "안녕" , c: true , d : [1 , 2] , e : {aa : 1 , bb : "녕안"}}
console.log(obj3)
// in 연산자 , 해당 객체 내 속성이 있는지 확인 true /false 로 대답
console.log( 'f' in obj3)
console.log( 'a' in obj3)

