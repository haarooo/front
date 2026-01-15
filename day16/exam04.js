/*
    쿼리스트링 : 페이지 이동(요청)간의 데이터 전달  
    1. URL ? 변수명 = 값
        http://www.naver.com ? name = 유재석
    2. 주로 이동할 페이지에서 사용할 식별 데이터를 보낸다

    3. 여러개 가능
    URL > 변수명 = 값 & 변수명 = 값

    4. 원래 주소상의 쿼리스트 값 가져오기
        new URLSearchParams(location.search).get("변수명")

    5. 전달하는 방법
        1. HTML : <a
        2. js : location.href="이동명HTML파일명 ? 변수명 = 값" 
*/
// 1. 주소(URL)상의 쿼리스트링(매개변수)값
const name = new URLSearchParams(location.search).get("name")
console.log(name)

//2
function 이동함수(){
    location.href = "exam04.html?name=강호동"
}

