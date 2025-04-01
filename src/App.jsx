import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Edit from "./pages/Edit";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
