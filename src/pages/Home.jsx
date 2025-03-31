import React from "react";
import * as st from "../utils/storage";
import { useNavigate } from "react-router";

function Home() {
  const diaryList = st.loadDiary();
  function getDiary() {
    return diaryList;
  }
  return (
    <>
      <div>📘 일기 리스트 페이지입니다</div>
      <Move />
      <DiaryComponents gets={getDiary} />
    </>
  );
}

export default Home;

function DiaryComponents({ gets }) {
  const dies = gets();
  return dies.map((element, index) => (
    <>
      <div>{index + 1} 번째 </div>
      <div>{element.title}</div>
      <div>{element.content}</div>
      <br></br>
    </>
  ));
}

function Move() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/write")}>이동</button>;
}
