import { StyleSheet } from "react-native";

const allStyles = StyleSheet.create({
  // Profile
  ProfileButton: {
    backgroundColor: "transparent",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#e0e0e0e8",
  },
  ProfileText: {
    fontSize: 16,
  },
  ProfileHeaderText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
  },
  ProfileMiddleContainer: {
    alignItems: "center",
    gap: 12,
    width: "100%",
  },
  ProfileContainer: {
    flex: 1,
    paddingBottom: 30,
    paddingTop: 20,
    gap: 45,
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
  },
  ProfileHeaderContainer: {
    alignItems: "center",
  },
  ProfileSettingCardContainer: {
    flexDirection: "row",
    width: "100%",
  },
  ProfileImage: {
    width: 90,
    height: 90,
    borderWidth: 4,
    borderRadius: 90,
    borderColor: "#E1F8D7",
  },
  ProfilePostsView: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "space-between",
  },
  //Pearl
  PearlTitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
  }
});

export const styles = StyleSheet.create({
  profileButton: allStyles.ProfileButton,
  profileText: allStyles.ProfileText,
  profileContainer: allStyles.ProfileContainer,
  profileHeaderContainer: allStyles.ProfileHeaderContainer,
  profileSettingCardContainer: allStyles.ProfileSettingCardContainer,
  profileHeaderText: allStyles.ProfileHeaderText,
  profileContainerMiddle: allStyles.ProfileMiddleContainer,
  profileImage: allStyles.ProfileImage,
  profilePostsView: allStyles.ProfilePostsView,
});
