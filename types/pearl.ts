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

export const pearlImages = {
  hiof: require("../../assets/pearls/hiof.jpg"),
  lofoten: require("../../assets/pearls/lofoten.jpg"),
  vigelandsparken: require("../../assets/pearls/vigelandsparken.jpg"),
  fredriksten: require("../../assets/pearls/fredriksten.jpg"),

};
