import React from 'react';
import { Tabs } from 'expo-router';
import { Feather } from "@expo/vector-icons";


const _Layout = () => {
    return (
        <Tabs>
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