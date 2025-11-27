import { auth, db } from "@/FirebaseConfig";
import { doc, getDoc, updateDoc } from 'firebase/firestore';


export const getUserDataFromDatabase = async () => {
    const userID = auth.currentUser?.uid;
    if (!userID) return null; 

    const user = await getDoc(doc(db, "users", userID));
    return user.data();
};

export const updateUserDatabaseField = async (fieldName: string, value: string) => {
    const userID = auth.currentUser?.uid;
    if (!userID) return false;

    await updateDoc(doc(db, "users", userID), { [fieldName]: value });
    return true;
};

export const addFavoritePearl = async (pearlID: string) => {
    const userID = auth.currentUser?.uid;
    if (!userID) return false;

    const favorites = await getFavoritePearls();

    if (favorites.includes(pearlID)) {
        throw new Error("Perlen er allerede i favoritter");
    }


    favorites.push(pearlID);
    await updateDoc(doc(db, "users", userID), {
        favoritePearls: favorites
    });

    return true;
}

export const removeFavoritePearl = async (pearlID: string) => {
    const userID = auth.currentUser?.uid;
    if (!userID) return false;

    const favorites = await getFavoritePearls();

    if (!favorites.includes(pearlID)) {
        throw new Error("Perlen finnes ikke i favoritter");
    }

    try {
        const newFavorites = favorites.filter((id: string) => id !== pearlID);
        await updateDoc(doc(db, "users", userID), {
            favoritePearls: newFavorites
        });
        return true;
    } catch (error) {
        alert("Noe gikk galt ved fjerning av favorittperle: " + error);
        return false;
    }
}

export const getFavoritePearls = async (): Promise<string[]> => {
    const userID = auth.currentUser?.uid;
    if (!userID) return [];

    const userData = await getUserDataFromDatabase();
    return userData?.favoritePearls || [];
}