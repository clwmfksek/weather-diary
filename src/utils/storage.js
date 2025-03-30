export const saveDiary = (diaryList) => {
  localStorage.setItem("diaries", JSON.stringify(diaryList));
};

export const loadDiary = () => {
  const data = localStorage.getItem("diaries");
  return data ? JSON.parse(data) : [];
};
