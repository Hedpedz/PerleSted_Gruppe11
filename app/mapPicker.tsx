import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { MapPressEvent } from 'react-native-maps';
import { styles } from '../app/styles';
import MapViewer from '../components/map/MapViewer';

export default function MapPickerScreen() {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  const handleMapPress = (e: MapPressEvent) => {
    setSelectedLocation(e.nativeEvent.coordinate);
  };

  const confirmLocation = () => {
    if (selectedLocation) {
      router.navigate({
        pathname: "/(tabs)/newPlaces", 
        params: { 
          lat: selectedLocation.latitude, 
          long: selectedLocation.longitude 
        }
      });
    }
  };

  return (
    <View style={styles.mapContainer}>
      <MapViewer 
        onMapPress={handleMapPress} 
        selectedLocation={selectedLocation} 
      />
      
      <View style={styles.mapOverlayContainer}>
        <Text style={styles.mapInfoText}>
          {selectedLocation 
            ? "Plassering markert!" 
            : "Trykk på kartet for å velge sted"}
        </Text>
        
        <Pressable 
          style={[styles.formButton, !selectedLocation && { opacity: 0.5 }]} 
          onPress={confirmLocation}
          disabled={!selectedLocation}
        >
          <Text style={styles.formButtonText}>Bekreft Plassering</Text>
        </Pressable>
      </View>
    </View>
  );
}