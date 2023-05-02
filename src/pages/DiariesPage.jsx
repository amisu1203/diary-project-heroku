// import React from "react";
// import { useSelector } from "react-redux";
// import { RiDeleteBin5Fill } from "react-icons/ri";
// import styled from "styled-components";
// import { useDeleteDiary, useFetchDiaries } from "../hooks/useFetchDiary";

// const DiariesPage = () => {
//   const diarySlice = useFetchDiaries();
//   const { isDeleting, deleteDiary } = useDeleteDiary();

//   // 일기 삭제
//   const onDeleteDiary = (id) => {
//     if (!window.confirm(`정말 ${id}번째 일기를 삭제하시겠습니까?`)) {
//       return null;
//     }
//     return deleteDiary(id);
//   };

//   // 상세 페이지 이동

//   return (
//     <StContainer>
//       {diarySlice.map((diary) => (
//         <StDiaryList key={diary.id}>
//           <p>{diary.title}</p>
//           <div>
//             <span>{diary.author}</span>
//             <span>{diary.content}</span>
//           </div>
//           <RiDeleteBin5Fill style={{ width: "20px", height: "20px" }}
// onClick={() => onDeleteDiary(diary.id)} />
//         </StDiaryList>
//       ))}
//     </StContainer>
//   );
// };

// // styled components
// const StContainer = styled.ul`
//   border: 1px solid gray;
//   padding: 24px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
// `;

// const StDiaryList = styled.li`
//   border: 1px solid black;
//   border-radius: 10px;
// `;

// export default DiariesPage;

import React from "react";
import { useSelector } from "react-redux";
import { RiDeleteBin5Fill } from "react-icons/ri";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDeleteDiary, useFetchDiaries } from "../hooks/useFetchDiary";

const DiariesPage = () => {
  const diarySlice = useFetchDiaries();
  const navigate = useNavigate();
  const { isDeleting, deleteDiary } = useDeleteDiary();

  // 일기 삭제
  const onDeleteDiary = (id) => {
    if (!window.confirm(`정말 ${id}번째 일기를 삭제하시겠습니까?`)) {
      return null;
    }
    return deleteDiary(id);
  };

  // 일기 상세페이지 이동
  const goDetailPage = (id) => {
    navigate(`/diary/${id}`);
  };

  return (
    <StContainer>
      {diarySlice.map((diary) => (
        <StDiaryList key={diary.id}>
          <div
            role="button"
            tabIndex={0}
            onClick={() => goDetailPage(diary.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                goDetailPage(diary.id);
              }
            }}
          >
            <p>{diary.title}</p>
            <div>
              <span>{diary.author}</span>
              <span>{diary.content}</span>
            </div>
          </div>
          <RiDeleteBin5Fill style={{ width: "20px", height: "20px" }} onClick={() => onDeleteDiary(diary.id)} />
        </StDiaryList>
      ))}
    </StContainer>
  );
};

// styled components
const StContainer = styled.ul`
  border: 1px solid gray;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StDiaryList = styled.li`
  border: 1px solid black;
  border-radius: 10px;
`;

export default DiariesPage;
