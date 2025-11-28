import Button from "@/components/Button";
import PearlList from "@/components/pearl/PearlList";
import { getAllPearlsFromDatabase } from "@/handlers/pearlHandler";
import { Pearl } from "@/types/pearl";
import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { styles as globalStyles } from "../styles"; 

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
    <ScrollView
      style={localStyles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <Button
        text="Min profil"
        path="/profile"
        buttonStyle={globalStyles.profileButton}
        buttonTextStyle={globalStyles.profileText}
      />
      <Button
        text="Innstillinger"
        path="/settings"
        buttonStyle={globalStyles.profileButton}
        buttonTextStyle={globalStyles.profileText}
      />
      <PearlList pearls={filteredPearls} filterPearls={filterPearls} />
    </ScrollView>
  );
};
const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  }
});
export default Home;
