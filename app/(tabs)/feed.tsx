import { useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import { ActivityIndicator, FlatList, View, StyleSheet } from "react-native";
import { PearlCard } from "../../components/pearl/PearlCard";
import { getAllPearlsFromDatabase } from "../../handlers/pearlHandler";
import { Pearl } from "../../types/pearl";
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
      <View style={localStyles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
  return (
    <View style={localStyles.container}>
      <FlatList
        data={pearls}
        keyExtractor={(item) => item.id}
        contentContainerStyle={localStyles.content} 
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
const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfffd",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcfffd",
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 20, 
  },
});
export default Feed;

