import { updatePearlRating } from "@/handlers/pearlHandler";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

const RateButton = ({ value, pearlID }: { value: number; pearlID: string }) => {
  async function onRate(value: number): Promise<void> {
    try {
      await updatePearlRating(pearlID as string, value);
      alert("Takk for din rating!");
    } catch (error) {
      alert("Noe gikk galt ved rating av perlen." + error);
      return;
    }
  }

  return (
    <Pressable onPress={() => onRate(value)}>
      <FontAwesome name="star-o" size={24} color="black" />
    </Pressable>
  );
};

export default RateButton;

const styles = StyleSheet.create({});
