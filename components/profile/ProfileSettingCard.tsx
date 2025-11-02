import { Text, View } from "react-native";
import { styles } from "../../app/styles";
import React from "react";

interface ProfileSettingCardProps {
  setting: string;
  settingInfo?: string;
}

export const ProfileSettingCard = ({
  setting,
  settingInfo,
}: ProfileSettingCardProps) => {
  return (
    <View style={styles.profileSettingCardContainer}>
      <Text style={styles.profileText}>{setting + ":"}</Text>
      <Text style={styles.profileText}>
        {settingInfo ? settingInfo : " ERROR"}
      </Text>
    </View>
  );
};
