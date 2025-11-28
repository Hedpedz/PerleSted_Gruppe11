import { Pearl } from "@/types/pearl";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PearlCard } from "./PearlCard";

// Koden til denne komponenten er kopiert over fra:
// https://github.com/mariuswallin/hiof-2025-mobile/blob/main/student-liste-filter/components/StudentList.tsx
// og modifisert til å passe vår applikasjon

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
        style={styles.input}
        onChangeText={handlePearlFilter}
        value={filter}
        placeholder="Søk etter perle.."
        placeholderTextColor="#000"
        keyboardType="default"
      />
      {/* Måtte gjøre om flatlisten fordi komponenten lastes inn i ScrollView. Tok og wrappet
          to views sammen for å få tilsvarende funksjonalitet og styling som FlatList.
      */}
      <View style={styles.flatList}>
        <View style={styles.nestedView}>
          {pearls.map((item) => (
            <View key={item.id} style={styles.item}>
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
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "90%",
    color: "#000",
    borderColor: "grey",
    borderRadius: 8,
  },

  flatList: {
    marginVertical: 20,
    width: "90%",
  },

  item: {
    width: "47%",
    marginBottom: 10,
  },

  nestedView: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
