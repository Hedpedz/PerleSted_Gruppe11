import React, { memo, useMemo } from "react";
import { Text, TouchableOpacity, View, ImageSourcePropType, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { styles } from "../../app/styles";
import fallbackImg from "../../assets/FredrikstenFesning.jpg";



type PearlCardProps = {
  id: string;
  title: string;
  imageUrl?: string;
  imageLocal?: ImageSourcePropType;
  onPress?: () => void;
};

const PearlCardComponent: React.FC<PearlCardProps> = ({
  id,
  title,
  imageUrl,
  imageLocal,
  onPress,
}) => {
  const source = useMemo(
    () => (imageLocal ? imageLocal : imageUrl ? { uri: imageUrl } : fallbackImg),
    [imageLocal, imageUrl]
  );

  const displayTitle = (title || "").trim() || "FredikstenFesning";

  return (
    <TouchableOpacity
      style={styles.PearlCard}
      onPress={onPress}
      activeOpacity={0.9}
      accessibilityRole="button"
      accessibilityLabel={`Open ${displayTitle}`}
      testID={`pearl-card-${id}`}
    >
      <View style={styles.PearlImageWrap}>
        <Image source={source} style={styles.PearlImage} contentFit="cover" />
      </View>

      <Text style={styles.PearlTitle} numberOfLines={1}>
        {displayTitle}
      </Text>
    </TouchableOpacity>
  );
};

export const PearlCard = memo(PearlCardComponent);

export default PearlCard;



  export async fucntion getLastestPlaces() {
    try {
        const result = await database.ListDokuments(
            config.databaseId!,
            config.pearlCollectionId!,
            [Query.orderAsc('$createdAt'), Query.limit(5)];
        )

        return result.dokuments;

    } catch (error) {
        console.error(error);
        return [];
    
    }
  }