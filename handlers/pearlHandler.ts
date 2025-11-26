import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../FirebaseConfig';
import { downloadImage, uploadImagePearl } from './imageHandler';


export const addPearlToDatabase = async (pearlID: string, imageUri: string, pearlData: any) => {
    const imageUrl = await uploadImagePearl(pearlID, imageUri);

    await setDoc(doc(db, "users", pearlID), {
          imageUrl: imageUrl,
          ...pearlData,
          createdAt: new Date()
        });

    return true;
}

export const dowloadPearlImage = async (imagePath: string): Promise<string> => {
    const downloadURL = await downloadImage(imagePath);
    return downloadURL;
}

export const getPearlFromDatabase = async (pearlID: string) => {
    const pearl = doc(db, "pearls", pearlID);

    const pearlDoc = await getDoc(pearl)

    return pearlDoc.data();

}

export const deletePearlFromDatabase = async (pearlID: string) => {

    const pearl = doc(db, "pearls", pearlID);
    await deleteDoc(pearl);

    return true;

}