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

  // Auth (Login / Register)
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

  // Globale Form Elementer (Brukes i NewPlaces og Settings)
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

  // Felles Profil knapper (brukes i Home og Profile) 
  profileButton: {
    backgroundColor: "transparent",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#e0e0e0e8",
    marginBottom: 10,
  },
  profileText: {
    fontSize: 16,
    color: '#333',
  },

  // Pearl Card (Brukes i lister, Home og Feed) 
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
    height: 180,
    backgroundColor: '#eee',
  },
  PearlImage: {
    width: "100%",
    height: "100%",
  },
  pearlTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    color: '#333',
  },

  // Setting Card 
  settingFormText: {
    width: "100%", 
    fontSize: 15, 
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0e8",
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  settingsSmallButton: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor: "#E1F8D7",
  },
  // Input for inline redigering
  inlineInput: {
    fontSize: 16,
    color: "#000",
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: "#f0f0f0", 
    borderRadius: 5,
    minWidth: 150, 
  },

  // Kamera (brukes i newplaces) 
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
    padding: 10,
  },
  cameraRetakeText: {
    color: '#007AFF',
    fontSize: 16,
  },

  // Kart (Map) 
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  mapOverlayContainer: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  mapInfoText: {
    marginBottom: 10,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  
  // Callout boble på kartet
  calloutView: {
    padding: 10,
    minWidth: 150, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  calloutSub: {
    color: '#007AFF', 
    fontSize: 12,
  },

  // Location Result (Brukes i Newplaces) 
  locationResultContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  locationCoordText: {
    fontSize: 16, 
    color: '#333',
    fontWeight: 'bold',
  },
  locationSuccessText: {
    color: 'green', 
    fontSize: 12, 
    marginTop: 4
  },
});