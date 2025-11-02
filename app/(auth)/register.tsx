import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { registerStyles as styles } from '../styles';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrer ny bruker</Text>
      <Link href="/login" style={styles.link}>
        <Text>Tilbake til login</Text>
      </Link>
    </View>
  );
}

