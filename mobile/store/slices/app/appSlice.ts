import { SupportedLanguages } from '@/i18n'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getLocales } from 'expo-localization'

const initialState = {
	language: getLocales()[0].languageCode ?? "en",
} as const

const AppSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		changeLanguage: (state, action: PayloadAction<SupportedLanguages>) => {
			state.language = action.payload
		},
	},
})

export default AppSlice.reducer;
export const { changeLanguage } = AppSlice.actions;
