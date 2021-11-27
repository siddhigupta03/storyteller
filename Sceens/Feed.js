import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Platform, StatusBar, SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from 'expo-font';
import { FlatList } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import Post from './PostCard'

let Stories = require('../Sceens/Temp_stories.json');

let customFonts = {
    "Bubble-Sans": require('../assets/fonts/BubblegumSans-Regular.ttf')
};

export default class Feed extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false
        }
    }
    async _loadFontsAsync () {
        await Font.loadAsync(customFonts);
        this.setState({
            fontsLoaded:true
        })
    }
    componentDidMount() {
        this._loadFontsAsync();
    }
    renderItem=()=>{
        return <Post Post={Stories} navigation={this.props.navigation} route={Stories}/>
    }
    keyExtractor = (item, index) => index.toString();
    render() {
        if(!this.state.fontsLoaded) {
            return <AppLoading/>
        }
        else{
            return(
                <View style={styles.con}>
                    <SafeAreaView style={styles.droide} />
                    <View style={styles.appTit}>
                        <View style={styles.appIcon}>
                            <Image 
                            source={require('../assets/logo.png')}
                            style={styles.logo}
                             />
                        </View>
                        <View style={styles.appTitCon}>
                            <Text style={styles.appTitConText}>Spectagram</Text>
                        </View>
                    </View>
                    <View style={styles.flatList}>
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={Stories}
                            renderItem={this.renderItem}
                        />
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    con:{
        flex:1,
        backgroundColor:'#000'
    },
    droide:{
        marginTop: Platform.OS === 'android'? StatusBar.currentHeight:RFValue(35)
    },
    appTit:{
        flex:0.07,
        flexDirection:'row'
    },
    appIcon:{
        flex:0.2,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    },
    appTitCon:{
        flex:0.8,
        justifyContent:'center'
    },
    appTitConText:{
        color:'white',
        fontSize:RFValue(28)
    },
    flatList:{
        flex:0.85
    }
})