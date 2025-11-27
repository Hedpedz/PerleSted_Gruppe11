import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  // Header
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  },
  headerIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  // Tabs layout 
  tabsLayoutContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',

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
    //alignItems: "center",
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
    fontSize: 20,
    textAlign: "center",
    marginTop: 8,
  },
  PearlCard: {
    width: "100%",
    marginTop: 16,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#fff",
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

  // Settings
  settingsContainer: {
    gap: 10,
    display: "flex",
    flexDirection: "row",
    gridTemplateRows: "1fr 1fr",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },

  profileImageSettings: {
    width: 120,
    height: 120,
    borderWidth: 4,
    borderRadius: 60,
    borderColor: "#E1F8D7",
    alignSelf: "center",
  },


  settingsPictureButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#E1F8D7",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  settingFormText: {
    display: "flex",
    fontSize: 15,
    flexDirection: "row",
    paddingLeft: 7,
    gap: 8,
  },

  settingsSmallButton: {
    backgroundColor: "#E1F8D7",
    width: 70,
    height: 40,
    borderRadius: 20, 
    justifyContent: "center", 
    alignItems: "center",
    marginInline: 40,

  },


  settingsBigButton: {
    backgroundColor: "#E1F8D7",
    paddingVertical: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
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
   // Form, new place
  formContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingBottom: 80,
  },
  formTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333333',
    textAlign: 'center',
  },
  formInput: {
    width: '100%',
    height: 50,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#F9F9F9',
    color: '#000000',
  },
  formButton: {
    backgroundColor: '#E1F8D7',
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  formButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },

  // Camera
  cameraContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  cameraView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cameraControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  cameraControlButton: {
    padding: 10,
  },
  cameraControlText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  cameraCaptureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraCaptureInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  cameraPreviewContainer: {
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
  },
  cameraImagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
  },
  cameraRetakeButton: {
    padding: 5,
  },
  cameraRetakeText: {
    color: '#007AFF',
    fontSize: 16,
  },

  // Map
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  
  // Map Picker Overlay 
  mapOverlayContainer: {
    position: 'absolute',
    bottom: 80,
    left: 70,
    right: 70,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  mapInfoText: {
    marginBottom: 5,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },

  // Location Display in New Place 
  locationResultContainer: {
    alignItems: 'center'
  },
  locationCoordText: {
    fontSize: 18, 
    color: '#333'
  },
  locationSuccessText: {
    color: 'green', 
    fontSize: 12, 
    marginTop: 4
  },

  // Home
  homeContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
});