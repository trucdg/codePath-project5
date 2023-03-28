import React from "react";

const CardList = () => {
  const list = ["New York", "15:25:39", "sunset", "Rainy"];
  return (
    <div className="cardlist-cont">
      {list &&
        list.map((item) => {
          return (
            <div className="card">
              <h5> {item} </h5>
            </div>
          );
        })}
    </div>
  );
};

export default CardList;
