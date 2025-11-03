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

  // Login
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333333',
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#F9F9F9',
  },
  button: {
    backgroundColor: '#E1F8D7',
    paddingVertical: 15,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    
  },

  // Register
  registerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerTitle: {
    marginBottom: 20,
    color: '#FFFFFF'
  },
  registerLink: {
    marginTop: 20,
    color: '#FFFFFF', 
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

export const loginStyles = StyleSheet.create({
  container: allStyles.container,
  title: allStyles.title,
  input: allStyles.input,
  button: allStyles.button,
  buttonText: allStyles.buttonText,
  link: allStyles.link,
});

export const registerStyles = StyleSheet.create({
  container: allStyles.registerContainer,
  title: allStyles.registerTitle,
  link: allStyles.registerLink,
});


export const pearlStyles = StyleSheet.create({
  title: allStyles.PearlTitle,
  card: allStyles.PearlCard,
  imageWrap: allStyles.PearlImageWrap,
  image: allStyles.PearlImage,
})