import { Image } from "expo-image";
import { signOut } from "firebase/auth";
import React from "react";
import { Pressable, Text, View } from "react-native";
import image from "../../assets/beluga.png";
import Button from "../../components/Button";
import { SettingCard } from "../../components/settings/SettingCard";
import { auth } from "../../FirebaseConfig";
import { getUserDataFromDatabase } from "../../handlers/userHandler";
import { styles } from "../styles";

const dummyProfileData = {
  imageUrl: image,
  username: "Katt",
  verified: true,
  phoneNumber: "12345678",
  email: "katt@example.com",
  notifications: true,
};

const Settings = async ({}) => {
  const userData = await getUserDataFromDatabase();

  const imageUrl = userData?.imageUrl || dummyProfileData.imageUrl;
  const username = userData?.username || dummyProfileData.username;
  const verified = userData?.verified || dummyProfileData.verified;
  const phoneNumber = userData?.phoneNumber || dummyProfileData.phoneNumber;
  const email = userData?.email || dummyProfileData.email;
  const notifications =
    userData?.notifications ?? dummyProfileData.notifications;

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Feil ved utlogging:", error);
    }
  };

  return (
    <View style={styles.profileContainer}>
      <Image
        source={imageUrl ? { uri: imageUrl } : image}
        style={styles.profileImageSettings}
      />
      <Button
        text="Endre bilde"
        path="./profile"
        buttonStyle={styles.settingsPictureButton}
        buttonTextStyle={styles.formButtonText}
      />
      <View style={styles.settingsContainer}>
        <SettingCard
          setting="Brukernavn"
          settingInfo={username}
          btnText="Endre"
        />
        <SettingCard
          setting="Passord"
          settingInfo="********"
          btnText="Endre"
          style={styles.settingFormText}
        />
        <SettingCard
          setting="E-post"
          settingInfo={email}
          btnText="Endre"
          style={styles.settingFormText}
        />
        <SettingCard
          setting="Telefonnummer"
          settingInfo={phoneNumber}
          btnText="Endre"
          style={styles.settingFormText}
        />
        <SettingCard
          setting="Varsler"
          settingInfo={notifications ? "På" : "Av"}
          btnText="Endre"
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
