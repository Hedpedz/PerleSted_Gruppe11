import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { ImageSourcePropType, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface PearlCard {
    id: string;
    title: string;
    imageUrl?: string;
    imageLocal?: ImageSourcePropType;
}



export default PearlCard;


  