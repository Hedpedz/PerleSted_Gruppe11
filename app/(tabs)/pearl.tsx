import RateButton from "@/components/pearl/RateButton";
import { getPearlFromDatabase, updatePearlRating } from "@/handlers/pearlHandler";
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
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PearlDetailScreen() {
  const router = useRouter();
  const [pearl, setPearl] = useState<any>(null);
  const { pearlID } = useLocalSearchParams<{ pearlID?: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    if (!pearlID) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const pearlData = await getPearlFromDatabase(pearlID as string);
        if (pearlData) setPearl(pearlData);

        const favorites = await getFavoritePearls();
        setIsFavorite(favorites.includes(pearlID));

      
        const userRating = await getRatingUser(pearlID);
        setRating(userRating);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pearlID]);

  const ratePearl = async (value: number) => {
    if (!pearlID) return;
    if (rating === value) {
      alert("Du har allerede gitt denne ratingen.");
      return;
    }

    try {
      await updatePearlRating(pearlID as string, value);

      await addRatingUser(pearlID, value);
      setRating(value);

      const updatedPearl = await getPearlFromDatabase(pearlID);
      if (updatedPearl) setPearl(updatedPearl);
      
    } catch (error) {
      alert("Noe gikk galt ved rating av perlen: " + error);
    }
  };

  const toggleFavorite = async () => {
    if (!pearlID) return;
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
      alert("Feil: " + error);
    }
  };

  if (loading) {
    return <View style={localStyles.center}><ActivityIndicator size="large" color="#000" /></View>;
  }

  if (!pearl) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Fant ikke perle</Text>
      </View>
    );
  }

  return (
    <View style={localStyles.container}>
      <ScrollView style={{ flex: 1 }}>
        <Stack.Screen options={{ headerShown: false }} />

        <View style={localStyles.imageSection}>
          {pearl.imageUrl ? (
            <Image source={{ uri: pearl.imageUrl }} style={localStyles.image} />
          ) : (
            <View style={localStyles.noImage}><Text style={{ color: "#6b7280" }}>No image</Text></View>
          )}

          <TouchableOpacity onPress={() => router.back()} style={localStyles.backButton}>
            <Ionicons name="arrow-back" size={22} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={localStyles.favButton} onPress={toggleFavorite}>
          <FontAwesome
              name={isFavorite ? "heart" : "heart-o"}
              size={35}
              color={isFavorite ? "red" : "black"}
            />
          </TouchableOpacity>
        </View>

        <View style={localStyles.contentSection}>
          
          <Text style={localStyles.title}>{pearl.title}</Text>

          <View style={localStyles.statsContainer}>
            <Text style={localStyles.statsText}>
                {`Anmeldelser: ${pearl.currentAmountOfRatings ?? 0}`}
            </Text>
            <Text style={localStyles.statsText}>
                {`Gjennomsnitt: ${pearl.avgRating ? pearl.avgRating.toFixed(1) : "Ingen anmeldelser enda"}`}
            </Text>
          </View>

          {!!pearl.description && (
            <Text style={localStyles.description}>{pearl.description}</Text>
          )}

          <View style={localStyles.creatorRow}>
            <Ionicons name="person-circle-outline" size={24} color="#666" />
            <Text style={{ marginLeft: 8, fontSize: 16, color: "#555" }}>
              Opprettet av <Text style={{ fontWeight: "bold", color: "#000" }}>
                {pearl.createdByUsername || pearl.createdBy || "Ukjent"}
              </Text>
            </Text>
          </View>

          <View style={localStyles.ratingWrapper}>
            <Text style={localStyles.ratingTitle}>Gi din vurdering:</Text>
            <View style={localStyles.ratingRow}>
                {[1, 2, 3, 4, 5].map((val) => (
                    <RateButton 
                        key={val} 
                        value={val} 
                        pearlID={pearlID as string} 
                        isRated={rating >= val} 
                        onPress={() => ratePearl(val)}
                    />
                ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fff7",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageSection: {
    position: "relative",
    width: "100%",
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  noImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#e5e7eb",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 30,
    padding: 8,
    elevation: 5,
  },
  favButton: {
    position: "absolute",
    top: 260,
    right: 20,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 50,
    padding: 12,
    elevation: 5,
  },
  contentSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 10,
    color: "#333",
    textAlign: 'center',
  },
  statsContainer: {
    marginBottom: 20,
    gap: 5, 
    alignItems: 'center', 
  },
  statsText: {
    fontSize: 16,
    color: "#555",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
    marginBottom: 20,
    textAlign: 'left', 
  },
  creatorRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    marginBottom: 30,
  },
  ratingWrapper: {
    alignItems: 'center',
    gap: 15,
  },
  ratingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingRow: {
    flexDirection: "row",
    gap: 12,
  }
});