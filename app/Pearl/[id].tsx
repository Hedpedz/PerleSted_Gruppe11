import { View, Text, Image, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, Stack } from 'expo-router'
import { DummyPearls } from '../../data/pearlsDummy';
import { Pearl } from '../../types/pearl';

export default function PearlDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const [pearl, setPearl] = useState<(typeof DummyPearls)[number] | null>(null);
  
    useEffect(() => {
      const found = DummyPearls.find((p) => p.id === id);
      setPearl(found ?? null);
    }, [id]);
  
    if (!pearl) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Fant ikke perle</Text>
        </View>
      );
    }
  
    const imgSrc = pearl.imageLocal
      ? pearl.imageLocal
      : pearl.imageUrl
      ? { uri: pearl.imageUrl }
      : null;
  
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Stack.Screen options={{ title: pearl.title }} />
  
        {imgSrc ? (
          <Image source={imgSrc} style={{ width: "100%", height: 280 }} resizeMode="cover" />
        ) : null}
  
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: "700" }}>{pearl.title}</Text>
  
          {pearl.rating ? (
            <Text style={{ marginTop: 4, color: "#6B7280" }}>
              {pearl.rating.toFixed(1)} / 5
            </Text>
          ) : null}
  
          {pearl.description ? (
            <Text style={{ marginTop: 10, lineHeight: 20 }}>{pearl.description}</Text>
          ) : null}

        </View>
      </ScrollView>
    );
  }

/*const Pearl = () => {
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text>Pearl {id}</Text>
        </View>
    )
}*/