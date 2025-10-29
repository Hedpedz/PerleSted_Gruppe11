import { View, Text} from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'


const Pearl = () => {
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text>Pearl {id}</Text>
        </View>
    )
}

export default Pearl;