import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import styled from "styled-components";
import * as st from "../utils/storage";

function Write() {
  const [diary, setDiary] = useState({
    title: "",
    content: "",
  });

  const [diaryList, setDiaryList] = useState([]);

  function submitFunc(e) {
    e.preventDefault();
    setDiaryList([...diaryList, diary]);
    setDiary({ title: "", content: "" });
    st.saveDiary(diaryList);
  }

  function onChangeEvent(target, e) {
    setDiary((prevState) => ({
      ...prevState,
      [target]: e.target.value,
    }));
  }

  function getValues(target) {
    return diary[target];
  }

  return (
    <Container>
      <DiaryContainer>
        ✍️ 일기 작성 페이지입니다
        <WriteDiary
          onChangeEvent={onChangeEvent}
          submitFunc={submitFunc}
          getValues={getValues}
        />
      </DiaryContainer>
      <Move />
    </Container>
  );
}

export default Write;

function WriteDiary({ onChangeEvent, submitFunc, getValues }) {
  return (
    <>
      <FormContainer onSubmit={submitFunc}>
        <div>제목</div>
        <InputContainer
          placeholder="제목을 입력하세요"
          onChange={(event) => onChangeEvent("title", event)}
          value={getValues("title")}
        />
        <div>내용</div>
        <textarea
          placeholder="내용을 입력하세요"
          rows={10}
          cols={3}
          onChange={(event) => onChangeEvent("content", event)}
          value={getValues("content")}
        />
        <button type="submit">제출</button>
      </FormContainer>
    </>
  );
}

function Move() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/")}>이동</button>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const DiaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  width: 50%;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const InputContainer = styled.input`
  margin-bottom: 20px;
`;
