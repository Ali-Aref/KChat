import { Language } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DarkMode = "dark" | "light" | "system";

type InitialState = {
  darkmode: DarkMode;
  language: Language;
};

const initialState: InitialState = {
  darkmode: "system",
  language: {
    code: "en",
    rtl: false,
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setDarkmode: (state, action: PayloadAction<DarkMode>) => {
      state.darkmode = action.payload;
    },
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { setLanguage, setDarkmode } = appSlice.actions;
