import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDiaries, addDiary, deleteDiaryById } from "../redux/modules/diarySlice";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const useFetchDiaries = () => {
  const dispatch = useDispatch();
  const diarySlice = useSelector((state) => state.diary);

  useEffect(() => {
    const fetchDiaries = async () => {
      const { data } = await axiosInstance.get("/posts");
      // 최신 순으로 정렬
      const sortedData = data.sort((a, b) => new Date(b.createAt) - new Date(a.createAt));
      dispatch(setDiaries(sortedData));
    };
    fetchDiaries();
  }, [dispatch]);

  return [...diarySlice];
  //  return useSelector((state) => state.diary);
};

export const usePostDiary = () => {
  const [isPosting, setIsPosting] = useState(false);
  const dispatch = useDispatch();

  const postDiary = async (newDiary) => {
    setIsPosting(true);
    const { data } = await axiosInstance.post("/posts", newDiary);
    setIsPosting(false);
    // 새로운 일기 redux에도 추가
    dispatch(addDiary({ ...newDiary, id: data.id }));
  };

  return { isPosting, postDiary };
};

export const useDeleteDiary = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();

  const deleteDiary = async (id) => {
    setIsDeleting(true);
    await axiosInstance.delete(`/posts/${id}`);
    setIsDeleting(false);
    // 삭제된 일기를 Redux store에서도 제거
    dispatch(deleteDiaryById(id));
  };

  return { isDeleting, deleteDiary };
};
