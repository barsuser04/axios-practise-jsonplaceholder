import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import EditPage from "../components/EditPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/editTodo/:id" element={<EditPage />} />
    </Routes>
  );
};
