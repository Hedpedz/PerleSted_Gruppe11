import { updatePearlRating } from "@/handlers/pearlHandler";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

const RateButton = ({
  value,
  pearlID,
  isRated,
}: {
  value: number;
  pearlID: string;
  isRated: boolean;
}) => {
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
      <FontAwesome
        name={isRated ? "star" : "star-o"}
        size={35}
        color={isRated ? "gold" : "black"}
      />
    </Pressable>
  );
};

export default RateButton;

const styles = StyleSheet.create({});
