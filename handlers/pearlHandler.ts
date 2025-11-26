import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../FirebaseConfig';
import { downloadImage, uploadImagePearl } from './imageHandler';


export const generatePearlID = (title: string): string => {
    const timestamp = Date.now().toString(36);

    return title.toLowerCase() + timestamp;
}

export const addPearlToDatabase = async (imageUri: string, pearlData: any) => {
    const pearlInfo = {...pearlData}

    if (!pearlInfo.title) {
        throw new Error("Pearl must have a title");
    }

    if (!pearlInfo.description) {
        throw new Error("Pearl must have a description");
    }

    if (!pearlInfo.longitude || !pearlInfo.latitude) {
        throw new Error("Pearl must have coordinates");
    }

    const pearlID = generatePearlID(pearlInfo.title);

    if (!pearlID) {
        throw new Error("ID was not genereated");
    }

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