import { Image } from "expo-image";
import React, { memo, useMemo } from "react";
import { ImageSourcePropType, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { pearlStyles } from "../../app/styles";



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
        () => (imageLocal ? imageLocal : imageUrl ? { uri: imageUrl } : null),
        [imageLocal, imageUrl]
  );


  const displayTitle = (title || "").trim() || "FredikstenFesning";

  return (
    <TouchableOpacity
      style={pearlStyles.card}
      onPress={onPress}
      activeOpacity={0.9}
      accessibilityRole="button"
      accessibilityLabel={`Open ${displayTitle}`}
      testID={`pearl-card-${id}`}
    >
      <View style={pearlStyles.imageWrap}>
        <Image source={source} style={pearlStyles.image} contentFit="cover" />
      </View>

      <Text style={pearlStyles.title} numberOfLines={1}>
        {displayTitle}
      </Text>
    </TouchableOpacity>
  );
};

export const PearlCard = memo(PearlCardComponent);

