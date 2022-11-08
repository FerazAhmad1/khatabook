import React from "react";
import "./Formlist.css";

const Formlist = ({ money, description, item, count }) => {
  console.log(money, item);

  return (
    <div>
      <div className="formlist__container" key={"a" + count}>
        <div>
          <p className="formlist__date">
            {new Date().toLocaleString().split(" ")[0]}
          </p>
        </div>
        <div>
          <p className="formlist__moneyinput">{money}</p>
        </div>
        <div>
          <p className="formlist__descriptioninput">{description}</p>
        </div>
        <div>
          <p className="formlist__expenseitem">{item}</p>
        </div>
        <button className="formlist__edit">Edit</button>
        <button className="formlist__delete">Delete</button>
      </div>
    </div>
  );
};

export default Formlist;
