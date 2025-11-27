import React, { useRef, useEffect, useState } from "react";
import { View, Alert } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, MapPressEvent } from "react-native-maps";
import * as Location from 'expo-location';
import { styles } from "../../app/styles";
import { Pearl } from "../../types/pearl"; 

const FALLBACK_REGION = {
  latitude: 59.129082732254126,
  longitude: 11.352905810532166,
  latitudeDelta: 0.2,
  longitudeDelta: 0.2,
};

interface MapViewerProps {
  onMapPress?: (event: MapPressEvent) => void;
  selectedLocation?: { latitude: number; longitude: number } | null;
  pearls?: Pearl[]; 
}

const MapViewer = ({ onMapPress, selectedLocation, pearls = [] }: MapViewerProps) => {
  const mapRef = useRef<MapView>(null);
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        Alert.alert("Tillatelse nektet", "Vi trenger din posisjon for å vise kartet riktig.");
        return;
      }
      
      setHasPermission(true);

      if (!selectedLocation) {
        let location = await Location.getCurrentPositionAsync({});
        
        mapRef.current?.animateToRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      }
    })();
  }, []);

  useEffect(() => {
    if (selectedLocation && mapRef.current) {
      mapRef.current.animateToRegion({
        ...selectedLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  }, [selectedLocation]);

  return (
    <View style={styles.mapContainer}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={FALLBACK_REGION} 
        showsUserLocation={hasPermission} 
        showsMyLocationButton={hasPermission} 
        showsCompass={true}
        onPress={onMapPress}
      >
        {selectedLocation && (
          <Marker 
            coordinate={selectedLocation} 
            title="Valgt plassering"
          />
        )}
        {pearls.map((pearl) => (
          <Marker
            key={pearl.id}
            coordinate={{
              latitude: pearl.latitude,
              longitude: pearl.longitude,
            }}
            title={pearl.title}
          />
        ))}
      </MapView>
    </View>
  );
};

export default MapViewer;