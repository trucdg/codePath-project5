import React from "react";

const CardList = () => {
  const list = ["New York", "15:25:39", "Rainy"];
  return (
    <div className="cardlist-cont">
      {list &&
        list.map((item) => {
          return (
            <div className="card">
              <h2> {item} </h2>
            </div>
          );
        })}
    </div>
  );
};

export default CardList;
