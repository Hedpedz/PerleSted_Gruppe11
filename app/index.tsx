import { Redirect, Link } from "expo-router";
import React from "react";
import { View } from "react-native";


export default function Index() {
  return <Redirect href="/(tabs)/profile" />;
}