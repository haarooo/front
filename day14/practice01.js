let 항목목록 =[]


//기능설계
//화면에 보이는 이벤트/행위 , 화면에 보이지 않는 이벤트/행위
//1. 등록 처리 하는 기능 
// 매개변수 : , 리턴값: , 처리;입력받은 3개 데이터를 객체로 만들어서 전역배열에 저장 
//2. 표에 출력 하는 기능
// 매개변수 : , 리턴값: , 처리; 현재 전역배열에 저장된 모든 객체를 tr로 구성하여 html출력 : ,발동조건= 등록성공했을때



//등록함수
function 등록함수(){ //1. 입력받은 값 가져오기 2. 입력받은 값들을 객체로 구성 3. 전역 배열에 저장 
 let datedom = document.querySelector(".날짜입력")
 let date = datedom.value
 let contentdom = document.querySelector(".항목입력")
 let content = contentdom.value
 let pricedom = document.querySelector(".금액입력")
 let price = pricedom.value
 let code = 1;
 if(항목목록.length > 1){
    code = 항목목록[항목목록.length-1].코드+1
 }
 let obj = {코드 : code , "날짜": date , "항목": content , "금액": price} 
 항목목록.push(obj)
 alert("등록성공")
 //출력함수
출력함수()
}


function 출력함수(){// 어디에: tobody 무엇을 : 배열내 객체들을 <tr>로구성 출력할건지: 구성된 html출력
   let 테이블본문 = document.querySelector(".테이블본문")
   let 무엇을 = ""
   for(let index = 0 ; index <= 항목목록.length -1 ; index++){
    let obj = 항목목록[index]
    무엇을 += `<tr>
                <td>${obj.날짜}</td><td>${obj.항목}</td><td>${Number(obj.금액).toLocaleString()}원</td>
            </tr>`
   }
테이블본문.innerHTML = 무엇을;
}
