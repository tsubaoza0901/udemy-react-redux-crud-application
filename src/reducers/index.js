import { combineReducers } from 'redux';
import count from './count';

export default combineReducers({ count });
// 結合したいReducerが他にもある場合には、そのReducerをimportした上で、以下のように記述する。
// export default combineReducers({ count, foo, bar });
