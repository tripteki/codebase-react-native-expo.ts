"use strict";

const { name, version, } = require ("./package.json");

export const appConfig = {

    appName: process.env.EXPO_PUBLIC_APP_NAME || name || "codebase",
    appVersion: process.env.EXPO_PUBLIC_APP_VERSION || version || "1.0.0",
    baseURL: process.env.EXPO_PUBLIC_APP_URL || "/",
    apiURL: process.env.EXPO_PUBLIC_BASE_URL || "http://api.backend.localhost",
    authURL: process.env.EXPO_PUBLIC_AUTH_URL || "http://api.backend.localhost/auth",
};

export default {

    expo: {

        name: appConfig.appName,
        slug: appConfig.appName,
        version: appConfig.appVersion,
        orientation: "portrait",
        icon: "./assets/images/icon.png",
        scheme: "myapp",
        userInterfaceStyle: "automatic",
        newArchEnabled: true,

        android: {
            adaptiveIcon: {
                foregroundImage: "./assets/images/adaptive-icon.png",
                backgroundColor: "#ffffff",
            },
        },

        ios: {
            supportsTablet: true,
        },

        web: {
            bundler: "metro",
            output: "static",
            favicon: "./assets/images/favicon.png",
        },



        extra: {

            ... appConfig,
            supportsRTL: false,
            forcesRTL: false,
        },

        plugins: [

            "expo-router",
            [
                "expo-splash-screen",
                {
                    image: "./assets/images/splash-icon.png",
                    imageWidth: 200,
                    resizeMode: "contain",
                    backgroundColor: "#ffffff",
                },
            ],

            "expo-localization",

        ],

        experiments: {
            baseUrl: appConfig.baseURL,
            typedRoutes: true,
        },
    },
};
