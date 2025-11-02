import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Pressable, Text, TextInput, View } from 'react-native';
import { useAuth } from '../../lib/AuthProvider';
import { loginStyles } from '../styles';

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
    <View style={loginStyles.container}>
      <Text style={loginStyles.title}>PerleSted</Text>

      <TextInput
        style={loginStyles.input}
        placeholder="Brukernavn"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={loginStyles.input}
        placeholder="Passord"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Pressable style={loginStyles.button} onPress={handleLogin} disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={loginStyles.buttonText}>Logg inn</Text>
        )}
      </Pressable>

      <Link href="/register" style={loginStyles.link}>
        <Text>Ny bruker? Registrer deg</Text>
      </Link>
    </View>
  );
}

