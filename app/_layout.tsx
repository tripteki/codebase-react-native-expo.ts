"use strict";

import { FC, } from "react";
import { Text, } from "react-native";
import i18n from "@/app-i18n.config";

const Template: FC = () =>
{
    return (

        <Text>{i18n.t ("common.welcome")}</Text>
    );
};

export default Template;
