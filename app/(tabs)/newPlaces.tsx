import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import PerleCameraView from '../components/CameraView';
import { usePerleCamera } from '../hooks/useCamera';
import { styles } from '../styles';

export default function NewPlacesScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const [isLoading, setIsLoading] = useState(false);
  const camera = usePerleCamera(); 
  const router = useRouter(); 

  const handleSubmit = async () => {
    if (isLoading) return;
    if (!title || !camera.image) { alert("Mangler info"); return; }
    
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

      <Link href="../map-picker" asChild>
      <Pressable style={styles.formButton}>
          <Text style={styles.formButtonText}>
            Velg plassering på kart
          </Text>
        </Pressable>
      </Link>


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