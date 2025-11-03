import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, TextInput } from 'react-native';
import { styles } from '../styles';

export default function NewPlacesScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); 

  const handleSubmit = async () => {
    if (isLoading) return;
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Ny perle opprettet (dummy):', {
      title,
      description,
    });

    setIsLoading(false);
    
    setTitle('');
    setDescription('');
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