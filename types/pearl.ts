import type { ImageSourcePropType } from "react-native";


export type Pearl = {
  id: string;
  title: string;
  description?: string;
  rating?: number;
  imageUrl?: string;
  imageLocal?: ImageSourcePropType;
  // createdBy: Profile;
  tags?: string[];
  isFavorite?: boolean;
  location?: { lat: number; lng: number; name?: string };
};