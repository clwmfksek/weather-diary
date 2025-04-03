export const saveDiary = (diaryList) => {
  localStorage.setItem("diaries", JSON.stringify(diaryList));
};

export const loadDiary = () => {
  const data = localStorage.getItem("diaries");
  return data ? JSON.parse(data) : [];
};

export const saveTemp = (temp) => {
  localStorage.setItem("temp", JSON.stringify(temp));
};

export const loadTemp = () => {
  const temp = localStorage.getItem("temp");
  return temp ? JSON.parse(temp) : "";
};
