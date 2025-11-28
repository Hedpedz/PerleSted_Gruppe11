import { Link, useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  StyleSheet
} from "react-native";
import { auth, db } from "../../FirebaseConfig";
import { styles as globalStyles } from "../styles";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";

const userData = collection(db, "users");

export default function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const usernameRef = useRef(null);
  const emailRef = useRef(null);

  const addUserFirestore = async (
    uid: string,
    username: string,
    email: string
  ) => { 
       await setDoc(doc(db, "users", uid), {
      username: username,
      email: email,
      createdAt: new Date(),
    });
  };

  const checkUsernameAvailability = async (username: string) => {
    const usernameQuery = query(userData, where("username", "==", username));
    const names = await getDocs(usernameQuery);
    return names.empty;
  };

  const checkEmailAvailability = async (email: string) => {
    const emailQuery = query(userData, where("email", "==", email));
    const emails = await getDocs(emailQuery);
    return emails.empty;
  };

  const handleRegister = async () => {
    if (isLoading) return;
    if (password !== confirmPassword) {
      alert("Passordene er ikke like.");
      return;
    }

    setIsLoading(true);
    try {
      if (!(await checkUsernameAvailability(username))) {
        alert("Brukernavnet er allerede tatt.");
        return;
      }
      if (!(await checkEmailAvailability(email))) {
        alert("Denne e-posten er allerede registrert.");
        return;
      }

      const userTemp = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
            if (userTemp.user) {
        await addUserFirestore(userTemp.user.uid, username, email);
        router.replace("/(tabs)/home");
      }
    } catch (error: any) {
      console.log(error);
      alert("Registrering feilet: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={localStyles.container} behavior="padding">
      <Text style={localStyles.title}>Registrer ny bruker</Text>

      <TextInput
        ref={emailRef}
        style={globalStyles.authInput}
        placeholder="Epost-adresse"
        placeholderTextColor="#888888"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        ref={usernameRef}
        style={globalStyles.authInput}
        placeholder="Brukernavn"
        placeholderTextColor="#888888"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={globalStyles.authInput}
        placeholder="Passord"
        placeholderTextColor="#888888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={globalStyles.authInput}
        placeholder="Skriv inn passord på nytt"
        placeholderTextColor="#888888"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Pressable
        style={globalStyles.authButton}
        onPress={handleRegister}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={globalStyles.authButtonText}>Registrer</Text>
        )}
      </Pressable>

      <Link href="/login" style={localStyles.link}>
        <Text style={localStyles.linkText}>Tilbake til login</Text>
      </Link>
    </KeyboardAvoidingView>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333333',
  },
  link: {
    marginTop: 20,
  },
  linkText: {
    color: '#007AFF',
  }
});