import { createSlice } from '@reduxjs/toolkit'
import { getLocales } from 'expo-localization'

const initialState = {
	language: getLocales()[0].languageCode ?? "en",
} as const

const AppSlice = createSlice({
	name: "app",
	initialState,
	reducers: {}
})

export default AppSlice.reducer;
