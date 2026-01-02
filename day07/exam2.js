// 1. "안녕하세요" 5번 출력하세요
console.log(" 안녕하세요 ") ;
console.log(" 안녕하세요 ") ;
console.log(" 안녕하세요 ") ;
console.log(" 안녕하세요 ") ;
console.log(" 안녕하세요 ") ; 
// 2. 반복되는 코드 , 반복되지 않는 코드
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5); //불편한점: 반복수가 늘어나면 코드도 같이 늘어남(비효율적)
//반복되는 코드 : console.log(?);
//반복되지 않는 코드 : 1,2,3,4,5
//반복되지  않는 코드의 패턴 : 1부터 5까지 1씩 증가
//초기값 : 1 , 조건문 : 5까지, 증감식 : 1씩, 반복코드 : console.log();
//초기값 : let i = 1;
//조건문 : i<=5;
//증감식 : i++;   *i++ = i+1 i+=1
//실행문 : {코드 ;} *반복자가 조건을 true일때 실행되는 코드
for(let 반복변수 = 1 ; 반복변수 <= 5; 반복변수 = 반복변수 + 1){
    console.log(반복변수);
} //for end

//3. 1부터5까지 총합계를 구하시오.
let 총합계 = 0; // 총합계를 저장하는 변수
총합계+= 1      // 
총합계+= 2
총합계+= 3
총합계+= 4
총합계+= 5
//반복되지 않는 코드 : let 총합계 = 0; , 1,2,3,4,5
//반복되는 코드 : 총합계+=
//반복되지 않는 코드 (증감)패턴 : 1부터 5까지 1씩 증가
//초기값 : let 더할값 = 1 ;
//조건문 : 더할값 <= 5 ;
//증감식 : 더할값 ++ ; 
//실행문 : 총합계+=
let sum = 0;
for( let i = 1 ; i<=5 ; i++){sum += i ;} 
//구구단 2단 전체 출력
console.log(` 2 x 1 = ${2*1}`)
//반복되는 코드 : console.log( ` 2 X ? =${ 2 * ?})
//반복되지 않는 코드 : 1,2,3,4 ...
//반복되지 않는 코드 : (증감) 패턴 : 1부터 9까지 1씩 증가
//초기값 : let 곱 = 1 ; //조건문 : 곱 <=9 ; //증감식 : 곱++; // 실행문: console.log( ` 2 X ? =${ 2 * ?})
for(let 곱 =1 ; 곱 <=9 ; 곱++){
    console.log( `2 x ${곱} = ${ 2 * 곱}`) 
}
//5. 배열 과 반복문 관계 : 배열내 저장된 자료들은 인덱스가 존재  *0번시작
//반복문 초기값 = 배열의 인덱스 = 0
//반복문 조건문과 배열문.length

let ary = [ ]
/*
let a = prompt(" 첫번째 값 : ")
let b = prompt(" 두번째 값 : ")
let c = prompt(" 세번째 값 : ")
ary.push( a ); //변수명.push(`새로운 값) : 배열내 자료추가
ary.push( b );
ary.push( c );
*/

for( let count = 1 ; count <= 3 ; count++){ let d = prompt( "값 : "); ary.push(d) ;}


for( let index = 0 ; index <= ary.length -1 ; index++){console.log(ary[index])}
