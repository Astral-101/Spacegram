import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CreateStory extends React.Component {
    render(){
        return(
            <View style = {styles.container}>
                <Text>
                    Create Story Screen
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#EEE"
    }
})