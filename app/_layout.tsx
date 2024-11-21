"use strict";

import { FC, } from "react";
import { SafeAreaView, } from "react-native";
import { PaperProvider, Button, } from "react-native-paper";
import i18n from "@/app-i18n.config";

const Template: FC = () =>
{
    return (

        <PaperProvider>
            <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
                <Button icon="account" mode="contained" onPress={() => {}}>
                    {i18n.t ("common.welcome")}
                </Button>
            </SafeAreaView>
        </PaperProvider>
    );
};

export default Template;
