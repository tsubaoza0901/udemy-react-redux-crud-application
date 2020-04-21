import React, { Component } from 'react';

// クラスコンポーネント
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input
          type="text"
          onClick={() => {
            console.log('I am clicked.');
          }}
        />
      </React.Fragment>
    );
  }
}

// // ファンクショナルコンポーネント
// const App = () => {
//   return (
//     <div>
//       <Cat />
//       <Cat />
//     </div>
//   );
// };

// const Cat = () => {
//   return <div>Meow!</div>;
// };

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input
//         type="text"
//         onClick={() => {
//           console.log('I am clicked.');
//         }}
//       />
//     </React.Fragment>
//   );
// }

export default App;
