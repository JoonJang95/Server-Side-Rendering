import React from 'react';

const InfoPage = ({ clickHandler }) => {
  return (
    <div>
      <div>Info!!</div>
      <button onClick={clickHandler}>Click me for less info</button>
    </div>
  );
};

export default InfoPage;
