import { Link, useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
} from "react-native";
import { auth, db } from "../../FirebaseConfig";
import { styles } from "../styles";

export default function LoginScreen() {
  const userData = collection(db, "users");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  /*
  const handleLogin = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      await login(username, password);
    } catch (e) {
      alert("Innlogging feilet (dummy-feil)");
      setIsLoading(false);
    }
  };
*/

  const isEmail = (input: string) => {
    //https://stackoverflow.com/questions/41252314/how-can-i-correctly-check-if-a-string-does-not-contain-a-specific-word
    if (input.includes("@")) {
      return true;
    } else {
      return false;
    }
  };

  const getEmailFromUsername = async (username: string) => {
    const usernameQuery = query(userData, where("username", "==", username));
    const getQuery = await getDocs(usernameQuery);

    if (!getQuery.empty) {
      return getQuery.docs[0].get("email");
    }

    throw new Error("Brukernavn finnes ikke");
  };

  const signIn = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      let loginName = username;

      if (!isEmail(username)) {
        try {
          const email = await getEmailFromUsername(username);
          loginName = email;
        } catch (error: any) {
          alert("Brukernavnet ble ikke funnet: " + error.message);
        }
      }

      const user = await signInWithEmailAndPassword(auth, loginName, password);
      if (user.user) {
        router.replace("/(tabs)/home");
      }
    } catch (error: any) {
      console.log(error);
      alert("Innlogging feilet: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.authContainer} behavior="padding">
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

      <Pressable
        style={styles.authButton}
        onPress={signIn}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.authButtonText}>Logg inn</Text>
        )}
      </Pressable>

      <Link href="/register" style={styles.authLink}>
        <Text>Ny bruker? Registrer deg</Text>
      </Link>
    </KeyboardAvoidingView>
  );
}
