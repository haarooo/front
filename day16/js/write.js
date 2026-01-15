function boardWrite(){
    //1. 입력 마크업 객체 가져오기
    const titleInput = document.querySelector("#titleInput");
    const contentInput = document.querySelector("#contentInput");
    const pwdInput = document.querySelector('#pwdInput');
    //2. 입력 마크업 객체내 입력값 가져오기
    const title = titleInput.value ;
    const content = contentInput.value ;
    const pwd = pwdInput.value ;
    //3.객체화
    const obj = {title , content , pwd}
    //4. localStorage에서 배열 가져오기
    let boardList = localStorage.getItem('boardList')
    if(boardList == null){boardList=[]}
    else{boardList = JSON.parse(boardList)}
    //5. 객체를 배열에 저장
    obj.no = boardList.length == 0 ? 1 : boardList[boardList.length-1].no +1
    boardList.push(obj);

    localStorage.setItem('boardList' , JSON.stringify(boardList));

    alert('게시물 작성 성공');
    location.href='list.html'
}