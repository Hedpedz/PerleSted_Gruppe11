import React from "react";
import { Image } from "expo-image";
import { PearlCard } from "../../components/pearl/PearlCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet, FlatList } from "react-native"; 
import { DummyPearls } from "../../data/pearlsDummy";
import { router } from "expo-router";

const Feed = () => { 
    return ( 
        <SafeAreaView style={styles.container}> 
        <FlatList data={DummyPearls} 
        keyExtractor={(item) => item.id} //each item has i own Id 
        renderItem={({item}) => (
            <PearlCard
            id={item.id}
            title={item.title}
            imageLocal={item.imageLocal}
            //imageUrl={item.imageUrl}
            
            onPress = {() => router.push('pearls/${item.id}')}
            />
            )
        } 
        ListHeaderComponent={ 
            <View style={styles.content}> 
            <View style={styles.row}> 
            </View> 
        </View> 
        } /> 
        </SafeAreaView> 
        ) 
    } 
    const styles = StyleSheet.create({ 

        container: { 
            flex: 1,
            backgroundColor: "#fcfffd",
        }, 
        content: {
            paddingHorizontal: 16,
            paddingTop: 12,
        }, 
        row: {
            flexDirection: "row",
            alignItems: "center", // ถ้าจะมีหลายการ์ดค่อยใช้ FlatList + numColumns/columnWrapperStyle 
    },
    
    }); 
    export default Feed;