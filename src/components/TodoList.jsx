import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, getTodosById } from "../store/slices/todoThunk";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export const TodoList = () => {
  const { todos, loading, error } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);


  return (
    <div>
      {loading && <p>Loading....</p>}
      {error != "" && <p>{error}</p>}
      {todos?.map((el, i) => {
        return (
          <Container key={el.id}>
            <p>
              {i + 1}:{el.title}
            </p>
            <button>
              <Link to={`/editTodo/${el.id}`}>edit this</Link>
            </button>
          </Container>
        );
      })}
    </div>
  );
};

const Container = styled.div`
  display: flex;
  width: 600px;
  border: 2px solid teal;
  border-radius: 15px;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
