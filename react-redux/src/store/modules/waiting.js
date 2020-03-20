import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'waiting/CHANGE_INPUT';
const CREATE = 'waiting/CREATE';
const ENTER = 'waiting/ENTER';
const LEAVE = 'waiting/LEAVE';

let id = 3; // id의 기본값
export const changeInput = createAction(CHANGE_INPUT, text => text);    //두번째 파라미터(payload creater)생략 가능.
export const create = createAction(CREATE, text => ({text, id: id++}));
export const enter = createAction(ENTER, id => id);
export const leave = createAction(LEAVE, id => id);


const initialState = {
    input: '',
    list: [{
        id: 0,
        name: '신형주',
        entered: true,
    },
    {
        id: 1,
        name: '한영수',
        entered: false,
    },
    {
        id: 2,
        name: '반승한',
        entered: false,
    }],
};

// reducer  // 함수에서 state와 action 다른값에서 의존하면 안된다. 똑같은 action과 똑같은 state에서는 같은 결과물이 나와야 한다.
export default handleActions(
    {
        [CHANGE_INPUT]: (state, action) => ({
            ...state,
            input: action.payload
        }),    //객체 자체를 리턴하는 문법
        [CREATE]: (state, action) => ({
            ...state,
            list: state.list.concat({
                ...action.payload,
                entered: false,
            })
        }),
        [ENTER]: (state, action) => ({
            ...state,
            list: state.list.map(item => item.id === action.payload ? {
                ...item,
                entered: !item.entered,
            } : item
            )
        }),
        [LEAVE]: (state, action) => ({
            ...state,
            list: state.list.filter(item => item.id !== action.payload),
        }),
    }, 
    initialState
);