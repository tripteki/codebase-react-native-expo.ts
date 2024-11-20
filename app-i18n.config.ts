"use strict";

import { Platform, } from "react-native";
import { I18n, } from "i18n-js";
import { getLocales, } from "expo-localization";

import * as en from "./langs/en.json";
import * as id from "./langs/id.json";

const i18n: I18n = new I18n (
{
    en,
    id,
});

i18n.enableFallback = true;
i18n.defaultLocale = process.env.EXPO_PUBLIC_APP_LANG ?? "en";
i18n.locale = Platform.OS !== "web" ? getLocales ()?.[0]?.languageCode ??
              i18n.defaultLocale as string
              :
              i18n.defaultLocale;

export default i18n;
