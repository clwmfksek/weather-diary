import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import * as st from "../utils/storage";
import styled from "styled-components";

export default function Edit() {
  const location = useLocation();
  let { index } = location.state || {};
  const [diary, setDiary] = useState(st.loadDiary()[index]);
  const navigate = useNavigate();

  function submitFunc(e) {
    e.preventDefault();
    let temp = st.loadDiary();
    temp[index] = diary;
    st.saveDiary(temp);
    navigate("/");
  }

  function onChangeEvent(target, e) {
    setDiary((prevState) => ({
      ...prevState,
      [target]: e.target.value,
    }));
  }

  return (
    <>
      <EditPage
        diary={diary}
        submitFunc={submitFunc}
        onChangeEvent={onChangeEvent}
      />
    </>
  );
}

function EditPage({ diary, submitFunc, onChangeEvent }) {
  return (
    <>
      <FormContainer onSubmit={submitFunc}>
        <div>제목</div>
        <InputContainer
          placeholder="제목을 입력하세요"
          onChange={(event) => onChangeEvent("title", event)}
          value={diary.title}
        />
        <div>내용</div>
        <textarea
          placeholder="내용을 입력하세요"
          rows={10}
          cols={3}
          onChange={(event) => onChangeEvent("content", event)}
          value={diary.content}
        />
        <button type="submit">제출</button>
      </FormContainer>
    </>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const InputContainer = styled.input`
  margin-bottom: 20px;
`;
