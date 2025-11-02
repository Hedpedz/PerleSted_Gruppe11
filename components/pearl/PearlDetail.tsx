
import {Text, StyleSheet, View} from "react-native";
import PearlCard from "./PearlCard";

interface PearlDetail extends PearlCard {
    description?: string;
    tags?: string[];

    location?: {lat: number; lng: number; name?: string };
}


function getPearlById({ id }: { id: string}) {
    try {
        const result = await DrawerLayoutAndroidBase.getDokument(
            config.datanaseId!,
            config.pearlCollectionId!,
            id,
        );
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}
export default PearlDetail;