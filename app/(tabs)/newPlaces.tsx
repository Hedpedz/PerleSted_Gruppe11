import { addPearlToDatabase } from "@/handlers/pearlHandler";
import { getUserDataFromDatabase } from "@/handlers/userHandler";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import PerleCameraView from "../../components/camera/CameraViewer";
import { usePerleCamera } from "../../hooks/useCamera";
import { useImagePicker } from "../../hooks/useImagePicker";
import { styles as globalStyles } from "../styles";

export default function NewPlacesScreen() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState<{ lat: number; long: number; } | null>(null);
  const [savedImage, setSavedImage] = useState<string | null>(null);
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const camera = usePerleCamera();
  const gallery = useImagePicker();
  const params = useLocalSearchParams();
  const router = useRouter();
  const finalImage = savedImage || gallery.pickedImage || camera.image;

  useEffect(() => {
    if (params.title) {
      setTitle(params.title as string);
    }

    if (params.description) {
      setDescription(params.description as string);
    }

    if (params.image) {
      setSavedImage(params.image as string);
    }

    if (params.lat && params.long) {
      setLocation({
        lat: parseFloat(params.lat as string),
        long: parseFloat(params.long as string),
      });
    }
  }, [params.lat, params.long, params.title, params.description, params.image]);

  const handleSubmit = async () => {
    if (isLoading) return;
      if (!title) {
      alert("Mangler tittel");
      return;
    }
    if (!finalImage) {
      alert("Mangler bilde");
      return;
    }
    if (!location) {
      alert("Mangler plassering");
      return;
    }

    const fetchUserData = async () => {
      const data = await getUserDataFromDatabase();
      setUserData(data);
    };

    try {
      await fetchUserData();
      const createdBy = userData?.username;

      setIsLoading(true);
      const pearlData = {
        title: title,
        description: description,
        latitude: location.lat,
        longitude: location.long,
        createdBy: createdBy,
      };

      if (title.length > 40) {
        throw new Error("Tittelen er for lang (maks 40 tegn)");
      }

      await addPearlToDatabase(finalImage, pearlData);

      console.log("Ny perle opprettet:", pearlData);

      alert("Perle opprettet!");
      setDescription("");
      setTitle("");
      setLocation(null);
      setSavedImage(null);
      camera.resetImage();
      gallery.resetPicker();

      router.replace("/(tabs)/profile");
    } catch (error: any) {
      console.error("Feil ved oppretting av perle:", error);
      alert("Feil ved oppretting av perle: " + error);
    } finally {
      setIsLoading(false);
    }
  };

  if (camera.isCameraVisible) {
    return <PerleCameraView camera={camera} />;
  }
  return (
    <ScrollView contentContainerStyle={localStyles.container}>
      <Text style={localStyles.title}>Plott en ny Perle</Text>
      <TextInput
        style={globalStyles.formInput}
        placeholderTextColor="#888888"
        placeholder="Tittel på perlen"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[globalStyles.formInput, { height: 100, textAlignVertical: "top" }]}
        placeholderTextColor="#888888"
        placeholder="Beskrivelse"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />
      <View style={localStyles.locationContainer}>
        {location && (
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 16 }}>{location.lat.toFixed(4)}, {location.long.toFixed(4)}</Text>
            <Text style={{ color: 'green', fontSize: 12 }}>Plassering lagret</Text>
          </View>
        )}
        <Link
          href={{
            pathname: "../mapPicker",
            params: {
              title,
              description,
              lat: location?.lat,
              long: location?.long,
              image: finalImage,
            },
          }}
          asChild
        >
          <Pressable style={globalStyles.formButton}>
            <Text style={globalStyles.formButtonText}>
              {location ? "Endre plassering" : "Velg plassering på kart"}
            </Text>
          </Pressable>
        </Link>
      </View>
      <View style={localStyles.imageContainer}>
        {finalImage ? (
          <>
            <Image 
            source={{ uri: finalImage }} 
            style={localStyles.imagePreview} />
            <Pressable
              style={{ marginTop: 10 }}
              onPress={() => { 
                camera.resetImage(); 
                gallery.resetPicker();
                setSavedImage(null); }}
            >
              <Text style={{ color: '#007AFF' }}>Fjern / Ta nytt bilde</Text>
            </Pressable>
          </>
        ) : (
          <View style={{ width: "100%", gap: 10 }}>
            <Pressable style={globalStyles.formButton} onPress={camera.openCamera}>
              <Text style={globalStyles.formButtonText}>Ta bilde</Text>
            </Pressable>
            <Pressable style={globalStyles.formButton} onPress={gallery.pickImage}>
              <Text style={globalStyles.formButtonText}>Velg fra galleri</Text>
            </Pressable>
          </View>
        )}
      </View>
      <Pressable 
      style={globalStyles.formButton} 
      onPress={handleSubmit} 
      disabled={isLoading}
      >
        {isLoading ? 
        <ActivityIndicator color="#fff" /> 
        : 
        <Text style={globalStyles.formButtonText}>Opprett Perle</Text>}
      </Pressable>
    </ScrollView>
  );
}
const localStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingBottom: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  locationContainer: {
    marginVertical: 15,
    alignItems: 'center'
  },
  imageContainer: {
    width: '100%',
    marginVertical: 15,
    alignItems: 'center',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    backgroundColor: '#eee',
  }
});

