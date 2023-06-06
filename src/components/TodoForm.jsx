import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postTodos } from "../store/slices/todoThunk";
import { styled } from "styled-components";

export const TodoForm = () => {
  const [valueInput, setValueInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    const data = {
      title: valueInput,
      id: Date.now(),
      completed: false,
    };

    dispatch(postTodos(data));
    setValueInput("");
  };
  return (
    <Container onSubmit={addTodoHandler}>
      <input
        type="text"
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
      />
      <button type="submit">add button</button>
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  width: 400px;
  padding: 15px;
  border: 3px solid white;
  border-radius: 10px;
  gap: 40px;
  input {
    width: 200px;
  }
`;
