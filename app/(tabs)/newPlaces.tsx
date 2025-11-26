import { Link, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import PerleCameraView from '../../components/camera/CameraViewer';
import { usePerleCamera } from '../../hooks/useCamera';
import { styles } from '../styles';

export default function NewPlacesScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState<{lat: number, long: number} | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const camera = usePerleCamera(); 
  const params = useLocalSearchParams(); 

  useEffect(() => {
    if (params.lat && params.long) {
      setLocation({
        lat: parseFloat(params.lat as string),
        long: parseFloat(params.long as string)
      });
    }
  }, [params.lat, params.long]); 

  const handleSubmit = async () => {
    if (isLoading) return;
    if (!title) { alert("Mangler tittel"); return; }
    if (!camera.image) { alert("Mangler bilde"); return; }
    if (!location) { alert("Mangler plassering"); return; }
    
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Ny perle opprettet (dummy):', {
      title,
      description,
      image: camera.image
    });

    setIsLoading(false);

    setTitle('');
    setDescription('');
    setLocation(null);
    camera.resetImage();
  };
  if (camera.isCameraVisible) {
    return <PerleCameraView camera={camera} />;
  }

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
        style={[styles.formInput, { height: 100, textAlignVertical: 'top' }]}
        placeholderTextColor="#888888" 
        placeholder="Beskrivelse"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />

      <View style={styles.locationResultContainer}>
        {location ? (
          <View style={styles.locationResultContainer}>
            <Text style={styles.locationCoordText}>
              {location.lat.toFixed(4)}, {location.long.toFixed(4)}
            </Text>
            <Text style={styles.locationSuccessText}>Plassering lagret</Text>
          </View>
        ) : null}

        <Link href="/mapPicker" asChild>
          <Pressable style={styles.formButton}>
            <Text style={styles.formButtonText}>
              {location ? "Endre plassering" : "Velg plassering på kart"}
            </Text>
          </Pressable>
        </Link>
      </View>

      <View style={styles.cameraPreviewContainer}>
        {camera.image ? (
          <>
            <Image source={{ uri: camera.image }} style={styles.cameraImagePreview} />
            <Pressable style={styles.cameraRetakeButton} onPress={camera.openCamera}>
              <Text style={styles.cameraRetakeText}>Ta nytt bilde</Text>
            </Pressable>
          </>
        ) : (
          <Pressable style={styles.formButton} onPress={camera.openCamera}>
            <Text style={styles.formButtonText}>Ta bilde</Text>
          </Pressable>
        )}
      </View>

      <Pressable style={styles.formButton} onPress={handleSubmit} disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.formButtonText}>Opprett Perle</Text>
        )}
      </Pressable>
    </ScrollView>
  );
}