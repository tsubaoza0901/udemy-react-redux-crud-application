import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; // applyMiddlewareを追加 ※ applyMiddleware：ミドルウェア（今回の場合は、redux-thunk）を適用するための
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; // 追加
import './index.css';
import reducer from './reducers';
import EventsIndex from './components/events_index'; // 修正
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(thunk)); // 引数にapplyMiddleware(thunk)を追加。こうすることで、ミドルウェアとしてapplyされたthunkがstoreに組み込まれる。

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
