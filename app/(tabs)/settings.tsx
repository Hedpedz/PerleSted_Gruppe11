import { Image } from "expo-image";
import { Text, View } from "react-native";

import { SettingCard } from "../../components/settings/SettingCard";

import image from "../../assets/beluga.png";
import Button from "../../components/Button";
import { styles } from "../styles";

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
  return (
    <View style={styles.settingsContainer}>
      <Image
        source={imageUrl ? { uri: imageUrl } : image}
        style={styles.profileImage}
      />
      <Button
        text="Endre bilde"
        path="./profile"
        buttonStyle={styles.settingsBigButton}
        buttonTextStyle={styles.text}
      />
      <SettingCard
        setting="Brukernavn"
        settingInfo={username}
        btnText="Endre"
      />
      <SettingCard setting="Passord" settingInfo="********" btnText="Endre" />
      <SettingCard setting="E-post" settingInfo={email} btnText="Endre" />
      <SettingCard
        setting="Telefonnummer"
        settingInfo={phoneNumber}
        btnText="Endre"
      />
      <SettingCard
        setting="Varsler"
        settingInfo={notifications ? "På" : "Av"}
        btnText="Endre"
      />
      <Text> </Text>
      <Button
        text="Logg ut"
        path=".././"
        buttonStyle={styles.settingsBigButton}
        buttonTextStyle={styles.text}
      />
    </View>
  );
};

export default Settings;
