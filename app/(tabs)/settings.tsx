import { Image } from "expo-image";
import { SettingCard } from "../../components/settings/SettingCard";
import React from "react";
import { Pressable, Text, View } from "react-native"; 
import image from "../../assets/beluga.png";
import Button from "../../components/Button"; 
import { styles } from "../styles";
import { signOut } from "firebase/auth";
import { auth } from "../../FirebaseConfig";

interface ProfileHeaderProps {
  imageUrl?: string;
  username: string;
  verified: boolean;
  email: string;
  phoneNumber: string;
  notifications: boolean;
  password?: string;
}

const dummyProfileData = {
  imageUrl: image,
  username: "Katt",
  verified: true,
  phoneNumber: "12345678",
  email: "katt@example.com",
  notifications: true,
  password: "hashedpassword",
};

const Settings = ({
  imageUrl,
  username = dummyProfileData.username,
  verified = dummyProfileData.verified,
  email = dummyProfileData.email,
  password = dummyProfileData.password,
  phoneNumber = dummyProfileData.phoneNumber,
  notifications = dummyProfileData.notifications,
}: ProfileHeaderProps) => {


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

      <Pressable 
        style={styles.settingsBigButton} 
        onPress={handleLogout}          
      >
        <Text style={styles.formButtonText}>Logg ut</Text>
      </Pressable>

    </View>
  );
};

export default Settings;
