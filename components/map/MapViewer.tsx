import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import MapView, { MapPressEvent, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { styles } from "../../app/styles";

const Initial_Region = {
  latitude: 59.129082732254126,
  longitude: 11.352905810532166,
  latitudeDelta: 0.2,
  longitudeDelta: 0.2,
};

interface MapViewerProps {
  onMapPress?: (event: MapPressEvent) => void;
  selectedLocation?: { latitude: number; longitude: number } | null;
}

const MapViewer = ({ onMapPress, selectedLocation }: MapViewerProps) => {
  const mapRef = useRef<MapView>(null);

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
        showsUserLocation={true}
        initialRegion={Initial_Region}
        showsMyLocationButton={true}
        showsCompass={true}
        onPress={onMapPress}
      >
        {selectedLocation && (
          <Marker 
            coordinate={selectedLocation} 
            title="Valgt plassering"
          />
        )}
      </MapView>
    </View>
  );
};

export default MapViewer;