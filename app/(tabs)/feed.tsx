import { useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { PearlCard } from "../../components/pearl/PearlCard";
import { getAllPearlsFromDatabase } from "../../handlers/pearlHandler";
import { Pearl } from "../../types/pearl";
import { styles } from "../styles";

const Feed = () => {
  const [pearls, setPearls] = useState<Pearl[]>([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const fetchPearls = async () => {
        try {
          const data = await getAllPearlsFromDatabase();
          setPearls(data as Pearl[]);
        } catch (error) {
          console.error("Kunne ikke hente feed:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchPearls();
    }, [])
  );

  if (loading) {
    return (
      <View style={styles.feedLoading}>
        <ActivityIndicator/>
      </View>
    );
  }

  return (
    <View style={styles.feedContainer}>
      <FlatList
        data={pearls}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.feedContent} 
        renderItem={({ item }) => (
          <PearlCard
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl} 
          />
        )}
      />
    </View>
  );
};

export default Feed;