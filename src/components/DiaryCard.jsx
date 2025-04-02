import React from "react";

function DiaryCard({ date, title, content }) {
  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid #ccc",
        marginBottom: "1rem",
      }}
    >
      <p>
        <strong>{date}</strong>
      </p>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
}

export default DiaryCard;
