/*예제 1: 요소 내용 변경하기
id가 'title'인 <h1> 요소의 내용을 'DOM 조작 성공!'으로 변경하시오.*/
//1. 특정한 마크업 가져오기
let titledom = document.querySelector("#title")
//2. 특정한 마크업내 텍스트 .innerhtml
titledom.innerHTML = "DOM 조작 성공!"

/*예제 2: 사용자 입력값 가져와서 표시하기
id가 'usernameInput'인 <input>에 이름을 입력하고 '확인' 버튼(id: 'submitBtn')을 클릭하면, id가 'greeting'인 <p> 태그에 "안녕하세요, [입력된이름]님!"이라고 표시하시오.*/
function func2(){
let usernamedom = document.querySelector("#usernameInput")
let username = usernamedom.value 
let greetingdom = document.querySelector("#greeting")
greetingdom.innerHTML = `안녕하세요 ${username}님!`
}

/*예제 3: 요소 스타일 동적으로 변경하기
'스타일 변경' 버튼(id: 'styleBtn')을 클릭하면, id가 'colorBox'인 <div>의 배경색을 'skyblue'로, 글자색을 'white'로 변경하시오.*/
function func3(){
    let boxdom = document.querySelector("#colorBox")
    boxdom.style.backgroundColor = "skyblue";
    boxdom.style.color = "white";
}

/*예제 4: CSS 클래스 토글하기 (다크 모드 예시)
'테마 변경' 버튼(id: 'themeBtn')을 클릭할 때마다 <body> 태그에 'dark-mode' 클래스를 추가하거나 제거(토글)하시오. */

function func4(){
    const bodydom = document.querySelector("body")
    bodydom.classList.toggle("dark-mode")
}


/*예제 5: 특정 HTML 요소 제거하기
'박스 삭제' 버튼(id: 'removeBtn')을 클릭하면, id가 'targetBox'인 <div> 요소를 문서에서 제거하시오. */
function func5(){
    let removedom = document.querySelector("#removeBtn")
    removedom.remove("#targetBox")
}

/*예제 6: 여러 요소에 동일한 작업 반복하기
클래스가 'item'인 모든 <p> 요소의 글자색을 'green'으로, 글자 두께를 'bold'로 변경하시오. */

let itemdom = document.querySelectorAll(".item")
for(let index = 0 ; index <= itemdom.length -1 ; index++){
    let item = itemdom[index];
    item.style.color = "green"
    item.style.fontWeight = "bold"
}


/*예제 7: 이미지 소스(src) 변경하기 , https://placehold.co/ 
'이미지 변경' 버튼(id: 'changeImgBtn')을 클릭하면, id가 'mainImage'인 <img> 요소의 src 속성을 'https://placehold.co/600x400/red/white'로 변경하시오. */
function func7(){
    const mainimgdom = document.querySelector("#mainImage")
    mainimgdom.src = "https://placehold.co/600x400/red/white"
}

/* 예제 8 : select 에서 선택한 option값 console 출력하기. */
//onchange = 값이 바뀌었을때
function func8(){
    const fooddom = document.querySelector("#foodSelect")
    const food = fooddom.value
    console.log(food)
}



/* 예제 9 : input 에서 입력받은 값을 전역 배열에 저장하고 배열 상태를 출력하기. */
const products = []
function func9(){
    const productdom = document.querySelector("#productInput")
    const product = productdom.value;
    products.push(product)
    const printdom = document.querySelector("#productPrint")
    printdom.innerHTML = products
}




///asdasd