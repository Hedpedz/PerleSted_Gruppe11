import RateButton from "@/components/pearl/RateButton";
import { getPearlFromDatabase } from "@/handlers/pearlHandler";
import {
  addFavoritePearl,
  addRatingUser,
  getFavoritePearls,
  getRatingUser,
  removeFavoritePearl,
} from "@/handlers/userHandler";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function PearlDetailScreen() {
  const router = useRouter();
  const [pearl, setPearl] = useState<any>(null);
  const { pearlID } = useLocalSearchParams<{ pearlID?: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    if (!pearlID) {
      return;
    }

    const getPearl = async () => {
      setLoading(true);
      const pearlData = await getPearlFromDatabase(pearlID as string);

      if (!pearlData) {
        throw new Error("Pearl not found");
      }

      setPearl(pearlData);

      setLoading(false);
    };

    const checkIfFavorite = async () => {
      if (pearlID) {
        const favorites = await getFavoritePearls();
        setIsFavorite(favorites.includes(pearlID));
      }
    };

    const fetchUserRating = async () => {
      if (pearlID) {
        const userRating = await getRatingUser(pearlID);
        setRating(userRating);
      }
    };

    const ratePearl = async () => {
      if (pearlID) {
        try {
          const userRating = await getRatingUser(pearlID);
          await addRatingUser(pearlID, userRating);
          setRating(userRating);

          const currentPearl = await getPearlFromDatabase(pearlID);

          if (currentPearl) {
            setPearl(currentPearl);
          }
        } catch (error) {
          alert("Noe gikk galt ved rating av perlen: " + error);
        }
      }
    };

    getPearl();
    checkIfFavorite();
    fetchUserRating();
  }, [pearlID]);

  const toggleFavorite = async () => {
    if (!pearlID) {
      alert("Ugyldig perle-ID");
      return;
    }

    try {
      if (isFavorite) {
        await removeFavoritePearl(pearlID);
        setIsFavorite(false);
        alert("Perlen er fjernet fra dine favoritter");
      } else {
        await addFavoritePearl(pearlID);
        setIsFavorite(true);
        alert("Perlen er lagt til som favoritt");
      }
    } catch (error) {
      alert("En feil oppstod: " + error);
    }
  };

  if (!pearl) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Fant ikke perle</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f9fff7",
        width: "90%",
        alignSelf: "center",
        paddingTop: 40,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#f9fff7",
        }}
      >
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

          <TouchableOpacity
            style={{
              position: "absolute",
              top: 220,
              right: 10,
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: 50,
              padding: 8,
            }}
            hitSlop={8}
            onPress={() => toggleFavorite()}
          >
            <FontAwesome
              name={isFavorite ? "heart" : "heart-o"}
              size={35}
              color={isFavorite ? "red" : "black"}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "700",
              marginBottom: 6,
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            {pearl.title}
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 8,
              marginLeft: 10,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ marginRight: 6, fontSize: 16 }}>{`Anmeldelser: ${
              pearl.currentAmountOfRatings ?? 0
            }`}</Text>
            <Text style={{ marginRight: 10, fontSize: 16 }}>
              {`Gjennomsnitt: ${pearl.avgRating ?? "Ingen anmeldelser enda"}`}
            </Text>
          </View>

          {!!pearl.description && (
            <Text
              style={{
                color: "#444",
                lineHeight: 20,
                marginBottom: 10,
                marginLeft: 10,
              }}
            >
              {pearl.description}
            </Text>
          )}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <Ionicons name="person-circle-outline" size={20} color="#000" />
            <Text style={{ marginLeft: 6 }}>
              Opprettet av {pearl.createdBy ?? "Ukjent"}
            </Text>
          </View>

          <View
            style={{
              marginLeft: 10,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RateButton
              value={1}
              pearlID={pearlID as string}
              isRated={rating >= 1 ? true : false}
            />
            <RateButton
              value={2}
              pearlID={pearlID as string}
              isRated={rating >= 2 ? true : false}
            />
            <RateButton
              value={3}
              pearlID={pearlID as string}
              isRated={rating >= 3 ? true : false}
            />
            <RateButton
              value={4}
              pearlID={pearlID as string}
              isRated={rating >= 4 ? true : false}
            />
            <RateButton
              value={5}
              pearlID={pearlID as string}
              isRated={rating >= 5 ? true : false}
            />
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}
