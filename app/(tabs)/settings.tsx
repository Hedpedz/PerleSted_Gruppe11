import { Image } from "expo-image";
import { signOut } from "firebase/auth";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SettingCard } from "../../components/settings/SettingCard";
import { auth } from "../../FirebaseConfig";
import { styles } from "../styles";

import { useProfileSettings } from "../../hooks/useProfileSettings";

const Settings = () => {
  const {
    username, email, phoneNumber, imageUrl, verified, 
    activeField, tempValue, setTempValue,             
    handleStartEdit, handleSave                      
  } = useProfileSettings();

  const handleLogout = async () => {
    try { 
      await signOut(auth);
     } catch (error) {
       console.error(error); 
      }
  };

  return (
    <View style={styles.profileContainer}>
      <Image
        source={typeof imageUrl === "string" ? { uri: imageUrl } : imageUrl}
        style={styles.profileImageSettings}
      />
      <Pressable style={styles.settingsPictureButton} onPress={() => alert("skal fikse")}>
         <Text style={styles.formButtonText}>Endre bilde</Text>
      </Pressable>

      <View style={styles.settingsContainer}>
        <SettingCard
          setting="Brukernavn"
          value={activeField === "username" ? tempValue : username} 
          isEditing={activeField === "username"}
          onChangeText={setTempValue}
          onEditPress={() => handleStartEdit("username", username)}
          onSavePress={() => handleSave("username")}
        />
        <SettingCard
          setting="E-post"
          value={activeField === "email" ? tempValue : email}
          isEditing={activeField === "email"}
          onChangeText={setTempValue}
          onEditPress={() => handleStartEdit("email", email)}
          onSavePress={() => handleSave("email")}
        />
        <SettingCard
          setting="Telefonnummer"
          value={activeField === "phoneNumber" ? tempValue : phoneNumber}
          isEditing={activeField === "phoneNumber"}
          onChangeText={setTempValue}
          onEditPress={() => handleStartEdit("phoneNumber", phoneNumber)}
          onSavePress={() => handleSave("phoneNumber")}
        />
      </View>
      <Text> </Text>

      <Pressable style={styles.settingsBigButton} onPress={handleLogout}>
        <Text style={styles.formButtonText}>Logg ut</Text>
      </Pressable>
    </View>
  );
};

export default Settings;