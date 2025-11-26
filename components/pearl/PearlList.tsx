import { Pearl } from "@/types/pearl";
import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PearlCard } from "./PearlCard";

export default function PearlList({
  pearls,
  filterPearls,
}: {
  pearls: Pearl[];
  filterPearls: (query: string) => void;
}) {
  const [filter, setFilter] = useState("");

  const handlePearlFilter = (query: string) => {
    setFilter(query);
    filterPearls(query);
  };

  const handlePress = (pearl: Pearl) => {
    filterPearls(pearl.title);
  };

  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.pearlListContainer,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal: insets.left,
      }}
    >
      <TextInput
        style={styles.pearlListInput}
        onChangeText={handlePearlFilter}
        value={filter}
        placeholder="Søk etter perle"
        keyboardType="default"
      />
      <FlatList
        data={pearls}
        style={{ marginVertical: 20 }}
        contentContainerStyle={{ gap: 25 }}
        renderItem={({ item }) => (
          <Pressable onPress={() => handlePress(item)}>
            <PearlCard
              id={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
            />
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pearlListContainer: {
    flex: 1,
    alignItems: "center",
  },

  pearlListInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "90%",
  }
});
