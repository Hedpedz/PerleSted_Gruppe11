import React from "react";
import {Pressable, TextInput, View } from "react-native";
import Button from "@/components/Button";
import SearchableList from "@/components/searchableList";
import Camera from "react-native-camera";
export default class Home extends React.Component {
    placeHolderPearls = [{ id: "1", title: "pearl1" }, {id: "2", title: "pearl2"}]


    

    render() { 
        var output = <View>
            <Button text = "Min profil" path = "/profile"></Button>
            <Button text = "Innstillinger" path = "/usersettings"></Button>
            <SearchableList data={this.placeHolderPearls} placeHolderText="sok etter perle steder"></SearchableList>
            <Camera></Camera>

        </View>
        return (output);
    }

}
