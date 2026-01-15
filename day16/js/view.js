//1. 쿼리스트링에서 특정한 게시물 번호의 정보 조회
getBoard();
function getBoard(){
    //1. URL상의 웹주소 가져오기
    const url = new URLSearchParams(location.search);
    //2. 웹주소에서 선택된 게시물번호 가져오기
    const selectNo = url.get('no');
    //3. localStorage에서 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if(boardList == null){boardList = []}
    else{boardList = JSON.parse(boardList)};
    //4. 선택된 게시물 번호와 일치한 게시물 찾기
    for(let index = 0 ; index <= boardList.length -1 ; index++){
        const obj = boardList[index];
        if(obj.no == selectNo){ // 만약 내가 선택한 게시물 번호와 일치
          document.querySelector('#title').innerHTML=obj.title
          document.querySelector('#content').innerHTML=obj.content
          return  
 }
 }
}

//삭제함수
function boardDelete(){
    //1. URL(웹주소)의 경로 가져오기
    const url = new URLSearchParams(location.search);
    //2. 경로 상의 선택된 게시물번호(쿼리스트링) 가져오기
    const selectNo = url.get('no');
    //3. localStorage에서 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if(boardList == null){board=[]}
    else{boardList=JSON.parse(boardList);}
    //4. 배열내 선택된 게시물 번호가 존재하면
    for(let i = 0 ; i < boardList.length ; i ++){
        const obj = boardList=[i]
        if(obj.no == selectNo){//만약 선택된 게시물 번호를 찾았으면
        //5. 확인용 비밀번호를 입력받아 기존 비밀번호와 일치하면 삭제 아니면 실패
        const confirm = prompt('비밀번호 입력');
        if(obj.pwd == confirm){
            boardList.splice(i,1);
            localStorage.setItem('boardList' , JSON.stringify(boardList));
            alert('삭제 성공');
            location.href = 'list.html';
        }   else{ alert('삭제 실패 : 비밀번호 불일치')

    }
  }
 }
}

// 수정 이동 함수
function boardUpdateView(){
    //1. URL의 경로 가져오기
    const url = new URLSearchParams(location.search);
    //2. 경로 상의 선택된 쿼리스트링 가져오기
    const selectNo = url.get('no');
    //3. localStorage 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if(boardList == null){boardList=[]}
    else{boardList = JSON.parse(boardList);}
    //4. 배열내 선택된 게시물번호가 존재하면
    for(let i = 0 ; i < boardList.length ; i++){
        const obj = boardList[i];
        if(obj.no==selectNo){
            const confirm = prompt('비밀번호 입력')
            if(obj.pwd == confirm){
                location.href=`update.html?no${selectNo}`
            }else{ alert('수정불가 : 비밀번호 불일치')}
        }
    }
}