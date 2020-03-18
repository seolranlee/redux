import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootRedcuer from './store/modules'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// **** 리덕스 개발자도구 적용
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// store만들기
const store = createStore(rootRedcuer, devTools);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
 