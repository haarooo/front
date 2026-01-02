// for 중첩 for 안에 for
// 2단 구구단
//for( let 곱 = 1 ; 곱 <= 9 ; 곱++){ console.log(` 2 X ${곱} = ${2 * 곱}`)}

//2단 ~ 9단 
//for( let 단 = 2 ; 단 <= 9 ; 단++){ console.log(` ${단} X 1 = ${단 * 1} `)}

//1.  곱마다 단을 계산하는건지 2. 단마다 곱을 계산하는건지(O)
//2단일때 9번곱 , 3단일때 9번곱 ....
/*
for( let 단 = 2 ; 단 <= 9 ; 단++) // 단이 2부터 9까지 1씩 증가
    for( let 곱 = 1 ; 곱 <= 9 ; 곱++) //곱이 1부터 9까지 1씩증가
{ console.log(` ${단} X ${곱} = ${단 * 곱} `)}
*/

// 별(*) 출력하기
//              line(row)       star(column)
//*                   1                 1   
//**                  2                1 2      //star 1부터 현재 line까지 1씩 증가하면서 "*" 출력   
//***                 3                1 2 3    //line 1부터 3까지 1씩 증가하면서 줄바꿈(\n)


let output = "" ;
for( let line = 1 ; line <=5 ; line++){
    for( let star =  1 ; star <= line ; star++){output = output + "*"} output = output + "\n"
}console.log(output)



// 반복문 자주 사용되는 키워드
//continue
/*
for(let i = 1 ; i <= 5 ; i++){
    if( i == 3){continue;}
    console.log(i) //1245가 출력되는 이유 1부터 3 제외한 5까지 출력 = 3일때 continue 만나서
}
*/

//break
/*
for(let i = 1 ; i <=5 ; i++){
    if( i==3){break;}
    console.log(i) // 1부터 5까지 출력하는데 3이면 종료 3일떄 break만나서
}
*/
// 무한루프 : 종료가 없는 계속되는 반복문
// for (  ; true ;  )
//while(true) (console.log(1) ;)
//활용 for (  ;  ; ) let a = prompt(무한입력)
//활용2 for( ; ; ) let b = prompt(무한입력) if ( b == "x") break;