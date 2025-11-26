import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  TextInput,
} from "react-native";
import { addPearlToDatabase } from "../../handlers/pearlHandler";
import { styles } from "../styles";

const testImageUri =
  "https://www.hiof.no/bilder/bildegalleri/halden/102-remmen-studiestart-2011bha.jpg";

export default function NewPlacesScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [pearlID, setPearlID] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [imageUri, setImageUri] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    if (isLoading) return;
    setIsLoading(true);

    const testLatitude = "test";
    const testLongitude = "test";

    setLatitude(testLatitude);
    setLongitude(testLongitude);

    try {
      const pearlData = {
        title: title,
        description: description,
        latitude: latitude,
        longitude: longitude,
      };

      setImageUri(testImageUri);
      await addPearlToDatabase(imageUri, pearlData);

      console.log("Ny perle opprettet:", pearlData);
    } catch (error: any) {
      console.error("Feil ved oppretting av perle:", error);
      alert("Feil ved oppretting av perle: " + error);
    } finally {
      setIsLoading(false);
      setTitle("");
      setDescription("");

      router.back();
    }

    /*
    await addPearl

    console.log("Ny perle opprettet (dummy):", {
      title,
      description,
    });

    setIsLoading(false);

    setTitle("");
    setDescription("");
    */
  };

  return (
    <ScrollView contentContainerStyle={styles.formContainer}>
      <Text style={styles.formTitle}>Plott en ny Perle</Text>

      <TextInput
        style={styles.formInput}
        placeholderTextColor="#888888"
        placeholder="Tittel på perlen"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.formInput, { height: 100, textAlignVertical: "top" }]}
        placeholderTextColor="#888888"
        placeholder="Beskrivelse"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />

      <Link href="../map-picker" asChild>
        <Pressable style={styles.formButton}>
          <Text style={styles.formButtonText}>Velg plassering på kart</Text>
        </Pressable>
      </Link>

      <Pressable
        style={styles.formButton}
        onPress={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.formButtonText}>Opprett Perle</Text>
        )}
      </Pressable>
    </ScrollView>
  );
}
