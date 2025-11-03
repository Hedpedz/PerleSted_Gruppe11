import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  profileContainerMiddle: {
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
  //Pearl
  pearlTitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
  },

   // Auth
   authContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  authTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333333',
  },
  authInput: {
    width: '90%',
    height: 50,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#F9F9F9',
  },
  authButton: {
    backgroundColor: '#E1F8D7',
    paddingVertical: 15,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
    marginTop: 10,
  },
  authButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  authLink: {
    marginTop: 20,

  },
});