import React, { useEffect, useState } from "react";
import "./Form.css";
import Formlist from "./Formlist";
import { useRef } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { current, fetchExpenses, allexpense } from "../features/ExpensesSlice";
import { CSVLink, CSVDownload } from "react-csv";
const Form = () => {
  const [editId, setEditId] = useState(null);
  const [activePremium, setActivePremium] = useState(false);
  const dispatch = useDispatch();
  const moneyInputRef = useRef();
  const descriptionInputRef = useRef();
  const selectedInputRef = useRef();
  const [update, setUpdate] = useState(false);
  const users = useSelector((state) => state.expense.expenses);
  const totalAmount = users.reduce((acc, expense) => acc + expense.money, 0);
  console.log(totalAmount, "totalAmount");

  useEffect(() => {
    const getUser = async () => {
      const respo = await axios.get(
        "https://khatabook-70c6a-default-rtdb.asia-southeast1.firebasedatabase.app/name.json"
      );
      const data = await respo.data;
      if (data) {
        var ob = Object.keys(data);
        console.log("i am if data");
      } else {
        ob = null;
        console.log("inside else");
        dispatch(allexpense([]));
      }
      if (ob) {
        const keyarr = Object.keys(data);
        dispatch(allexpense(keyarr.map((key) => ({ ...data[key], id: key }))));
      }
    };
    getUser();
  }, [update]);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (editId) {
      const respo = await axios.put(
        `https://khatabook-70c6a-default-rtdb.asia-southeast1.firebasedatabase.app/name/${editId}.json`,
        {
          money: moneyInputRef.current.value,
          description: descriptionInputRef.current.value,
          item: selectedInputRef.current.value,
          date: new Date().toLocaleString().split(" ")[0],
        }
      );

      setUpdate((prevState) => !prevState);
    } else {
      try {
        const respo = await axios.post(
          "https://khatabook-70c6a-default-rtdb.asia-southeast1.firebasedatabase.app/name.json",
          {
            money: moneyInputRef.current.value,
            description: descriptionInputRef.current.value,
            item: selectedInputRef.current.value,
            date: new Date().toLocaleString().split(" ")[0],
          }
        );
        const data = await respo.data;
        dispatch(current(data));

        setUpdate((prevState) => !prevState);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const listClickHandler = (id) => {
    const filterdData = users.filter((item) => item.id === id);

    moneyInputRef.current.value = filterdData[0].money;
    descriptionInputRef.current.value = filterdData[0].description;
    selectedInputRef.current.value = filterdData[0].item;
    setEditId(id);
  };

  const activePremiumHandler = () => {
    setActivePremium((prevState) => !prevState);
  };

  const toggleThemeHandler = () => {};

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
          <select name="item" ref={selectedInputRef}>
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
      {/* {listData.map((list) => (
        <Formlist {...list} key={"b" + count} />
      ))} */}

      {totalAmount >= 10000 && (
        <button onClick={activePremiumHandler} className="form__premiumButton">
          {!activePremium ? "Activate Premium" : "Activated"}
        </button>
      )}
      {activePremium && <button onClick={toggleThemeHandler}>Toggle</button>}
      {activePremium && (
        <button>
          <CSVLink data={users}>Download</CSVLink>
        </button>
      )}

      {users.map((user) => (
        <Formlist {...user} onClick={listClickHandler} setState={setUpdate} />
      ))}
    </>
  );
};

export default Form;
