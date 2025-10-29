
import {Text, StyleSheet, View} from "react-native";
import PearlCard from "./PearlCard";

interface PearlDetail extends PearlCard {
    description?: string;
    tags?: string[];
    //createdBy: profile;
    location?: {lat: number; lng: number; name?: string };
}


export default PearlDetail;