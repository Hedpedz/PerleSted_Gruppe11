import React, { memo, useMemo } from "react";
import { Text, TouchableOpacity, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { styles } from "@/app/styles";
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

  const displayTitle = (title || "").trim() || "Untitled";

  return (
    <TouchableOpacity
      style={styles.pearlCard}
      onPress={onPress}
      activeOpacity={0.9}
      accessibilityRole="button"
      accessibilityLabel={`Open ${displayTitle}`}
      testID={`pearl-card-${id}`}
    >
      <View style={styles.pearlImageWrap}>
        <Image source={source} style={styles.pearlImage} contentFit="cover" />
      </View>

      <Text style={styles.pearlTitle} numberOfLines={1}>
        {displayTitle}
      </Text>
    </TouchableOpacity>
  );
};

export const PearlCard = memo(PearlCardComponent);
export default PearlCard;



  