import {View, Text} from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { ImageBackground } from 'expo-image'
import { Feather } from "@expo/vector-icons";


const _Layout = () => {
    return (
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#007bff",
            tabBarInactiveTintColor: "#9ca3af",
            //tabBarIconStyle: { marginBottom: -5},
            tabBarStyle: {height: 70, paddingTop: 10, paddingBottom: 10},
            tabBarItemStyle: { paddingVertical: 7},
            tabBarLabelStyle: { fontSize: 12},
            // tabBarShowLabel: false,
    
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
    )
}


export default _Layout