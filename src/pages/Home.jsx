import React, { useEffect, useState } from "react";
import * as st from "../utils/storage";
import { useNavigate } from "react-router";
import styled from "styled-components";
import useWeather from "../hooks/useWeather";
import { useLocation } from "react-router";

function Home() {
  const [diaryList, setDiaryList] = useState([]);
  const location = useLocation();
  const { weatherData } = location.state || {};
  useEffect(() => {
    setDiaryList(st.loadDiary());
  }, []);
  return (
    <>
      <div>📘 일기 리스트 페이지입니다</div>
      <div>현재 온도 : {weatherData}</div>
      <Move />
      <DiaryComponents gets={diaryList} setDiaryList={setDiaryList} />
    </>
  );
}

export default Home;

function DiaryComponents({ gets, setDiaryList }) {
  const dies = gets;
  return dies.map((element, index) => (
    <TopContainer key={index}>
      <DiaryContainer>
        <div>{index + 1}번째 글</div>
        <div>제목 : {element.title}</div>
        <div>내용 : {element.content}</div>
      </DiaryContainer>
      <EDContainer>
        <EditMove index={index} />
        <DeleteMove index={index} setDiaryList={setDiaryList} />
      </EDContainer>
    </TopContainer>
  ));
}

function Move() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/write")}>이동</button>;
}

function EditMove({ index }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/edit`, { state: { index } });
  };

  return <EDButton onClick={handleNavigate}>수정</EDButton>;
}

function DeleteMove({ index, setDiaryList }) {
  const array = st.loadDiary();

  function handle() {
    const result = array.filter((_, ind) => ind !== index);
    setDiaryList(result);
    st.saveDiary(result);
  }
  return <EDButton onClick={handle}>삭제</EDButton>;
}

const DiaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  width: 50%;
`;

const EDButton = styled.button`
  width: 320px;
`;

const EDContainer = styled.div`
  margin-bottom: 50px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
