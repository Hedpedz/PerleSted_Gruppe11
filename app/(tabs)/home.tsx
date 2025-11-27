import Button from "@/components/Button";
import PearlList from "@/components/pearl/PearlList";
import { Pearl } from "@/types/pearl";
import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "../styles";

const Home = () => {
  const [pearls, setPearls] = useState<Pearl[]>([]);
  return (
    <View>
      <Button
        text="Min profil"
        path="/profile"
        buttonStyle={styles.profileButton}
        buttonTextStyle={styles.profileText}
      />
      <Button
        text="Innstillinger"
        path="/settings"
        buttonStyle={styles.profileButton}
        buttonTextStyle={styles.profileText}
      />
      <PearlList pearls={pearls} filterPearls={() => {}} />
    </View>
  );
};

export default Home;
