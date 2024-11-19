// 1) Import React and React DOM library
import React from 'react'; // 컴포넌트 정의 및 컴포넌트 연결하는 역할을 하는 라이브러리
import ReactDOM from 'react-dom/client'; // react 컴포넌트를 브라우저에 표시하도록 하는 라이브러리

// 2) get a reference to the div with ID root
const el = document.getElementById('root');

// 3) tell react to take control of that element
const root = ReactDOM.createRoot(el);

// 4) create a component
function App() {
  // props - adds properties to a component

  // 변수를 선언할 수 있지만 직접 props 에 적용할 수 있음
  // const inputType = "number";
  // const minValue = 5;

  // return <input type="number" min={5} style={{ border: '3px solid red' }} />;
  /* <input
  type="number"
  min={3}
  max={10}
  list={[1, 2, 3]} arrays
  style={{color: 'red'}} objects => JSX 에서는 객체를 렌더링해서 화면에 표현할 수 없지만, prop 으로 전달 가능
  alt={message} */

  // return <textarea autoFocus={true} />
  // all prop names follow camelCase - compound words should be in camelCase

  // return <input maxLength={5} autoFocus />
  // number attributes use curly braces

  // return <input maxLength={5} spellCheck />
  // boolean 'true' can be written with just the props name, but false should be written + boolean 값은 중괄호 안에

  // class attribute is written as className

  return <h1 maxLength={5} style={{ textDecoration: 'underline', padding: '5px', color: 'red' }}>Yo</h1>
  // in-line styles should be provided as objects
}

// 5) show the component on the screen
root.render(<App />);