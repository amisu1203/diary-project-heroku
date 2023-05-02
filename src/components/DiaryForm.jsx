import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import Button from "./Button";
import { useFetchDiaries, usePostDiary } from "../hooks/useFetchDiary";

const DiaryForm = () => {
  const navigate = useNavigate();
  const [isBtnEnabled, setIsBtnEnabled] = useState(false);

  // hooks
  const [author, onChangeAuthorHandler, setAuthor] = useInput();
  const [title, onChangeTitleHandler, setTitle] = useInput();
  const [content, onChangeContentHandler, setContent] = useInput();
  const { isPosting, postDiary } = usePostDiary();

  useEffect(() => {
    setIsBtnEnabled(author.length > 1 && title.length > 1 && content.length > 4);
  }, [author, title, content]);

  // 추가
  const onClickAddHandler = () => {
    const newTodo = {
      author,
      title,
      content,
      // createAt: new Date(),
      // redux에서 직렬화할수 없다는 에러가 떠서 문자열로 변환
      createAt: new Date().toISOString(),
    };
    postDiary(newTodo);
    alert("새로운 일기가 추가되었습니다!");
    setAuthor("");
    setTitle("");
    setContent("");
    navigate("/diaries");
  };

  return (
    <StContainer>
      <StForm
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <StContainerInp>
            <label htmlFor="author">작성자 : </label>
            <StCommonInp id="author" value={author} onChange={onChangeAuthorHandler} type="text" required aria-describedby="author-error" />
            {author.length < 1 && <StError id="author-error">작성자는 1글자 이상 입력해주세요.</StError>}
          </StContainerInp>
          <StContainerInp>
            <label htmlFor="title">제목 : </label>
            <StCommonInp id="title" required value={title} onChange={onChangeTitleHandler} type="text" aria-describedby="title-error" />
            {title.length < 2 && <StError>제목은 2글자 이상 입력해주세요.</StError>}
          </StContainerInp>
          <StContainerInp>
            <div>
              <label htmlFor="content">내용 :</label>
              <StContent placeholder="(200자 이내)" id="content" required value={content} onChange={onChangeContentHandler} />
              {content.length < 5 && <StError id="content-error">내용을 5글자 이상 입력해주세요.</StError>}
            </div>
          </StContainerInp>
        </div>
        <Button btnName="추가하기" onClick={onClickAddHandler} isDisabled={!isBtnEnabled} />
      </StForm>
    </StContainer>
  );
};

const StContainer = styled.div`
  height: calc(100vh - 50px);
  padding: 24px;
  box-sizing: border-box;
`;

const StForm = styled.form`
  height: 100%;
`;

const StContainerInp = styled.div`
  margin-bottom: 20px;
`;

const StCommonInp = styled.input`
  height: 46px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgb(206, 206, 206);
  border-radius: 10px;
`;

const StContent = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgb(206, 206, 206);
  border-radius: 10px;
`;

const StError = styled.span`
  color: rgba(252, 50, 35, 0.861);
  font-size: 14px;
`;
export default DiaryForm;
