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
        flex: 1,
        alignItems: "center",
        width: "100%",
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
        style={styles.pearlListFlatList}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <Pressable
            style={styles.pearlListItem}
            onPress={() => handlePress(item)}
          >
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
    width: "100%",
    height: "100%",
  },

  pearlListInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "90%",
  },

  pearlListFlatList: {
    marginVertical: 20,
    width: "90%",
    //height: 100,
  },

  pearlListItem: {
    width: "47%",
    marginBottom: 10,
  },
});
