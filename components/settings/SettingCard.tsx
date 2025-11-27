import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "../../app/styles";
import { Feather } from "@expo/vector-icons"; 

interface SettingCardProps {
  setting: string;
  settingInfo?: string;
  path?: Parameters<typeof router.push>[0];
  style?: object;
}

export const SettingCard = ({
  setting,
  settingInfo,
  path = "/settings", 
}: SettingCardProps) => {
  
  const handlePress = () => {
    console.log("Endre " + setting);
  };

  return (
    <View style={styles.settingFormText}>
      <View style={{flexDirection: 'row', flex: 1, marginRight: 10}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{setting}: </Text>
        <Text style={{fontSize: 16}} numberOfLines={1} ellipsizeMode="tail">
            {settingInfo ? settingInfo : "Mangler info"}
        </Text>
      </View>

      <Pressable 
        style={styles.settingsSmallButton} 
        onPress={handlePress}
      >
        <Feather name="edit-3" size={22} color="#000" />
      </Pressable>
    </View>
  );
};
