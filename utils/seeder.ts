import { DUMMY_PEARLS_DATA } from "../data/dummyData";
import { auth } from "../FirebaseConfig";
import { addPearlToDatabase } from "../handlers/pearlHandler"; 

export const seedDatabase = async () => {
  const user = auth.currentUser;

  if (!user) {
    alert("må være logget inn");
    return;
  }

  try {
    let count = 0;

    for (const pearl of DUMMY_PEARLS_DATA) {
      
      const pearlData = {
        title: pearl.title,
        description: pearl.description,
        latitude: pearl.latitude,
        longitude: pearl.longitude,
        rating: pearl.rating,
        tags: pearl.tags,
      };

      await addPearlToDatabase(pearl.imageUrl, pearlData);
      
      count++;
    }
    
  } catch (error: any) {
    alert("Noe gikk galt: " + error.message);
  }
};