import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    setDiaries: (state, action) => action.payload,
    addDiary: (state, action) => [action.payload, ...state],
    deleteDiaryById: (state, action) => state.filter((diary) => diary.id !== action.payload),
  },
});

export const { setDiaries, addDiary, deleteDiaryById } = diarySlice.actions;
export default diarySlice.reducer;
