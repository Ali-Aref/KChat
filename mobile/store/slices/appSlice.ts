import { Language } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type InitialState = {
  language: Language;
};

const initialState: InitialState = {
  language: {
    code: "en",
    rtl: false,
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { setLanguage } = appSlice.actions;
