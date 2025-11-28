import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ProfileSettingCardProps {
  setting: string;
  settingInfo?: string;
}

export const ProfileSettingCard = ({
  setting,
  settingInfo,
}: ProfileSettingCardProps) => {
  return (
    <View style={styles.settingCardContainer}>
      <Text style={styles.text}>{setting + ":"}</Text>
      <Text style={styles.text}>{settingInfo ? settingInfo : " ERROR"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  settingCardContainer: {
    flexDirection: "row",
    width: "100%",
  },
});
