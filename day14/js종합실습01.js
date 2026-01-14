/*
3. 핵심 기능
초기 데이터 표시:
    사용자가 페이지에 처음 방문했을 때, 카테고리 선택 메뉴에는 두 개의 예시 카테고리('음료', '과자')가 기본적으로 표시되어 있어야 합니다.
    제품 목록 표에는 사용법을 쉽게 이해할 수 있도록 네 개의 예시 제품이 기본적으로 표시되어 있어야 합니다.
제품 등록 기능:
    사용자가 '등록 영역'에 카테고리, 제품명, 가격을 모두 입력하고 "등록" 버튼을 클릭하면, 해당 제품이 '목록 영역' 표에 새로운 행으로 즉시 추가되어야 합니다.
    제품 등록 시, 등록 날짜는 현재 날짜로 자동 기록되어야 합니다.
    첨부된 이미지는 목록의 '이미지' 열에 표시되어야 하며, 이미지를 첨부하지 않은 경우 기본 이미지가 대신 표시되어야 합니다.
제품 관리 기능:
    삭제: 각 제품의 "삭제" 버튼을 클릭하면 해당 제품이 목록에서 즉시 제거되어야 합니다.
    수정: "수정" 버튼을 클릭하면, prompt 창을 통해 새로운 제품명과 가격을 입력받아 해당 제품의 정보를 수정하고 목록을 즉시 갱신해야 합니다.
*/

/* [1] 메모리 설계 , 표/테이블 = 배열 , 표제목 = 속성명 , 행/가로 1개 = 객체 1개  , 기능(삭제/수정) 은 메모리가 아니다. */
// 1. 저장할 데이터 들을 객체 구성 
// { "image" : "https://placehold.co/100x100" , "category" : 1 , "name" : "코카콜라" , "price" : 1000 , "date" : "2026-01-14" }

// 2. 각 객체들 간의 식별(구분=주민등록번호/사번/학번 등등) 1개 이상 필요 , 단] 중복이 없는 속성으로 선택!
// pcode : productCode 제품코드 로써 삭제 와 수정시 식별 용도 사용 
// { pcode : 1 , "image" : "https://placehold.co/100x100" , "category" : 1 , "name" : "코카콜라" , "price" : 1000 , "date" : "2026-01-14" }

// 3. 테이들 간의 연관관계 구성 
// 카테고리테이블(상위) --> 제품테이블(하위) , 제품테이블의 ccode는 카테고리테이블의 ccode 를 참조(교집합)한다.
// { "ccode" : 1 , "category" : "음료" }
// { "pcode" : 1 , "image" : "https://placehold.co/100x100" , "ccode" : 1 , "name" : "코카콜라" , "price" : 1000 , "date" : "2026-01-14" }

// 4. 객체가 다수 일때는 배열 사용한다.
const categoryAry = [ { "ccode" : 1 , "category" : "음료" } , { "ccode" : 2 , "category" : "과자" }  ]
const productAry = [
    { "pcode" : 1 , "image" : "https://placehold.co/100x100" , "ccode" : 1 , "name" : "코카콜라" , "price" : 1000 , "date" : "2026-01-14" },
    { "pcode" : 2 , "image" : "https://placehold.co/100x100" , "ccode" : 2 , "name" : "사이다" , "price" : 1500 , "date" : "2026-01-15" }
]

// [2] 기능/함수 설계 
// 1. 함수/기능 개수  , 등록[C]기능 , 출력[R]기능 , 수정[U]기능 , 삭제[D]기능 
// 2. 등록함수 : 매개변수 : x 리턴값 : x 입력받은 개와 현재시스템 날짜를 객체로 만들어서 배열에 저장 , 실행조건은 : 등록버튼 클릭하면
// 3. 출력함수 : 매개변수 : x 리턴갑 : x 처리 : 배열내 모든 객체들을 tr구성하며 출력 , 실행조건 : 1. 페이지 열릴때 2. 등록성공했을때 3. 삭제/성공했을때 4. 수정성공했을때
// 4. 수정함수 : 매개변수 : pcode(수정할대상) , 리턴값 : x 처리 : 수정할 값을 prompt로 받아서 매개변수의 제품을 수정
                // 실행조건 : 수정버튼 클릭하면
// 5. 삭제함수 : 매개변수 : pcode(삭제할대상) , 라턴값 : x 처리 : 매개변수의 제품 삭제
                // 실해조건 : 삭제버튼 클릭하면

// [3] 구현 
//1. 출력함수 : 어디에 무엇을 출력하는지?
productPrint(); //js가 열렸을때 최초 1번 함수 실행
function productPrint(){
    //1. 어디에
    const tbody = document.querySelector("tbody")
    //2, 무엇을
    let html = "" ;
    for(let index = 0  ; index <= productAry.length -1 ; index++){
        const product = productAry[index];
        html += `<tr>
                    <td><img class="img" src="${product.image}" width= 100px height= 100px ;/>
                    <td>${product.ccode}</td> <td>${product.name}</td> 
                    <td>${product.price}</td> <td>${product.date}</td> 
                    <td><button onclick="productDelete(${product.pcode})" class="btn b1">삭제</button> 
                    <button onclick="productUpdate(${product.pcode})" class="btn b2">수정</button> </td>
                 </tr>`
    }
    //3. 출력
    tbody.innerHTML = html;
}

//2. 삭제함수
function productDelete(pcode){
    //1. pcode의 배열내 인덱스 찾기
    for(let index = 0 ; index <= productAry.length -1 ; index++){
        if(pcode == productAry[index].pcode){
            productAry.splice(index , 1)
            productPrint();
            break ;
        }
    }
}

//3. 수정함수 해당하는 행의 수정 버튼을 클릭하면 수정(배열변수명.[인덱스].속성명 = 새로운값)
function productUpdate(pcode){
    //1. 수정할 pcode의 인덱스를 배열에서 찾는다<순회>
    for(let index = 0 ; index <= productAry.length-1 ; index++){
        if(pcode == productAry[index].pcode){
            const newname = prompt("수정할 상품명")
            const newprice = prompt("수정할 가격")
            productAry[index].name = newname;
            productAry[index].price = newprice;
            productPrint();
            break; 
        }
    }
}


//4. 등록함수 입력받은 값들을 객체구성하여 배여렝 저장(.push)
let pcode = 3;
function productAdd(){ 
    const categorydom = document.querySelector(".category")
    const category = categorydom.value ; 
    const namedom = document.querySelector(".name")
    const name = namedom.value ; 
    const pricedom = document.querySelector(".price")
    const price = pricedom.value ; 
    const imagedom = document.querySelector(".image")
    const image = imagedom.files[0] ; //업로드한 파일 중에서 첫번째 파일을 호출 
    if(category == "disabled"){ alert("카테고리를 선택하세요.!"); return;}
    if(name == "" || price == ""){ alert("제품명과 가격은 필수입니다"); return;}
    // new date() 현재 시스템 날짜/시간 변환
    const year = new Date().getFullYear() ; 
    const month = new Date().getMonth()+1 ; 
    const day = new Date().getDate() ; //Day:요일 Date:일수
    const date = `${year}-${month < 10 ? "0"+month : month}-${ day < 10 ? "0"+day : day}`
    pcode+= 1; ;
    const obj = { "pcode" : pcode , "image" : image == undefined ? "https://placehold.co/100x100" : URL.createObjectURL(image) , "ccode" : category , 
                  "name" : name , "price" : price , "date" : date}
    productAry.push(obj);
    console.log(obj)
    productPrint();
}