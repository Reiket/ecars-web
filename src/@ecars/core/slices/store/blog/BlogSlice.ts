import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

type BlogCategoryType = string | null;

interface BlogState {
  activeCategory: BlogCategoryType;
  currentPage: number;
  pageSize: number;
}

const initialState: BlogState = {
  activeCategory: null,
  currentPage: 1,
  pageSize: 6,
};

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<BlogCategoryType>) => {
      state.activeCategory = action.payload;
      state.currentPage = 1;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const {setCategory, setPage} = blogSlice.actions;
export default blogSlice.reducer;
