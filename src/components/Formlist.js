import React from "react";
import "./Formlist.css";
import axios from "axios";

const Formlist = ({
  money,
  description,
  item,
  date,
  count,
  id,
  onClick,
  setState,
}) => {
  const editHandler = async (id) => {
    onClick(id);
  };

  const deleteHandler = async (id) => {
    const respo = await axios.delete(
      `https://khatabook-70c6a-default-rtdb.asia-southeast1.firebasedatabase.app/name/${id}.json`
    );
    setState((prev) => !prev);
  };

  return (
    <div>
      <div className="formlist__container" key={"a" + count}>
        <div>
          <p className="formlist__date">{date}</p>
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
        <button
          className="formlist__edit"
          onClick={(event) => {
            editHandler(id);
          }}>
          Edit
        </button>
        <button
          className="formlist__delete"
          onClick={(event) => {
            console.log("delete");
            deleteHandler(id);
          }}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Formlist;
