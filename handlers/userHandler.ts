import { auth, db } from "@/FirebaseConfig";
import { doc, getDoc } from 'firebase/firestore';


export const getUserDataFromDatabase = async () => {
    const userID = auth.currentUser?.uid;
    const user = await getDoc(doc(db, "users", userID!));

    return user.data();

}