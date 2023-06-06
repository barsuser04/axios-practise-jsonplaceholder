import React from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { styled } from "styled-components";

const HomePage = () => {
  return (
    <Container>
      <TodoForm />
      <TodoList />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding-top: 40px;
`;

export default HomePage;
