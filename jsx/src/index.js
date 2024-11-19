// 1) Import React and React DOM library
import React from 'react'; // 컴포넌트 정의 및 컴포넌트 연결하는 역할을 하는 라이브러리
import ReactDOM from 'react-dom/client'; // react 컴포넌트를 브라우저에 표시하도록 하는 라이브러리

// 2) get a reference to the div with ID root
const el = document.getElementById('root');

// 3) tell react to take control of that element
const root = ReactDOM.createRoot(el);

// 4) create a component
function App() {
  // <h1>this is h1 tag</h1>
  // 단순히 태그를 입력한다고 해서 화면이 출력되는 것은 아님
  // 컴포넌트에서 return 해야 화면에 출력

  let message = 'bye there';
  if (Math.random() > 0.5) {
    message = 'hello there';
  }

  // const message = true;
  // React cannot render boolean type, null, undefined
  // unexpected result can be rendered if the variable is either boolean, null, undefined or array
  // if the variable is an object

  // message = {};
  // Objects cannot be children of an element
  // undefined 값 반환 

  // 추가로 표현식을 중괄호에 삽입하여 값을 출력하게 할 수 있음
  // 변수로 대입해서 변수를 태그의 중괄호에 삽입해도 되지만 직접 괄호 내에 표현식을 삽입할 수 있음
  // const date = new Date();
  // const time = date.toLocaleTimeString();

  return (
    <>
      <h1>{message}</h1>
      {/* <h2>{time}</h2> */}
      <h2>{new Date().toLocaleTimeString()}</h2>
    </>
  );
  // 보간법은 중괄호 내부에 JS 코드를 삽입할 수 있음, 그리고 동적으로 해당 값을 변경하여 출력하게 할 수 있음



}

// 5) show the component on the screen
root.render(<App />);

// JSX 를 사용하는 이유
// 직관성이 뛰어나고, 가독성이 뛰어남