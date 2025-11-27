import { getPearlFromDatabase } from "@/handlers/pearlHandler";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function PearlDetailScreen() {
  const router = useRouter();
  const [pearl, setPearl] = useState<any>(null);
  const pearlID = useLocalSearchParams<{ pearlID: string }>().pearlID;
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPearl = async () => {
      setLoading(true);
      const pearlData = await getPearlFromDatabase(pearlID);

      if (!pearlData) {
        throw new Error("Pearl not found");
      }

      setPearl(pearlData);

      setLoading(false);
    };
    getPearl();
  }, [pearlID]);

  if (!pearl) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Fant ikke perle</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f9fff7" }}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={{ position: "relative" }}>
        {pearl.imageUrl ? (
          <Image
            source={{ uri: pearl.imageUrl }}
            style={{ width: "100%", height: 280 }}
            resizeMode="cover"
          />
        ) : (
          <View
            style={{
              width: "100%",
              height: 280,
              backgroundColor: "#e5e7eb",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#6b7280" }}>No image</Text>
          </View>
        )}

        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            position: "absolute",
            top: 40,
            left: 16,
            backgroundColor: "rgba(255,255,255,0.8)",
            borderRadius: 30,
            padding: 6,
          }}
          hitSlop={8}
        >
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>

        {/* Favorite button */}
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 280,
            right: 10,
            backgroundColor: "rgba(255,255,255,0.8)",
            borderRadius: 50,
            padding: 6,
          }}
          hitSlop={8}
        >
          <Ionicons name="heart-outline" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Content card */}
      <View>
        <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 6 }}>
          {pearl.title}
        </Text>

        {!!pearl.description && (
          <Text style={{ color: "#444", lineHeight: 20, marginBottom: 10 }}>
            {pearl.description}
          </Text>
        )}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Ionicons name="star" size={18} color="#000" />
          <Text style={{ marginLeft: 4, fontSize: 16 }}>
            {pearl.rating ?? null}
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="person-circle-outline" size={20} color="#000" />
          <Text style={{ marginLeft: 6 }}>
            Opprettet av {pearl.createdBy ?? "Ukjent"}
          </Text>
        </View>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}
