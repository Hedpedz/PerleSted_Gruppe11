import React from 'react';
import { Tabs } from 'expo-router';
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../features/components/Header';


const _Layout = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <Header />
            <Tabs
              screenOptions={{
                headerShown: false,
                tabBarStyle: {height: 70, paddingTop: 10, paddingBottom: 10},
                tabBarItemStyle: { paddingVertical: 7},
                tabBarLabelStyle: { fontSize: 12},
              }}>
                <Tabs.Screen
                name="home"
                options={{
                    title: 'Hjem',
                    tabBarIcon: ({ color, size, focused}) => (
                        <Feather name="home" siza={34} color={color} />
                    ),
                }}
                />

                <Tabs.Screen 
                name="feed"
                options={{
                    title: 'Feed',
                    tabBarIcon: ({ color, size, focused}) => (
                        <Feather name="image" siza={size} color={color} />
                    ),
                }}
                />
                
                <Tabs.Screen 
                name="newPlaces"
                options={{
                    title: 'Nytt sted',
                    tabBarIcon: ({ color, size, focused}) => (
                        <Feather name="plus-circle" siza={size} color={color} />
                    ),
                }}
                />
                
                <Tabs.Screen 
                name="map"
                options={{
                    title: 'Kart',
                    tabBarIcon: ({ color, size, focused}) => (
                        <Feather name="map" siza={size} color={color} />
                    ),
                }}
                />
                
                <Tabs.Screen 
                name="profile"
                options={{
                    title: 'Profil',
                    tabBarIcon: ({ color, size, focused}) => (
                        <Feather name="user" siza={size} color={color} />
                    ),
                }}
                />
            </Tabs>
        </SafeAreaView>
    )
}


export default _Layout