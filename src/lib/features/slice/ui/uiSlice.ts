import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  sidebar: boolean;
}

const initialState: UiState = {
  sidebar: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebar = !state.sidebar;
    },
  },
});

export const { toggleSidebar } = uiSlice.actions;
export default uiSlice.reducer;
