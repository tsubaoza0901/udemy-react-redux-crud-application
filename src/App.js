import React from 'react';

function App() {
  const profiles = [
    { name: 'Taro', age: 10 },
    { name: 'Hanako', age: 5 },
    { name: 'NoName' },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
}

function User(props) {
  return (
    <div>
      Hi, I am {props.name}, and {props.age}year old!
    </div>
  );
}

User.defaultProps = {
  age: 'Unknown ',
};

export default App;
