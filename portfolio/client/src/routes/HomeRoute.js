import React from "react";
import "../scss/HomeRoute.scss";

const getHealth = () => {
  return new Promise(resolve => {
    fetch("/health").then(r => {
      console.log(r.text());
    });
  });
};
const HomeRoute = ({ match }) => {
  return (
    <div className="home-conetnt">
      <h1>
        환영합니다.
        <br />
        console을 확인해보세요!
      </h1>
      <button onClick={getHealth}> health 체크</button>
    </div>
  );
};

export default HomeRoute;
