import { combineReducers } from 'redux';
import counter from './counter'

// 여러개의 reducer들을 모아놓는다. 
// root reducer를 만든다고 한다.
export default combineReducers({
    counter,
});