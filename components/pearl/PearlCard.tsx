import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type PearlCardProps = {
  id: string;
  title?: string;
  imageUrl?: string;
};

const PearlCardComponent: React.FC<PearlCardProps> = ({
  id,
  title,
  imageUrl,
}) => {
  const onPress = () => {
    router.push({
      pathname: "/(tabs)/pearl",
      params: { pearlID: id },
    });
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.9}
      testID={`pearl-card-${id}`}
    >
      <View style={styles.imageWrap}>
        <Image
          source={imageUrl ? { uri: imageUrl } : undefined}
          style={styles.image}
          contentFit="cover"
        />
      </View>

      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: "left",
    marginTop: 8,
    borderBottomColor: "#e0e0e0e8",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  card: {
    width: "100%",
    marginTop: 16,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
  },
  imageWrap: {
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 180,
  },
});

export const PearlCard = PearlCardComponent;
