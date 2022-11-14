import React, { useEffect, useState } from "react";
import "./Form.css";
import Formlist from "./Formlist";
import { useRef } from "react";
import { db } from "../../src/firebase-confiq";
import axios from "axios";

import {
  getFirestore,
  collection,
  updateDoc,
  query,
  where,
  getDocs,
  doc,
  addDoc,
} from "firebase/firestore";
import { json } from "react-router-dom";

const listData = [];
const Form = () => {
  const [users, setUser] = useState([]);
  const [added, setAdded] = useState("");
  console.log(users);
  const [editId, setEditId] = useState(null);
  const moneyInputRef = useRef();
  const descriptionInputRef = useRef();
  const selectedInputRef = useRef();
  const [update, setUpdate] = useState(false);
  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUser = async () => {
      const respo = await axios.get(
        "https://khatabook-70c6a-default-rtdb.asia-southeast1.firebasedatabase.app/name.json"
      );
      const data = await respo.data;
      if (data) {
        var ob = Object.keys(data);
      } else {
        ob = null;
        setUser([]);
      }

      console.log("Useeefecet");

      if (ob) {
        const keyarr = Object.keys(data);
        setUser(keyarr.map((key) => ({ ...data[key], id: key })));
        console.log("i am after setuser");
      }
    };

    getUser();
  }, [added, update]);

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
      setAdded(null);
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
        console.log(data);
        setAdded(data);
        setUpdate((prevState) => !prevState);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const listClickHandler = (id) => {
    console.log(users, id);
    const filterdData = users.filter((item) => item.id === id);

    moneyInputRef.current.value = filterdData[0].money;
    descriptionInputRef.current.value = filterdData[0].description;
    selectedInputRef.current.value = filterdData[0].item;
    setEditId(id);
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
      {users.map((user) => (
        <Formlist {...user} onClick={listClickHandler} setState={setUpdate} />
      ))}
    </>
  );
};

export default Form;
