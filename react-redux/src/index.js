import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootRedcuer from './store/modules';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// **** 리덕스 개발자도구 적용
// store만들기
const store = createStore(rootRedcuer, composeWithDevTools());

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
 