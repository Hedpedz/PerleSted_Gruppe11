import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../../styles';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>PerleSted</Text>
      
      <View style={styles.headerIconContainer}>
        <Link href="/(tabs)/notifications" asChild>
          <Pressable>
            <Feather name="bell" size={24} color="#333333" />
          </Pressable>
        </Link>
        
        <Link href="/(tabs)/profile" asChild>
          <Pressable>
            <Feather name="user" size={24} color="#333333" />
          </Pressable>
        </Link>
      </View>

    </View>
  );
}