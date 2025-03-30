import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ padding: "1rem", background: "#fff" }}>
      <Link to="/">홈</Link> | <Link to="/write">일기 작성</Link>
    </header>
  );
}

export default Header;
