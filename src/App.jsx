import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Edit from "./pages/Edit";
import Loading from "./pages/Loading";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
