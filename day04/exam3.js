// {1} 조건문 : 조건이 true 이면 코드실행
// 1. vs삼항연산자 복잡하고 다양한 논리 할때 가독성이 떨어진다
// 2. true 와 false (항) 함수호출 또는 변수선언 불가능

//10>5 ? console.log("참") ; : console.log("거짓");

if(10 > 3 ) console.log("[1-1] 참1 ");
if(10 > 20) console.log("[1-2] 참2 ")

// {2} 명령어 문장( ; )이 2개 이상이면 { }중괄호로 묶어라
if( 10 > 3){
            console.log("[2-1] 참1") ;
            console.log("[2-2] 참2") ;
}

// {3] 조건이 참일떄 거짓일때(else)
if(10>30) { console.log("[3-1] 참1")}
else{ console.log("[3-2] 거짓2");}

// {4} 조건이 다수일떄 , if(조건1) {} else if (조건2) {} else if (조건3) {} else{}
// 여러 조건들 중에 하나 의 참 또는 거짓을 얻는다
if(10>20){console.log("[4-1] 참1")}
else if(10>15){ console.log("[4-2] 참2");}
else if(10>10){ console.log("[4-3] 참3");}
else if(15>5){ console.log("[4-4] 참4");}
else{console.log("[4-5] 그외(거짓)");}
// 여러 조건들 중에 여러 참 ㄸ는 거짓을 갖는다
if(10>20){console.log("[4-1] 참1")}
if(10>15){ console.log("[4-2] 참2");}
if(10>10){ console.log("[4-3] 참3");}
if(15>5){ console.log("[4-4] 참4");}
else{console.log("[4-5] 그외(거짓)");}