import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";

const DetailDiaryPage = () => {
  const diarySlice = useSelector((state) => state.diary);
  const { id } = useParams();
  const selectedDiary = diarySlice.find((diary) => diary.id === parseInt(id, 16));
  const navigate = useNavigate();

  // 일기 목록으로 이동
  const goDiariesPage = () => {
    navigate("/diaries");
  };

  if (!selectedDiary) {
    return <div>해당 다이어리가 존재하지 않습니다.</div>;
  }

  return (
    <div>
      <p>{selectedDiary.title}</p>
      <p>{selectedDiary.author}</p>
      <p>{selectedDiary.content}</p>
      <Button onClick={goDiariesPage} btnName="목록으로 돌아가기" isDisabled={false} />
    </div>
  );
};

export default DetailDiaryPage;
