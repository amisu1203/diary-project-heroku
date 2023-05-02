import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import DiariesPage from "./pages/DiariesPage";
import DetailDiaryPage from "./pages/DetailDiaryPage";
import WritePage from "./pages/WritePage";

const App = () => {
  return (
    <BrowserRouter>
      <StAppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/create" element={<WritePage />} />
          <Route path="/diaries" element={<DiariesPage />} />
          <Route path="/diary/:id" element={<DetailDiaryPage />} />
        </Routes>
      </StAppContainer>
    </BrowserRouter>
  );
};

const StAppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default App;
