/*예제 1: 자기소개 객체 만들기
자신의 이름(name), 나이(age), 사는 곳(city)을 속성으로 갖는 person이라는 이름의 객체를 만들고, console.log()로 객체 전체를 출력하시오.*/

let person = { name: "유재석" , age: 40 , city: "안양시"}
console.log(person)



/*예제 2: 객체의 값(Value) 출력하기
다음과 같은 book 객체가 있습니다. 반복문을 사용하여 이 객체의 모든 값 을 하나씩 콘솔에 출력하시오.
const book = { title: 'Cracking the Coding Interview', author: 'Gayle Laakmann McDowell', pages: 500 };*/

const book = { title: 'Cracking the Coding Interview', author: 'Gayle Laakmann McDowell', pages: 500 };
let values = Object.values(book)
for(let index = 0 ; index <= values.length -1 ; index++){
    console.log(values[index])
}


/*예제 3: 객체에 속성 추가 및 삭제하기
person 객체에 이메일(email) 주소를 추가합니다. , person 객체에서 나이(age) 속성을 삭제합니다.최종적으로 수정된 person 객체를 콘솔에 출력하시오.
const person = { name: '김코딩', age: 25, }; */

const person2 = { name: '김코딩', age: 25, };
person2.email = "pshb200137@gmail.com"
delete person2.age
console.log(person2)


/* 예제 4: 객체 속성 값 계산하기
다음 product 객체는 상품의 이름, 가격, 재고량을 나타냅니다. 이 객체의 총 자산 가치(가격 * 재고량)를 계산하여 콘솔에 출력하시오.
const product = { name: '노트북', price: 1200000, stock: 50 }; */
const product = { name: '노트북', price: 1200000, stock: 50 };
const asset = product.price * product.stock
console.log(asset)



/* 예제 5: 대괄호 표기법 사용하기
다음 user 객체가 있습니다. 대괄호 표기법을 사용하여 job-title 속성의 값('개발자')을 콘솔에 출력하시오.
const user = { name: '김코딩','job-title': '개발자'}; */
const user = { name: '김코딩','job-title': '개발자'};
console.log(user["job-title"])


/*예제 6: 중첩된 객체 다루기
다음 student 객체에서 학생이 사는 도시(city)의 이름('Seoul')을 콘솔에 출력하시오.
const student = {  name: '이학생', age: 25, address: { city: 'Seoul', zipCode: '12345' } };*/
const student = {  name: '이학생', age: 25, address: { city: 'Seoul', zipCode: '12345' } };
console.log(student.address.city)


/* 예제 7: 객체에 특정 속성이 있는지 확인하기(  in 연산자 )
character 객체에 level이라는 속성이 있는지 in 연산자를 사용하여 확인하고, 결과를 true 또는 false로 콘솔에 출력하시오.
const character = {  name: '전사', hp: 200, mp: 50 }; */
const character = {  name: '전사', hp: 200, mp: 50 }; 
console.log('level' in character)


/* 예제 8: Object.keys()와 Object.values()
country 객체의 모든 키(key) 들을 배열로 만들어 출력하고, 모든 값(value) 들을 또 다른 배열로 만들어 콘솔에 각각 출력하시오.
const country = {name: '대한민국', capital: '서울', population: 51780000 }; */
const country = {name: '대한민국', capital: '서울', population: 51780000 };
console.log(Object.keys(country))
console.log(Object.values(country))

/* 예제 9: 객체와 조건문 활용하기
다음 inventory 객체는 각 상품의 재고를 나타냅니다. for 반복문과 if 조건문을 사용하여 재고가 10개 미만인 상품의 이름을 콘솔에 출력하시오.
const inventory = { apple: 15, banana: 5, orange: 20, grape: 8 }; */
const inventory = { apple: 15, banana: 5, orange: 20, grape: 8 };
const keys = Object.keys(inventory)
for(let index = 0 ; index <= keys.length -1 ; index++){
    if(inventory[keys[index]] < 10){console.log(keys[index])}
}



/* 예제 10: 객체 배열 순회하기
다음은 여러 학생의 정보를 담은 students 배열입니다. for 반복문을 사용하여 각 학생의 이름과 전공을 "이름: 전공" 형태로 콘솔에 출력하시오.  
const students = [ { name: '김철수', major: '컴퓨터공학' },  { name: '이영희', major: '경영학' },  { name: '박지성', major: '체육교육' } ];*/
const students = [ { name: '김철수', major: '컴퓨터공학' },  { name: '이영희', major: '경영학' },  { name: '박지성', major: '체육교육' } ];
for(let index = 0 ; index <= students.length -1 ; index++){
    const student = students[index]
    console.log(`${student.name}: ${student.major}`)
}



/* 예제 11: 공공데이터 포털 : 인천 부평구 인구 현황 테이블 만들기
[구현 조건]
  1. 공공데이터 포털에서 '인천광역시 부평구_인구 현황' 의 open API 신청하여 결과를 복사하여 'response' 변수에 저장하시오.
  let response = {}
  2. response 객체 안의 data 배열을 반복문을 사용하여 순회합니다.
  3. 각 동(행)의 정보를 표시할 HTML <table> 태그를 문자열로 만듭니다.
  4. 테이블의 각 셀에는 '동별', '세대수', '인구수(계)', '인구수(남)', '인구수(여)' 정보가 순서대로 포함되어야 합니다.
  5. 최종적으로 완성된 HTML 테이블 문자열을 document.write() 사용하여 화면에 출력합니다.
[ 공공데이터 open API 신청 ]
  1. 공공데이터 포털 : https://www.data.go.kr
  2. 회원가입/로그인
  3. '부평구 인구' 검색
  4. '인천광역시 부평구_인구 현황' Open API를 찾아 [활용신청] 버튼을 누르고, 절차에 따라 인증키를 발급받습니다.
  5. 인증키 설정 ( Encoding , Decoding 순서대로 대입하여 설정 )
  6. 인증키 설정 후 'API 목록' 에서  [Open Api 호출] 합니다.
  7. **실행 결과(JSON)**를 전체 복사합니다.  
*/

let response = {"currentCount":10,"data":[{"데이터기준일자":"2025-01-31","동별":"부평1동","세대수":17196,"인구수(계)":34809,"인구수(남)":16671,"인구수(여)":18138},{"데이터기준일자":"2025-01-31","동별":"부평2동","세대수":7793,"인구수(계)":15326,"인구수(남)":7594,"인구수(여)":7732},{"데이터기준일자":"2025-01-31","동별":"부평3동","세대수":7381,"인구수(계)":14889,"인구수(남)":7379,"인구수(여)":7510},{"데이터기준일자":"2025-01-31","동별":"부평4동","세대수":17750,"인구수(계)":33475,"인구수(남)":16530,"인구수(여)":16945},{"데이터기준일자":"2025-01-31","동별":"부평5동","세대수":16357,"인구수(계)":33137,"인구수(남)":16287,"인구수(여)":16850},{"데이터기준일자":"2025-01-31","동별":"부평6동","세대수":8469,"인구수(계)":17339,"인구수(남)":8527,"인구수(여)":8812},{"데이터기준일자":"2025-01-31","동별":"산곡1동","세대수":6476,"인구수(계)":14753,"인구수(남)":7265,"인구수(여)":7488},{"데이터기준일자":"2025-01-31","동별":"산곡2동","세대수":10680,"인구수(계)":29107,"인구수(남)":14264,"인구수(여)":14843},{"데이터기준일자":"2025-01-31","동별":"산곡3동","세대수":8521,"인구수(계)":20016,"인구수(남)":9659,"인구수(여)":10357},{"데이터기준일자":"2025-01-31","동별":"산곡4동","세대수":6558,"인구수(계)":16457,"인구수(남)":7828,"인구수(여)":8629}],"matchCount":22,"page":1,"perPage":10,"totalCount":22} 
let data = response.data;
let html = `<table>`
for( let index = 0 ; index <= data.length -1 ; index++){
  let row = data[index] ;
  
  console.log(row); 
  console.log(row.동별 , row.세대수 , row["인구수(계)"])
  html += `<tr>
            <td> ${row.동별} </td> <td> ${row.세대수} </td> <td> ${row["인구수(계)"]} </td> <td> ${row["인구수(남)"]} </td> <td> ${row["인구수(여)"]}
           </tr>`  
         
}
html += `</table>`
document.writeln(html)
