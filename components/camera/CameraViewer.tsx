import { CameraView } from "expo-camera";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Perleview({ camera }: { camera: any }) {
  return (
    <View style={styles.container}>
      <CameraView
        style={styles.view}
        facing={camera.facing}
        ref={camera.cameraRef}
      >
        <View style={styles.controls}>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={camera.closeCamera}
          >
            <Text style={styles.controlText}>Avbryt</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.captureButton}
            onPress={camera.takePicture}
          >
            <View style={styles.captureInner} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.controlButton}
            onPress={camera.toggleCameraFacing}
          >
            <Text style={styles.controlText}>Snu</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  view: {
    flex: 1,
    justifyContent: "flex-end",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 40,
    paddingTop: 20,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  controlButton: {
    padding: 10,
  },
  controlText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  captureInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
  },
  previewContainer: {
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
  },
  imagePreview: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#eee",
  },
  retakeButton: {
    padding: 5,
  },
  retakeText: {
    color: "#007AFF",
    fontSize: 16,
  },
});
