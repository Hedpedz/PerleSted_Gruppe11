import * as Location from "expo-location";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import MapView, {
  Callout,
  MapPressEvent,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
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

const MapViewer = ({
  onMapPress,
  selectedLocation,
  pearls = [],
}: MapViewerProps) => {
  const mapRef = useRef<MapView>(null);
  const [hasPermission, setHasPermission] = useState(false);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Tillatelse nektet",
          "Vi trenger din posisjon for å vise kartet riktig."
        );
        return;
      }

      setHasPermission(true);

      if (!selectedLocation && pearls.length === 0) {
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

  const handleCalloutPress = (id: string) => {
    router.push({
      pathname: "/(tabs)/pearl",
      params: { pearlID: id },
    });
  };

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
          <Marker coordinate={selectedLocation} title="Valgt plassering" />
        )}
        {pearls.map((pearl) => (
          <Marker
            key={pearl.id}
            coordinate={{
              latitude: pearl.latitude,
              longitude: pearl.longitude,
            }}
          >
            <Callout onPress={() => handleCalloutPress(pearl.id)}>
              <View style={styles.calloutView}>
                <Text style={styles.calloutTitle}>{pearl.title}</Text>
                <Text style={styles.calloutSub}>Trykk for info ›</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  calloutView: {
    padding: 10,
    minWidth: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  calloutTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  calloutSub: {
    color: "#007AFF",
    fontSize: 12,
  },
});

export default MapViewer;
