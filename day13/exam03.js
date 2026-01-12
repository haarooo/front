// 객체: 서로 다른 자료/값 들을 하나의 자료로 구성 
//객체종류: 1.내가만든객체 = {} 2.남이만든객체 = console , document
//남이만든객체 장점: <라이브러리> 미리 만들어진 함수/기능 많다
//document: js회사에서 HTMl조작할때 사용
console.log(document); //현재 html그자체로 출력<객체 표현>


//2. .write("안녕"): 매개변수:html 출력할 문자열
document.write("<h3> 내장객체 함수실행 </h3> ")

//3.document.querySelector("css선택자"): js에서 특정한 마크업 객체 반환함수
//매개변수 : css선택자 ; 반환값: 선택된 마크업 객체 없으면 undefiend
let div = document.querySelector("div")//HTML에서 div마크업 객체 가져오기
console.log(div);
let box2 = document.querySelector(".box2")
console.log(box2)

let box3 = document.querySelector("#box3")
console.log(box3)


//4 js에서 특정한 마크업들 배열로 반환
let div2 = document.querySelectorAll("div")
console.log(div2)

//5. innerHTML: 선택된 DOM 객체내 마크업 사이에 텍스트를 호출
let html1 = document.querySelector("#box3").innerHTML = "박스박스"
console.log(html1)
// value: 선택된 DOM객체내 마크업 value 속성값 호출
//6. 버튼 클릭시 입력받은 값 가져오기
function func1(){ //매개변수x
    let value = document.querySelector(".myinput").value;
    console.log(value + "입력 했군요.")
    document.querySelector(".myinput").value = ""
}//반환갑x
//js 에서 실행하는 방법 : let 결과 = 함수명(인자값);
// html 에서 실행하는 방법 : <마크업명 이벤트속성명 ='함수명(인자값)"
//value는 입력상자만 가능하다
function func2(){
    document.querySelector(".title").innerHTML   = "js에서 텍스트"
}

//7
function func3(){//한줄에 .(도트/접근연산자)가 많아지면 중간에 변수활용
    let title2 = document.querySelector(".title2");
    title2.style="color: red "
    title2.style.backgroundColor = "blue"
}
