import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../FirebaseConfig';

// Mye av koden er inspirert fra: https://www.youtube.com/watch?v=a0KJ7l5sNGw
// Men den er kraftig modifisert slik at den fungerer bra i applikasjonen vår.
export const uploadImageProfile = async (id: string, imageUri: string): Promise<string> => {
    const response = await fetch(imageUri);
    const blob = await response.blob();

    const imgType = imageUri.split('.').pop();

    const contentType = imgType ? `image/${imgType}` : 'image/jpeg';

    const storageRef = ref(storage, `images/profile/${id}/${Date.now()}`);
    await uploadBytes(storageRef, blob, { contentType: contentType });
    const downloadURL = await getDownloadURL(storageRef);

    return downloadURL;

}

export const uploadImagePearl = async (id: string, imageUri: string): Promise<string> => {
    const response = await fetch(imageUri);
    const blob = await response.blob();

    const imgType = imageUri.split('.').pop();

    const contentType = imgType ? `image/${imgType}` : 'image/jpeg';

    const storageRef = ref(storage, `images/pearl/${id}/${Date.now()}`);
    await uploadBytes(storageRef, blob, { contentType: contentType });
    const downloadURL = await getDownloadURL(storageRef);

    return downloadURL;

}

export const downloadImage = async (imagePath: string): Promise<string> => {
    const storageRef = ref(storage, imagePath);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
}


