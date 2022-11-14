import React from "react";
import "./Formlist.css";
import axios from "axios";
import { db } from "../../src/firebase-confiq";
import {
  doc,
  updateDoc,
  deleteDoc,
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
} from "firebase/firestore";

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
  console.log(money, item);
  console.log({ id });
  const userCollectionRef = collection(db, "users");
  const editHandler = async (id) => {
    {
      // const data = await getDocs(userCollectionRef);
      // const fetchedData = data.docs.map((doc) => ({
      //   ...doc.data(),
      //   id: doc.id,
      // }));
      // console.log(fetchedData);
      // console.log(id);
    }

    onClick(id);
    // const userDoc = doc(db, "users", id);
    // await deleteDoc(userDoc);
    // const userDoc = doc(db, "users", id);
    // const newFields = {};
    // await updateDoc(userDoc, newFields);
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
            console.log(id);
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
