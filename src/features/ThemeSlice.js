import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeType: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeHandler: (state, action) => {
      state.themeType = !state.themeType;
    },
  },
});
export default themeSlice.reducer;
export const { themeHandler } = themeSlice.actions;
