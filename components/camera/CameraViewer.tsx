import { CameraView } from 'expo-camera';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../app/styles';

export default function PerleCameraView({ camera }: { camera: any }) {
  return (
    <View style={styles.cameraContainer}>
      <CameraView 
          style={styles.cameraView} 
          facing={camera.facing} 
          ref={camera.cameraRef}
      >
        <View style={styles.cameraControls}>
          <TouchableOpacity style={styles.cameraControlButton} onPress={camera.closeCamera}>
            <Text style={styles.cameraControlText}>Avbryt</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cameraCaptureButton} onPress={camera.takePicture}>
            <View style={styles.cameraCaptureInner} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.cameraControlButton} onPress={camera.toggleCameraFacing}>
            <Text style={styles.cameraControlText}>Snu</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}