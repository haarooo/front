
/* [1] 메모리 설계 , 표/테이블 = 배열 , 표제목 = 속성명 , 행/가로 1개 = 객체 1개  , 기능(삭제/수정) 은 메모리가 아니다. */
// 1. 저장할 데이터 들을 객체 구성 
// 1-1 부서관리 객체
// { "pcode" : 1 , "부서명" : "개발팀"}
// 1-2 사원 등록 객체
// { "hcode" : 1 "image" : "https://placehold.co/100x100" , "name" : "김민준" , "pcode" : "1" , "title" : "선임개발자"}
// 1-3 휴가 신청 객체
// { "vcode" : 1" , "hcode" : "1" , "start" : "2025-08-04" , "end" : "2025-08-04" , "reason" : "병원진료"}


const partAry = [ { "pcode" : 1 , "part" : "개발팀" } ] 
const humanAry = [ { "hcode" : 1 , "image" : "https://placehold.co/100x100" , "name" : "김민준" , "pcode" : "1" , "title" : "선임개발자" }  ]
const vacationAry = [ { "vcode" : 1 ,"hcode" : "1" , "start" : "2025-08-04" , "end" : "2025-08-04" , "reason" : "병원진료" }  ]


//부서 관리 함수 
// 1. 출력힘수
partPrint(); 
function partPrint(){ 
    const dept = document.querySelector("#dept-body")
    let html = "" ;
    for(let index = 0 ; index <= partAry.length -1 ; index++){
        const part = partAry[index];
        html+= <div> asdasd </div>



    }
    dept.innerHTML = html ;
}


// 2. 삭제함수
function partDelete(pcode){
    for(let index = 0 ; index <= partAry.length -1 ; index++){
        if(pcode == partAry[index].pcode){
            // 만약에 부서목록에 사원이 존재하면 실패에 경고메세지
    for(let index2 = 0 ; index2 <= humanAry.length-1 ; index2++){
        if(humanAry[index2].pcode == pcode){
            alert("현재 삭제할 부서에 사원이 존재함으로 삭제 불가")
            return;
        }
    }
            partAry.splice(index , 1)
            partPrint();
            break ;
        }
    }
}

//3. 수정함수 
function partUpdate(pcode){
    for(let index = 0 ; index <= partAry.length-1 ; index++){
        if(pcode == partAry[index].pcode){
            const newname = prompt("수정할 부서")
            partAry[index].part = newname;
            partPrint();
            break; 
        }
    }
}

//4. 등록함수 
let pcode = 1 ;
function partAdd(){ 
    const partdom = document.querySelector("#new-dept")
    const part = partdom.value ; 
    for(let index = 0 ; index <= partAry.length -1 ; index++){
        if(partAry[index].part == part){
            alert("이미 존재하는 부서입니다")
            return;
        }
    }
    pcode += 1; 
    const obj = { "pcode" : pcode , "part" : part}
    partAry.push(obj);
    console.log(obj)
    partPrint();
}
//------------------------------------------------------------------------
//사원 등록 함수

//1. 출력함수 
humanPrint(); //js가 열렸을때 최초 1번 함수 실행
function humanPrint(){
    
    const hbody = document.querySelector("#empbody")
    let html = "" ;
    for(let index = 0  ; index <= humanAry.length -1 ; index++){
        const human = humanAry[index];
        html += `<tr>
                    <td><img class="img" src="${product.image}" width= 100px height= 100px ;/>
                    <td>${product.ccode}</td> <td>${product.name}</td> 
                    <td>${product.price}</td> <td>${product.date}</td> 
                    <td><button onclick="productDelete(${product.pcode})" class="btn b1">삭제</button> 
                    <button onclick="productUpdate(${product.pcode})" class="btn b2">수정</button> </td>
                 </tr>`
    }
    hbody.innerHTML = html;
}

//2. 삭제함수
function humanDelete(hcode){
    //1. pcode의 배열내 인덱스 찾기
    for(let index = 0 ; index <= humanAry.length -1 ; index++){
        if(hcode == humanAry[index].hcode){
            humanAry.splice(index , 1)

            humanPrint();
            break ;
        }
    }
}

//3. 수정함수 
function humanUpdate(hcode){
    for(let index = 0 ; index <= humanAry.length-1 ; index++){
        if(hcode == humanAry[index].hcode){
            const newname = prompt("수정할 이름")
            const newtitle = prompt("수정할 직급")
            humanAry[index].part = newname;
            humanAry[index].title = newtitle;
            humanPrint();
            break; 
        }
    }
}

//4. 등록함수
//const humanAry = [ { "hcode" : 1 , "https://placehold.co/100x100" , "name" : "김민준" , "pcode" : "1" , "title" : "선임개발자" }  ]
let hcode = 1;
function humanAdd(){ 
    const ppcodedom = document.querySelector("#dept-drop")
    const ppcode = ppcodedom.value ; 
    const namedom = document.querySelector("#name")
    const name = namedom.value ; 
    const titledom = document.querySelector("#position")
    const title = titledom.value ; 
    const imagedom = document.querySelector("#image")
    const image = imagedom.files[0] ; 
    if(ppcode == "disabled"){ alert("부서를 선택하세요.!"); return;}
    if(name == "" || title == ""){ alert("이름과 직급은 필수입니다"); return;}
    hcode+= 1; ;
    const obj = { "hcode" : hcode , "image" : image == undefined ? "https://placehold.co/100x100" : URL.createObjectURL(image) , 
                  "pcode" : ppcode ,  "name" : name , "title" : title}
    humanAry.push(obj);
    console.log(obj)
    humanPrint();
}
//-----------------------------------------------------------------
//휴가 관리 함수

//1. 출력함수
vacationPrint(); 
function vacationPrint(){
    const vbody = document.querySelector("#vacbody")

    let html = "" ;
    for(let index = 0  ; index <= vacationAry.length -1 ; index++){
        const vacation = vacationAry[index];
        html += `<tr>
                    <td><img class="img" src="${product.image}" width= 100px height= 100px ;/>
                    <td>${product.ccode}</td> <td>${product.name}</td> 
                    <td>${product.price}</td> <td>${product.date}</td> 
                    <td><button onclick="productDelete(${product.pcode})" class="btn b1">삭제</button> 
                    <button onclick="productUpdate(${product.pcode})" class="btn b2">수정</button> </td>
                 </tr>`
    }
    vbody.innerHTML = html;
}

//2. 삭제함수
//const vacationAry = [ { "vcode" : 1 ,"hcode" : "1" , "start" : "2025-08-04" , "end" : "2025-08-04" , "reason" : "병원진료" }  ]
function vacationDelete(vcode){
    for(let index = 0 ; index <= vacationAry.length -1 ; index++){
        if(vcode == vacationAry[index].vcode){
            vacationAry.splice(index , 1)
            vacationPrint();
            break ;
        }
    }
}

//3. 등록함수
let vcode = 2;
function vacationAdd(){ 
//const vacationAry = [ { "vcode" : 1 ,"hcode" : "1" , "start" : "2025-08-04" , "end" : "2025-08-04" , "reason" : "병원진료" }  ]
    const hhcodedom = document.querySelector("#name-drop")
    const hhcode = hhcodedom.value ; 
    const vacStartdom = document.querySelector("#vacStart")
    const vacStart = vacStartdom.value ; 
    const vacEnddom = document.querySelector("#vacEnd")
    const vacEnd = vacEnddom.value ; 
    const vacReasondom = document.querySelector("#vacReason")
    const vacReason = vacReasondom.value ; 
    if(hhcode == "disabled"){ alert("사원을 선택하세요.!"); return;}
    vcode+= 1; ;
    const obj = { "vcode" : vcode , "hcode" : hhcode ,  "start" : vacStart , 
                  "end" : vacEnd , "reason" : vacReason}
    vacationAry.push(obj);
    console.log(obj)
    vacationPrint();
}
