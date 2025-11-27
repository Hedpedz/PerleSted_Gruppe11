import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../../app/styles";
import { Feather } from "@expo/vector-icons";

interface SettingCardProps {
  setting: string;
  value: string;         
  isEditing: boolean;   
  onChangeText: (text: string) => void; 
  onEditPress: () => void;
  onSavePress: () => void; 
}

export const SettingCard = ({
  setting,
  value,
  isEditing,
  onChangeText,
  onEditPress,
  onSavePress
}: SettingCardProps) => {
  
  return (
    <View style={styles.settingFormText}>
      <View style={{flexDirection: 'row', flex: 1, marginRight: 10}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{setting}: </Text>
        
        {isEditing ? (
          <TextInput 
            style={styles.inlineInput}
            value={value}
            onChangeText={onChangeText}
            autoFocus={true}
          />
        ) : (
          <Text style={{fontSize: 16}} numberOfLines={1} ellipsizeMode="tail">
            {value ? value : "Mangler info"}
          </Text>
        )}
      </View>

      <Pressable 
        style={styles.settingsSmallButton} 
        onPress={isEditing ? onSavePress : onEditPress}
      >
        <Feather name={isEditing ? "check" : "edit-3"} size={22} color="#000" />
      </Pressable>
    </View>
  );
};
