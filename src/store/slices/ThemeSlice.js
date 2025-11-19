import { createSlice } from "@reduxjs/toolkit";

const initialTheme = localStorage.getItem("theme") || "dark";

document.documentElement.classList.toggle("dark", initialTheme === "dark");

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: initialTheme,
  },
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "dark" ? "light" : "dark";

      localStorage.setItem("theme", state.theme);

      document.documentElement.classList.toggle("dark", state.theme === "dark");
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
