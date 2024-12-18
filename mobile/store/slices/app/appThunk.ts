import { RTLLanguages, SupportedLanguages } from "@/utils/i18n";
import { changeLanguage } from "./appSlice";
import { AppDispatch, RootState } from "@/store";
import { I18nManager } from "react-native";
import i18next from "i18next";
import * as Updates from "expo-updates";

export const changeLanguageThunk =
  (language: SupportedLanguages) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
		i18next.changeLanguage(language)

    const isRTL = RTLLanguages.includes(language);
		if (I18nManager.isRTL !== isRTL){
			I18nManager.isRTL = isRTL;
			I18nManager.allowRTL(isRTL);
			I18nManager.forceRTL(isRTL);
			!__DEV__ && Updates.reloadAsync();
		}
    dispatch(changeLanguage(language));
  };
