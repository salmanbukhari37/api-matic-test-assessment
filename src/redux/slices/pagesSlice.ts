import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PagesState } from "dto/interfaces/IPageState.interface";
import { pagesContent } from "../../dto/data";

const savedPages = localStorage.getItem("pages");

const initialState: PagesState = {
  pages: savedPages ? JSON.parse(savedPages) : pagesContent.Pages,
  isEditing: false,
};

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    updatePageContent: (
      state,
      action: PayloadAction<{ index: number; title: string; bodyText?: string }>
    ) => {
      const { index, title, bodyText } = action.payload;

      state.pages[index].title = title;

      if (bodyText) {
        state.pages[index].bodyText = bodyText;
      }

      localStorage.setItem("pages", JSON.stringify(state.pages));
    },
    setEditing: (state, action: PayloadAction<boolean>) => {
      state.isEditing = action.payload;
    },
  },
});

export const { updatePageContent, setEditing } = pagesSlice.actions;

export default pagesSlice.reducer;
