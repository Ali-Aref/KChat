import React from 'react'
import { withUnistyles } from 'react-native-unistyles'
import { Feather } from '@expo/vector-icons'


export const UniFeather = withUnistyles(Feather, (theme)=>({
	color: theme.colors.typography,
}))
