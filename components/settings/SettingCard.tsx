import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../app/styles";
import Button from "../Button";

interface SettingCardProps {
  setting: string;
  settingInfo?: string;
  btnText: string;
  path?: Parameters<typeof router.push>[0];
  style?: object;


}

export const SettingCard = ({
  setting,
  settingInfo,
  btnText,
  // route = "changesetting",
  path = "/settings",
}: SettingCardProps) => {
  return (
    <View style={styles.settingsContainer}>
      <View style={styles.settingFormText}>
        <Text style={styles.settingFormText}>{setting + ": "}</Text>
        <Text style={styles.settingFormText}>{settingInfo ? settingInfo : "ERROR"}</Text>
      </View>
      <Button
        text={btnText}
        path={path}
        buttonStyle={styles.settingsSmallButton}
        buttonTextStyle={styles.formButtonText}
      />
    </View>
  );
};
