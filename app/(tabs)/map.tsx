import React, { useEffect, useState } from "react";
import MapViewer from "../../components/map/MapViewer";
import { useIsFocused } from "@react-navigation/native";
import { getAllPearlsFromDatabase } from "../../handlers/pearlHandler";
import { Pearl } from "../../types/pearl";

export default function MapScreen() {
  const [pearls, setPearls] = useState<Pearl[]>([]);
  const isFocused = useIsFocused(); 

  useEffect(() => {
    if (isFocused) {
      const fetchPearls = async () => {
        const data = await getAllPearlsFromDatabase();
        setPearls(data as Pearl[]);
      };
      fetchPearls();
    }
  }, [isFocused]);

  return <MapViewer pearls={pearls} />;
}


