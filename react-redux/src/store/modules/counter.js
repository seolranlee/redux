// action type define
const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// action 생성 함수
export const changeColor = color => ({ type: CHANGE_COLOR, color });
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// 초기상태 정의
const initialState = {
    color: 'red',
    number: 0,
};

// reducer정의
// 다른 곳에서 쓸 수 있게 함수로 내보내준다
export default function counter(state=initialState, action){
    switch(action.type){
        case CHANGE_COLOR:
            return {...state, color: action.color}
        case INCREMENT:
            return {...state, number: state.number+1}
        case DECREMENT:
            return {...state, number: state.number-1}
        default:  
            return state;
    }
}