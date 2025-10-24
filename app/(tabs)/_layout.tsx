import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs, router } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "../styles";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: true,
        headerLeft: () => <Text style={styles.headerTitle}>Perlested</Text>,
        headerRight: () => (
          <Pressable
            onPress={() => router.push("../profile")}
            style={styles.headerRightButton}
          >
            <Ionicons name="person-circle-outline" size={32} />
          </Pressable>
        ),
        headerTitle: "",

        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case "home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "feed":
              iconName = focused ? "newspaper" : "newspaper-outline";
              break;
            case "new-place":
              iconName = focused ? "add-circle" : "add-circle-outline";
              break;
            case "map":
              iconName = focused ? "map" : "map-outline";
              break;
            case "notifications":
              iconName = focused ? "notifications" : "notifications-outline";
              break;
            default:
              iconName = "alert-circle";
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="feed" options={{ title: "Feed" }} />
      <Tabs.Screen name="new-place" options={{ title: "Nytt sted" }} />
      <Tabs.Screen name="map" options={{ title: "Kart" }} />
      <Tabs.Screen name="notifications" options={{ title: "Varslinger" }} />
      <Tabs.Screen name="settings" options={{ href: null }} />
      <Tabs.Screen name="profile" options={{ href: null }} />
    </Tabs>
  );
}
