// 外部のAPIサーバーに対してHTTPリクエストを送信するためのライブラリ（HTTPクライアント）
import axios from 'axios';

export const READ_EVENTS = 'READ_EVENTS';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';

// readEvents内では、ピュアなオブジェクトを返さなけらばならない（Actionしか返すことができない）ため、通常非同期処理はできない。しかし、redux-thunkを使用することで関数を返すこともできるようになり、非同期処理が実装可能に。
// axiosの戻り値はpromiseになるため、asyncおよびawaitを追加。
export const readEvents = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
  dispatch({ type: READ_EVENTS, response });
};
