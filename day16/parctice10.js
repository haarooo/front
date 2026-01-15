
// [1] 메모리 설계
// 1. 저장할 서로 더른 자료들을 하나의 객체로 구성
// { "no" : 1 , "id" : qwe , "pw" : "1234" };

// 2. 여러개 객체 들은 배열로 구성 

//let memberList = [{ "no" : 1 , "id" : "qwe" , "pw" : "1234" },{ "no" : 2 , "id" : "asd" , "pw" : "4567" },];

// 등록함수 구현 
function signup() {
    const signIdDom = document.querySelector("#signId");
    const id = signIdDom.value;
    const signPwDom = document.querySelector("#signPw");
    const pw = signPwDom.value;

    let memberList = localStorage.getItem("memberList");
    if (memberList == null) {
        memberList = [];
    } else {
        memberList = JSON.parse(memberList);
    }

    let no = memberList.length >= 1 ? memberList[memberList.length - 1].no + 1 : 1;
    let obj = { no, id, pw };
    memberList.push(obj);
    alert("회원가입 성공");

    localStorage.setItem("memberList", JSON.stringify(memberList));
}

function login() {
    const loginIdDom = document.querySelector("#loginId");
    const id = loginIdDom.value;
    const loginPwDom = document.querySelector("#loginPw");
    const pw = loginPwDom.value;

    let memberList = localStorage.getItem("memberList");
    if (memberList == null) {
        memberList = [];
    } else {
        memberList = JSON.parse(memberList);
    }

    for (let index = 0; index <= memberList.length - 1; index++) {
        const member = memberList[index];
        if (member.id == id && member.pw == pw) {
            alert("로그인 성공");
            return;
        }
    }
    alert("로그인 실패");
}