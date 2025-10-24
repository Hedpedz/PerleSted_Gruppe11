import { useNavigation } from "expo-router";
import React, { useRef } from "react";
import { View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { styles } from "../styles";

// 59.129082732254126, 11.352905810532166 - HIOF

// SETT TIL BRUKERENS LOKASJON TIL NESTE INNLEVERING
const Initial_Region = {
  latitude: 59.129082732254126,
  longitude: 11.352905810532166,
  latitudeDelta: 0.2,
  longitudeDelta: 0.2,
};

const MapViewer = () => {
  const mapRef = useRef<any>(null);
  const navigation = useNavigation();

  const handleRegionChange = (region: any) => {
    // Noe
  };

  const focusMap = (latitude: number, longitude: number) => {
    const newRegion = {
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };
    if (mapRef.current) {
      mapRef.current.animateToRegion(newRegion);
    }
  };

  /*
  useEffect(() => {
    
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View>
            <Text>Tilb</Text>
          </View>
        </TouchableOpacity>
      ),
    });
    
  }, []);
*/
  return (
    <View style={styles.mapContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapView}
        showsUserLocation={true}
        initialRegion={Initial_Region}
        customMapStyle={[]}
        showsMyLocationButton={true}
        showsCompass={true}
        toolbarEnabled={true}
        ref={mapRef}
      />
    </View>
  );
};

export default MapViewer;
