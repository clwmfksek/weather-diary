import React, { useState } from "react";
import * as st from "../utils/storage";
import { useNavigate } from "react-router";
function Home() {
  const [idx, setIdx] = useState(0);
  const diaryList = st.loadDiary();
  return (
    <>
      <div>📘 일기 리스트 페이지입니다</div>
      <Move />
      <EditP idx={idx} setIdx={setIdx} diaryList={diaryList} />
      <DiaryComponents gets={diaryList} />
    </>
  );
}

export default Home;

function EditP({ idx, setIdx, diaryList }) {
  function onChangeFunc(e) {
    e.preventDefault();
    setIdx(e.target.value);
  }
  return (
    <>
      <input
        placeholder="인덱스를 입력하세요!"
        onChange={onChangeFunc}
        value={idx}
      />
      <EditMove index={idx} diaryList={diaryList} />
    </>
  );
}
function DiaryComponents({ gets }) {
  const dies = gets;
  return dies.map((element, index) => (
    <div key={index}>
      <div>{index + 1} 번째 </div>
      <div>{element.title}</div>
      <div>{element.content}</div>
      <br></br>
    </div>
  ));
}

function Move() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/write")}>이동</button>;
}

function EditMove({ index, diaryList }) {
  const handleNavigate = () => {
    const navigate = useNavigate();
    const title = diaryList[index].title;
    const content = diaryList[index].content;
    navigate(`/edit`, { state: { index, title, content } });
  };

  return <button onClick={handleNavigate}>수정</button>;
}
