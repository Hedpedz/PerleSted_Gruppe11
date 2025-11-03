import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { useAuth } from "../../lib/AuthProvider";
import { styles } from "../styles";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig";

export default function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();

  const handleRegister = async () => {
    if (isLoading) return;

    if (password !== confirmPassword) {
      alert("Passordene er ikke like.");
      return;
    }

    setIsLoading(true);

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) {
        router.replace("/(tabs)/home");
      }
    } catch (error: any) {
      console.log(error);
      alert("Registrering feilet: " + error.message);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Registrer ny bruker</Text>

      <TextInput
        style={styles.authInput}
        placeholder="Epost-adresse"
        placeholderTextColor="#888888"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
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
      <TextInput
        style={styles.authInput}
        placeholder="Skriv inn passord på nytt"
        placeholderTextColor="#888888"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Pressable
        style={styles.authButton}
        onPress={handleRegister}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.authButtonText}>Registrer</Text>
        )}
      </Pressable>

      <Link href="/login" style={styles.authLink}>
        <Text>Tilbake til login</Text>
      </Link>
    </View>
  );
}
