import React, { useState } from "react";
import "./Form.css";
import Formlist from "./Formlist";
import { useRef } from "react";
const listData = [];
const Form = () => {
  const moneyInputRef = useRef();
  const descriptionInputRef = useRef();
  const [count, setCount] = useState(0);
  const changeHandler = (event) => {};
  const submitHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    // console.log(moneyInputRef, descriptionInputRef);
    listData.push({
      count: count,
      money: moneyInputRef.current.value,
      description: descriptionInputRef.current.value,
      item: data.get("item"),
    });

    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <form className="expense__form" onSubmit={submitHandler}>
        <div>
          <label className="expense__form__label">Money</label>
          <input
            name="money"
            className="expense__form__input"
            placeholder="money"
            ref={moneyInputRef}
          />
          <label className="expense__form__label">description</label>
          <input
            name="description"
            className="expense__form__input"
            placeholder="description"
            ref={descriptionInputRef}
          />
        </div>
        <div className="expense__form__dropdown">
          <select name="item" onChange={changeHandler}>
            <option value="Milk">Milk</option>
            <option value="Bread">Bread</option>
            <option value="fees">fees</option>
            <option value="gift">gift</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>
        <div>
          <button type="submit" className="expense__form__button">
            Submit
          </button>
        </div>
      </form>
      {listData.map((list) => (
        <Formlist {...list} key={"b" + count} />
      ))}
    </>
  );
};

export default Form;
