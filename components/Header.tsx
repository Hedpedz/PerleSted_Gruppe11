import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Link href="../home" asChild>
        <Pressable>
          <Text style={styles.title}>PerleSted</Text>
        </Pressable>
      </Link>

      <View style={styles.iconContainer}>
        <Link href="../notifications" asChild>
          <Pressable>
            <Feather name="bell" size={24} color="#333333" />
          </Pressable>
        </Link>

        <Link href="/(tabs)/profile" asChild>
          <Pressable>
            <Feather name="user" size={24} color="#333333" />
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});
