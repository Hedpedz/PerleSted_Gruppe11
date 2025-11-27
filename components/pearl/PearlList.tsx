import { Pearl } from "@/types/pearl";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PearlCard } from "./PearlCard";

export default function PearlList({
  pearls,
  filterPearls,
  useInsets = true,
}: {
  pearls: Pearl[];
  filterPearls: (query: string) => void;
  useInsets?: boolean;
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
        paddingTop: useInsets ? insets.top : 0,
        paddingBottom: useInsets ? insets.bottom : 0,
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
      <View style={styles.pearlListFlatList}>
        <View style={styles.pearlListNestedView}>
          {pearls.map((item) => (
            <View key={item.id} style={styles.pearlListItem}>
              <PearlCard
                id={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
              />
            </View>
          ))}
        </View>
      </View>
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

  pearlListNestedView: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
