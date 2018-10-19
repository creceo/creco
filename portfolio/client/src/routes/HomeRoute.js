import React from "react";
import "../scss/HomeRoute.scss";

const getHealth = () => {
  return new Promise(resolve => {
    fetch("/health")
      .then(r => {
        return r.text();
      })
      .then(r => {
        console.log(JSON.parse(r));
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
