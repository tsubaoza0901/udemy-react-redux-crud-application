import React from 'react';
import { connect } from 'react-redux'; // connectのimport

import { increment, decrement } from '../actions'; // Actionクリエーターのimport

class App extends React.Component {
  // ※constructorで行っていた初期化は、Reduxの場合、Reducer側で実行するため削除
  // ※handlePlusButtonファンクション、handleMinusButtonファンクションで行っていた処理もActionクリエーター側で実行するため削除
  render() {
    // インスタンスのpropsにはActionやStateを渡していくため、使いやすいよう変数として定義
    const props = this.props;
    // 表示する値は、reducer内のcountのオブジェクトのvalueのため、以下のように変更
    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

// Stateの情報から現在のコンポーネントに必要な情報を取り出して、コンポーネント内のpropsとしてマッピングする機能を持つ関数
const mapStateToProps = (state) => ({ value: state.count.value });

// あるActionが発生した際に、Reducerにtypeに応じた状態遷移を実行させるための関数
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

// // mapDispatchToPropsは以下のように簡略化した形で記述することもできる。
// const mapDispatchToProps = { increment, decrement };

// ActionおよびStateとコンポーネントの関連づけ
export default connect(mapStateToProps, mapDispatchToProps)(App);
