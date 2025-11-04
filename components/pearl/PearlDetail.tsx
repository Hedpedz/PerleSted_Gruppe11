
import React from "react";
import {Text, StyleSheet, View, ScrollView} from "react-native";
import { Image } from "expo-image";

import { DummyPearls } from "../../data/pearlsDummy";

type PearlDetailProps = {
    id: string;
};

export const PearlDetail: React.FC<PearlDetailProps> = ({ id }) => {
    const pearl = DummyPearls.find((p) => p.id === id);
  
    if (!pearl) {
      return <Text style={{ padding: 16 }}>Fant ikke perle</Text>;
    }
  
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
        {pearl.imageUrl ? (
          <Image source={{ uri: pearl.imageUrl }} style={{ width: "100%", height: 280 }} />
        ) : null}
  
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: "700" }}>{pearl.title}</Text>
          {pearl.description ? (
            <Text style={{ marginTop: 10, lineHeight: 20 }}>
              {pearl.description}
            </Text>
          ) : null}
        </View>
      </ScrollView>
    );
  };
export default PearlDetail;