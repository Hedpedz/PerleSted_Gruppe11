import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../FirebaseConfig';
import { downloadImage, uploadImagePearl } from './imageHandler';
import { getUserDataFromDatabase } from './userHandler';


export const generatePearlID = (title: string): string => {
    const timestamp = Date.now().toString(36);

    return title.toLowerCase() + timestamp;
}

export const addPearlToDatabase = async (imageUri: string, pearlData: any) => {
    const pearlInfo = {...pearlData}

    if (!pearlInfo.title) {
        throw new Error("Perlen må ha en tittel");
    }

    if (!pearlInfo.description) {
        throw new Error("Perlen må ha en beskrivelse");
    }

    if (!pearlInfo.longitude || !pearlInfo.latitude) {
        throw new Error("Perlen må ha koordinater");
    }

    const userData = await getUserDataFromDatabase();
    const username = userData?.username;
    const pearlID = generatePearlID(pearlInfo.title);

    if (!pearlID) {
        throw new Error("ID ble ikke generert");
    }

    const imageUrl = await uploadImagePearl(pearlID, imageUri);

    await setDoc(doc(db, "pearls", pearlID), {
          imageUrl: imageUrl,
          ...pearlData,
          createdBy: username,
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

export const updatePearlInDatabase = async (pearlID: string, updatedData: any) => {
    const pearlData = await getPearlFromDatabase(pearlID);

    if (!pearlData) {
        throw new Error("Perlen eksisterer ikke");
    }

    try {
        const pearl = doc(db, "pearls", pearlID);
        await setDoc(pearl, updatedData, { merge: true });
    } catch (error) {
        console.error("Feil ved oppdatering av perle: ", error);
        throw error;
    }
    

    return true;
}

export const updatePearlRating = async (pearlID: string, newRating: number) => {
    const pearlData = await getPearlFromDatabase(pearlID) || {};

    if (!pearlData.ratings) {
        pearlData.ratings = [];
    }
    pearlData.ratings.push(newRating);

    const averageRating = calculateAverageRating(pearlData.ratings);

    const currentAmountOfRatings = pearlData.currentAmountOfRatings || 0;

    await updatePearlInDatabase(pearlID, { ratings: pearlData.ratings, avgRating: averageRating, currentAmountOfRatings: currentAmountOfRatings + 1 });
    
    return true;
}

const calculateAverageRating = (ratings: number[]): number => {
    let total = 0;

    for (let i = 0; i < ratings.length; i++) {
        if (ratings[i] < 1 || ratings[i] > 5) {
            throw new Error("Ugyldig vurderingsverdi funnet");
        }
        total += ratings[i];
    }

    return Math.round((total / ratings.length) * 10) / 10;
}


export const getAllPearlsFromDatabase = async (): Promise<any[]> => {
    const pearlDocs = await getDocs(collection(db, "pearls"))

    const list = pearlDocs.docs.map((docc) => ({ id: docc.id, ...docc.data() }));

    return list;

}

export const getAllPearlsForUser = async (userID: string): Promise<any[]> => {
    const list = await getAllPearlsFromDatabase();

    const userPearls = list.filter((pearl) => pearl.createdBy === userID);

    return userPearls;
}

export const deletePearlFromDatabase = async (pearlID: string) => {

    const pearl = doc(db, "pearls", pearlID);
    await deleteDoc(pearl);

    return true;

}