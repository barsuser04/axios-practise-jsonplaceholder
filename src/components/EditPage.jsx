import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodosById, putTodosById } from "../store/slices/todoThunk";

const EditPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { newTodos } = useSelector((state) => state.todo);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodosById(id))
      .unwrap()
      .then((data) => {
        setInputValue(data.title);
      });
  }, []);

  const editHandler = () => {
    const data = {
      id: newTodos.id,
      title: inputValue,
    };

    dispatch(putTodosById(data))
      .unwrap()
      .then((data) => {
        data === 200 && navigate("/");
      });
  };

  return (
    <div>
      <h1>{id}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => editHandler()}>save</button>
    </div>
  );
};

export default EditPage;
