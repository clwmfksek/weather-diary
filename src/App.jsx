import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Write from "./pages/Write";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
