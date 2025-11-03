import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Pressable, Text, TextInput, View } from 'react-native';
import { useAuth } from '../../lib/AuthProvider';
import { styles } from '../styles';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      await login(username, password);
    } catch (e) {
      alert('Innlogging feilet (dummy-feil)');
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>PerleSted</Text>

      <TextInput
        style={styles.authInput}
        placeholder="Brukernavn"
        placeholderTextColor="#888888" 
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.authInput}
        placeholder="Passord"
        placeholderTextColor="#888888" 
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Pressable style={styles.authButton} onPress={handleLogin} disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.authButtonText}>Logg inn</Text>
        )}
      </Pressable>

      <Link href="/register" style={styles.authLink}>
        <Text>Ny bruker? Registrer deg</Text>
      </Link>
    </View>
  );
}

