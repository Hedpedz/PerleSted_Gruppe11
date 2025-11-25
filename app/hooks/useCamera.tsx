import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';

export function usePerleCamera() {
  const [image, setImage] = useState<string | null>(null);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [facing, setFacing] = useState<CameraType>('back');
  
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);

  const openCamera = async () => {
    if (!permission?.granted) {
      const result = await requestPermission();
      if (!result.granted) {
        alert("Vi trenger kameratilgang.");
        return;
      }
    }
    setIsCameraVisible(true);
  };

  const closeCamera = () => setIsCameraVisible(false);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync({ quality: 0.7 });
        if (photo?.uri) {
          setImage(photo.uri);
          setIsCameraVisible(false);
        }
      } catch (error) {
        console.log("Kunne ikke ta bilde:", error);
      }
    }
  };

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const resetImage = () => setImage(null);

  return {
    image,
    isCameraVisible,
    facing,
    cameraRef,
    permission,     
    openCamera,
    closeCamera,
    takePicture,
    toggleCameraFacing,
    resetImage
  };
}