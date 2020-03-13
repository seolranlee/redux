import { createStore } from 'redux';

const lightDiv = document.getElementsByClassName('light')[0];
const switchButton = document.getElementById('switch-btn');

const counterHeadings = document.getElementsByTagName('h1')[0];
const plusButton = document.getElementById('plus-btn');
const minusButton = document.getElementById('minus-btn');

// 액션 타입 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// 액션 생성함수 정의
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increment = diff => ({ type: INCREMENT, diff });
const decrement = () => ({ type: DECREMENT });

// 초깃값 설정
const initialState = {
  light: false,
  counter: 0
};

// 리듀서 함수 정의
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 기존의 값은 그대로 두면서
        light: !state.light // light 값 반전시키기
      };
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + action.diff
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      // 지원하지 않는 액션의 경우 상태 유지
      return state;
  }
}

// 스토어 만들기
const store = createStore(reducer);

// render 함수 만들기
const render = () => {
  const state = store.getState(); // 현재 상태를 가져옵니다.
  const { light, counter } = state; // 편의상 비구조화 할당
  if (light) {
    lightDiv.style.background = 'green';
    switchButton.innerText = '끄기';
  } else {
    lightDiv.style.background = 'gray';
    switchButton.innerText = '켜기';
  }
  counterHeadings.innerText = counter;
};

render();

//  구독
store.subscribe(render);

// **** 이벤트 달아주기, 액션 발생 시키기
switchButton.onclick = () => {
  store.dispatch(toggleSwitch());
}

plusButton.onclick = () => {
  store.dispatch(increment(5));
}

minusButton.onclick = () => {
  store.dispatch(decrement());
}