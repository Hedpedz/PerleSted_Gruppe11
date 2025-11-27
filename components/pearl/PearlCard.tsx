import { Image } from "expo-image";
import { router } from "expo-router";
import React, { memo, useMemo } from "react";
import {
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../../app/styles";

type PearlCardProps = {
  id: string;
  title?: string;
  imageUrl?: string;
  imageLocal?: ImageSourcePropType;
  onPress?: () => void;
};

const PearlCardComponent: React.FC<PearlCardProps> = ({
  id,
  title,
  imageUrl,
  imageLocal,
}) => {
  const source = useMemo(
    () => (imageLocal ? imageLocal : imageUrl ? { uri: imageUrl } : null),
    [imageLocal, imageUrl]
  );

  const onPress = () => {
    router.push({
      pathname: "/(tabs)/pearl",
      params: { pearlID: id },
    });
  };

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

      <Text style={styles.pearlTitle} numberOfLines={1}>
        {displayTitle}
      </Text>
    </TouchableOpacity>
  );
};

export const PearlCard = memo(PearlCardComponent);
