
/**
 * react component 특징
 * 1. 파일명과 함수명을 일치 시킨다.-> App.js 에  function App() {
 * 2. 하나의 컴포넌트 함수는 하나의 태그 묶음만 리턴할 수 있다. 그래서 <></> 사용
 * 3. 함수를 꼭 export해야한다. //default 값이 기준  아래 3개중에 default값이 불러와진다
*/
//여러태그를 하나로 묶어주기위한<></>
//컨트롤 쉬프트 p -> >settings json -> 구글에서 리액트 jsx 자동완성 -> https://doishalf.tistory.com/59 2번방법
// "terminal.integrated.defaultProfile.windows": "Git Bash",

import { useState } from "react";

//     "emmet.syntaxProfiles": {
//         "javascript": "jsx"
//     },
//     "emmet.includeLanguages": {
//         "javascript": "html"
//     }

export default function App() {
  let names = [ "김준일", "김준이", "김준삼" ];// 2. 번String 형 이라 붙어서 나온다 그걸 아래로 바꿔주면 h1태그로 바꾼다
  // 근데 이거 그냥 밑에 바로 넣어주면 된다
  // const jsxNames = names.map(name => <h1>{ name }</h1>);// 1.번 김준일 map안에 name에 넣고 h1으로 감싸서 리턴 김준이, 김준삼도 똑같이해서 
  

  const [ nameArrayState, setNameArrayState ] = useState([ "김준일", "김준이", "김준삼" ]); // 3.번 state 방법  [] 안에 비구조 할당
  //state = 상태관리 = 초기화 안됨 계속 렌더링 하면서 초기화 해도 쌓인다
  // 상태가 변하면 렌더링이 다시 된다
  // 일반 변수(렌더링될때마다 초기화)로는 렌더링 안된다 usState가 존재하는 set될때마다 다시 동작한다

  const { name, age }  = {name: "김준일", age: 31};
  const [ num1, num2 ] = [1,2,3,4];//배열의 비구조 할당

  console.log("콘솔호출?");
  // function handleClick() {이렇게 function 안에 function 안쓴다 아래처럼 쓴다
  const handleClick = () => {
    setNameArrayState([...nameArrayState,"김준사"]);
    console.log(names);
  }

  

  return<>
    <button onClick={ handleClick }>추가</button>
    <div>
    {/* {jsxNames}    1번 */}
      {/* { names.map(name => <h1>{ name }</h1>) } 2번 */}
      { setNameArrayState.map(name => <h1>{ name }</h1>) } 
    </div>
  </>;
}





