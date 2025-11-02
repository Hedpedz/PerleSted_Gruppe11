import { StyleSheet } from "react-native";

const allStyles = StyleSheet.create({
  // Header
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  headerRightButton: {
    marginRight: 15,
  },

  // Profile
  profileButton: {
    backgroundColor: "transparent",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#e0e0e0e8",
  },
  profileText: {
    fontSize: 16,
  },
  profileHeaderText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
  },
  profileMiddleContainer: {
    alignItems: "center",
    gap: 12,
    width: "100%",
  },
  profileContainer: {
    flex: 1,
    paddingBottom: 30,
    paddingTop: 20,
    gap: 45,
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
  },
  profileHeaderContainer: {
    alignItems: "center",
  },
  profileSettingCardContainer: {
    flexDirection: "row",
    width: "100%",
  },
  profileImage: {
    width: 90,
    height: 90,
    borderWidth: 4,
    borderRadius: 90,
    borderColor: "#E1F8D7",
  },
  profilePostsView: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "space-between",
  },

  // Settings
  settingsSmallButton: {
    backgroundColor: "transparent",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,

    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000000ff",
  },

  settingsBigButton: {
    backgroundColor: "transparent",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#49464656",
  },

  settingsContainer: {
    flex: 1,
    paddingBottom: 30,
    paddingTop: 20,
    gap: 10,
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
  },

  settingsTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  settingsCardContainer: {
    flexDirection: "row",
    width: "100%",
    borderColor: "#000000e8",
    padding: 3,
    justifyContent: "space-between",
  },

  // Map
  mapContainer: {
    flex: 1,
  },
  mapView: {
    height: "100%",
    width: "100%",
  },


  // Misc
  text: {
    fontSize: 16,
  },

  textBold: {
    fontSize: 16,
    fontWeight: "bold",
  },
  //Pearl
  PearlTitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
  },
  PearlCard: {
    width: "100%",
    marginTop: 16,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#fff",
    // เงา
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
  },
  PearlImageWrap: {
    borderRadius: 12,
    overflow: "hidden",
  },
  PearlImage: {
    width: "100%",
    height: 180,
  },
});

export const styles = StyleSheet.create({
  ...allStyles,
});

export default styles;
