import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../FirebaseConfig';

// https://www.youtube.com/watch?v=a0KJ7l5sNGw
export const uploadImage = async (id: string, imageUri: string): Promise<string> => {
    const response = await fetch(imageUri);
    const blob = await response.blob();

    const storageRef = ref(storage, `images/${id}/${Date.now()}`);
    await uploadBytes(storageRef, blob);
    const downloadURL = await getDownloadURL(storageRef);

    return downloadURL;

}

export const downloadImage = async (imagePath: string): Promise<string> => {
    const storageRef = ref(storage, imagePath);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
}


