import Button from "@/components/Button";
import PearlList from "@/components/pearl/PearlList";
import { getAllPearlsFromDatabase } from "@/handlers/pearlHandler";
import { Pearl } from "@/types/pearl";
import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "../styles";

const Home = () => {
  const [pearls, setPearls] = useState<Pearl[]>([]);
  const [filteredPearls, setFilteredPearls] = useState<Pearl[]>([]);

  React.useEffect(() => {
    const getPearls = async () => {
      const allPearls = await getAllPearlsFromDatabase();

      setPearls(allPearls as Pearl[]);
      setFilteredPearls(allPearls as Pearl[]);
    };
    getPearls();
  }, []);

  const filterPearls = (query: string) => {
    const filtered = pearls.filter((pearl) =>
      pearl.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPearls(filtered);
  };

  return (
    <View style={styles.homeContainer}>
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
      <PearlList pearls={filteredPearls} filterPearls={filterPearls} />
    </View>
  );
};

export default Home;
