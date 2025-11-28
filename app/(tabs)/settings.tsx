import { Image } from "expo-image";
import { signOut } from "firebase/auth";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SettingCard } from "../../components/settings/SettingCard";
import { auth } from "../../FirebaseConfig";
import { useProfileSettings } from "../../hooks/useProfileSettings";
import { styles as globalStyles } from "../styles";
const Settings = () => {
  const {
    username, email, phoneNumber, imageUrl, verified, 
    activeField, tempValue, setTempValue,             
    handleStartEdit, handleSave,
    handleUpdateProfileImage, 
    loadingImage              
  } = useProfileSettings();

  const handleLogout = async () => {
    try { 
      await signOut(auth);
     } catch (error) { 
      console.error(error);
     }
  };
  
  return (
    <View style={localStyles.container}>
      <Image
        source={typeof imageUrl === "string" ? { uri: imageUrl } : imageUrl}
        style={localStyles.image}
      />
      <Pressable 
        style={localStyles.pictureButton} 
        onPress={handleUpdateProfileImage} 
        disabled={loadingImage}
      >
         <Text style={globalStyles.formButtonText}>
            {loadingImage ? "Laster opp..." : "Endre bilde"}
         </Text>
      </Pressable>
      <View style={localStyles.settingsList}>
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
      <View style={{height: 20}} />
      <Pressable style={globalStyles.formButton} onPress={handleLogout}>
        <Text style={globalStyles.formButtonText}>Logg ut</Text>
      </Pressable>
    </View>
  );
};
const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
    paddingTop: 20,
    gap: 10,
    width: "90%",
    alignSelf: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderWidth: 4,
    borderRadius: 80,
    borderColor: "#E1F8D7",
    alignSelf: "center",
  },
  pictureButton: {
    alignItems: "center",
    backgroundColor: "#E1F8D7",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center", 
    marginBottom: 20,
  },
  settingsList: {
    width: "100%",
    gap: 5, 
  },
});
export default Settings;

