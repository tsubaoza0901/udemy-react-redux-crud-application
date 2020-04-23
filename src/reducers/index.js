import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'; // reducerだと他の名称とかぶるため、formという名称で扱えるように設定
import events from './events';

export default combineReducers({ events, form });
