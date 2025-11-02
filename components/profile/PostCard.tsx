import React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

import image from "../../assets/xp.jpg";

interface PostCardProps {
  title?: string;
  imageUrl?: string;
  id?: string;
}

const PostCard = ({ title, imageUrl, id }: PostCardProps) => {
  return (
    <View style={styles.card}>
      <Image
        source={imageUrl ? { uri: imageUrl } : image}
        style={styles.image}
        contentFit="cover"
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "48%",
  },
  image: {
    width: "100%",
    height: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 8,
  },
});

export default PostCard;
