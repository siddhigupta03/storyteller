import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, Image, ScrollView, TextInput, Dimensions } from "react-native";
import * as Font from 'expo-font'
import AppLoading from "expo-app-loading";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from 'react-native-dropdown-picker';

let customs = {
    'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf')
}

const preview_images = {
    'img': require('../assets/post.jpeg'),
    'img1': require('../assets/image_1.jpg'),
    'img2': require('../assets/image_2.jpg'),
    'img3': require('../assets/image_3.jpg'),
    'img4': require('../assets/image_4.jpg'),
    'img5': require('../assets/image_5.jpg'),
    'img6': require('../assets/image_6.jpg'),
    'img7': require('../assets/image_7.jpg'),
}

export default class Story extends Component{
    constructor(props) {
        super(props);
        this.state={
            fontsLoaded: false,
            previewImages: preview_images['img'],
            dropDown: 40
        }
    }
    fontsLoadedAsync = async() => {
        await Font.loadAsync(customs);
        this.setState({
            fontsLoaded: true
        })
    }
    componentDidMount() {
        this.fontsLoadedAsync();
    }
    render() {
        if(!this.state.fontsLoaded) {
            return <AppLoading/>
        }
        else {
            return(
                <View style={styles.con}>
                    <SafeAreaView style={styles.droideSafeArea}/>
                    <View style={styles.appTit}>
                        <View style={styles.icon}>
                            <Image source={require('../assets/logo.png')}
                            style={styles.iconImg} />
                        </View>
                        <View style={styles.appTitTextCon}>
                            <Text style={styles.appTitText}>New Post</Text>
                        </View>
                    </View>
                    <View style={styles.fieldsContainer}>
                        <ScrollView>
                            <Image source={this.state.previewImages}
                            style={styles.img}></Image>

                            <View style={{height: RFValue(this.state.dropDown)}}>
                                <DropDownPicker 
                        items = {[
                            {label: 'im1', value: 'img1'},
                            {label: 'im2', value: 'img2'},
                            {label: 'im3', value: 'img3'},
                            {label: 'im4', value: 'img4'},
                            {label: 'im5', value: 'img5'},
							{label: 'im5', value: 'img6'},
							{label: 'im5', value: 'img7'},
                        ]}
                        defaultValue={this.state.previewImages}
                        containerStyle={{
                            height:40,
                            borderRadius:20,
                            marginBottom:10
                        }}
                        onOpen={()=> {
                            this.setState({
                                dropDown:170
                            })
                        }}
                        style={{backgroundColor:'transparent'}}
                        itemStyle={{
                            justifyContent:'flex-start'
                        }}
                        dropDownStyle={{backgroundColor:'white'}}
                        labelStyle={{color:'#000aaa',fontFamily:'Bubblegum-Sans'}}
                        arrowStyle={{color:'#00faaa',fontFamily:'Bubblegum-Sans'}}
                        onChangeItem={item => {
                            this.setState({
                                previewImages: item.value
                            })
                        }}/>
                            </View>

                            <TextInput
                                style={styles.inf}
                                onChangeText={caption => this.setState({caption})}
                                placeholder={"Caption"}
                                placeholderTextColor='white'/>
                        </ScrollView>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    con: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    droideSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTit: {
      flex: 0.07,
      flexDirection: "row"
    },
    icon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImg: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitTextCon: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    fieldsContainer: {
      flex: 0.85
    },
    img: {
      width: "93%",
      height: RFValue(250),
      alignSelf: "center",
      borderRadius: RFValue(10),
      marginVertical: RFValue(10),
      resizeMode: "contain"
    },
    inf: {
      height: RFValue(40),
      borderColor: "white",
      borderWidth: RFValue(1),
      borderRadius: RFValue(10),
      paddingLeft: RFValue(10),
      color: "white",
      fontFamily: "Bubblegum-Sans",
      marginTop: 20
    },
    infExtra: {
      marginTop: RFValue(15)
    },
    inText: {
      textAlignVertical: "top",
      padding: RFValue(5)
    }
  });