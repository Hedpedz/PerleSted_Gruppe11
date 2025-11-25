import Profile from "@/app/(tabs)/profile";
import type { ImageSourcePropType } from "react-native";


export type Pearl = {
  id: string;
  title: string;
  description?: string;
  rating?: number;
  imageUrl?: string;
  imageLocal?: ImageSourcePropType;
  createdBy: string;
  tags?: string[];
  isFavorite?: boolean;
  location?: { lat: number; lng: number; name?: string };
};