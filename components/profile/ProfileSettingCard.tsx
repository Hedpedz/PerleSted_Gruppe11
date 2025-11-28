import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../app/styles";

interface ProfileSettingCardProps {
  setting: string;
  settingInfo?: string;
}

export const ProfileSettingCard = ({
  setting,
  settingInfo,
}: ProfileSettingCardProps) => {
  return (
    <View style={[styles.profileSettingCardContainer, { 
        flexDirection: 'row',  
        gap: 5 
    }]}>
      
      <Text style={[styles.profileText, { fontWeight: 'bold' }]}>
        {setting}:
      </Text>

      <Text style={styles.profileText}>
        {settingInfo ? settingInfo : "Ikke satt"}
      </Text>
      
    </View>
  );
};