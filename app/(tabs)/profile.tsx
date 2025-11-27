import { ProfileSettingCard } from "../../components/profile/ProfileSettingCard";

import { Image } from "expo-image";
import { ScrollView, Text, View } from "react-native";

import image from "../../assets/beluga.png";
import PostCard from "../../components/profile/PostCard";

import { getUserDataFromDatabase } from "../../handlers/userHandler";
import { styles } from "../styles";

import React, { useEffect, useState } from "react";
import Button from "../../components/Button";

const postsDummy = [
  { title: "Post 1", id: "1" },
  { title: "Post 2", id: "2" },
  { title: "Post 3", id: "3" },
  { title: "Post 4", id: "4" },
  { title: "Post 5", id: "5" },
  { title: "Post 6", id: "6" },
  { title: "Post 7", id: "7" },
  { title: "Post 8", id: "8" },
  { title: "Post 9", id: "9" },
  { title: "Post 10", id: "10" },
];

const dummyProfileData = {
  imageUrl: image, 
  username: "Katt",
  verified: true,
  phoneNumber: "12345678",
  email: "katt@example.com",
};

const Profile = () => {
 
  const [userData, setUserData] = useState<any>(undefined);

  
  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserDataFromDatabase();
      setUserData(data);
    };

    fetchUserData();
  }, []);

  const username = userData?.username || dummyProfileData.username;
  const verified = userData?.verified ?? dummyProfileData.verified; 
  const phoneNumber = userData?.phoneNumber || dummyProfileData.phoneNumber;
  const email = userData?.email || dummyProfileData.email;
  
  const imageUrl = userData?.imageUrl || dummyProfileData.imageUrl;

  return (
    <ScrollView>
      <View style={styles.profileContainer}>
        <View style={styles.profileHeaderContainer}>
          <Image
            source={typeof imageUrl === "string" ? { uri: imageUrl } : imageUrl}
            style={styles.profileImage}
          />
          <Text style={styles.profileHeaderText}>{username}</Text>
          <Text style={styles.profileHeaderText}>
            {verified ? "Verifisert medlem" : "Uverifisert medlem"}
          </Text>
        </View>
        <View style={styles.profileContainerMiddle}>
          <ProfileSettingCard
            setting="Telefonnummer"
            settingInfo={phoneNumber}
          />
          <ProfileSettingCard 
            setting="E-post" 
            settingInfo={email} 
          />
          <Button
            text="Endre instillinger"
            path="./settings"
            buttonStyle={styles.profileButton}
            buttonTextStyle={styles.profileText}
          />
        </View>
        <View style={styles.profileContainerMiddle}>
          <Text style={styles.pearlTitle}>Mine innlegg</Text> 
          <View style={styles.profilePostsView}>
            {postsDummy.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                imageUrl={post.imageUrl} 
                id={post.id}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
