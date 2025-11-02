import React from "react";
import { Image } from "expo-image";
import { PearlCard } from "../../components/pearl/PearlCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet, FlatList } from "react-native"; 

const Feed = () => { 
    return ( 
        <SafeAreaView style={styles.container}> 
        <FlatList data={[1,2,3,4]} 
        renderItem={({item}) => <PearlCard id={""} title={""} />} 
        keyExtractor={(item) => item.toString()} //each item has i own Id 
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
        container: { flex: 1, backgroundColor: "#fcfffd", }, 
        content: { paddingHorizontal: 16, paddingTop: 12, }, 
        row: { flexDirection: "row", alignItems: "center", // ถ้าจะมีหลายการ์ดค่อยใช้ FlatList + numColumns/columnWrapperStyle 
    },
    }); 
    export default Feed;