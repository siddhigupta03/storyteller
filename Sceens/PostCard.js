import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Post extends Component{
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.cardCon}
                onPress={() => this.props.navigation.navigate('PostScreen',{
                    story:this.props.story
                  })}>
                    <View style={styles.authCon}>
                        <View style={styles.authImgCon}>
                            <Image
                                source={require('../assets/profile_img.png')}
                                style={styles.profileImg}
                            />
                        </View>
                        <View style={styles.authNameCon}>
                            <Text style={styles.authNameText}>Author 1</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/post.jpeg')} style={styles.postImg} />
                    <View style={styles.actionCon} >
                        <View style={styles.likeButton}>
                            <Ionicons name={"heart"} size={RFValue(30)} color={'white'} />
                            <Text style={styles.likeT}>19k</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cardCon}
                onPress={() => this.props.navigation.navigate('PostScreen',{
                    story:this.props.story
                  })}>
                    <View style={styles.authCon}>
                        <View style={styles.authImgCon}>
                            <Image
                                source={require('../assets/profile_img.png')}
                                style={styles.profileImg}
                            />
                        </View>
                        <View style={styles.authNameCon}>
                            <Text style={styles.authNameText}>Author 2</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/image_1.jpg')} style={styles.postImg} />
                    <View style={styles.actionCon} >
                        <View style={styles.likeButton}>
                            <Ionicons name={"heart"} size={RFValue(30)} color={'white'} />
                            <Text style={styles.likeT}>13k</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cardCon}
                onPress={() => this.props.navigation.navigate('PostScreen',{
                    story:this.props.story
                  })}>
                    <View style={styles.authCon}>
                        <View style={styles.authImgCon}>
                            <Image
                                source={require('../assets/profile_img.png')}
                                style={styles.profileImg}
                            />
                        </View>
                        <View style={styles.authNameCon}>
                            <Text style={styles.authNameText}>Author 3</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/image_2.jpg')} style={styles.postImg} />
                    <View style={styles.actionCon} >
                        <View style={styles.likeButton}>
                            <Ionicons name={"heart"} size={RFValue(30)} color={'white'} />
                            <Text style={styles.likeT}>17k</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cardCon}
                onPress={() => this.props.navigation.navigate('PostScreen',{
                    story:this.props.story
                  })}>
                    <View style={styles.authCon}>
                        <View style={styles.authImgCon}>
                            <Image
                                source={require('../assets/profile_img.png')}
                                style={styles.profileImg}
                            />
                        </View>
                        <View style={styles.authNameCon}>
                            <Text style={styles.authNameText}>Author 4</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/image_3.jpg')} style={styles.postImg} />
                    <View style={styles.actionCon} >
                        <View style={styles.likeButton}>
                            <Ionicons name={"heart"} size={RFValue(30)} color={'white'} />
                            <Text style={styles.likeT}>14k</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cardCon}
                onPress={() => this.props.navigation.navigate('PostScreen',{
                    story:this.props.story
                  })}>
                    <View style={styles.authCon}>
                        <View style={styles.authImgCon}>
                            <Image
                                source={require('../assets/profile_img.png')}
                                style={styles.profileImg}
                            />
                        </View>
                        <View style={styles.authNameCon}>
                            <Text style={styles.authNameText}>Author 5</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/image_4.jpg')} style={styles.postImg} />
                    <View style={styles.actionCon} >
                        <View style={styles.likeButton}>
                            <Ionicons name={"heart"} size={RFValue(30)} color={'white'} />
                            <Text style={styles.likeT}>20k</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cardCon}
                onPress={() => this.props.navigation.navigate('PostScreen',{
                    story:this.props.story
                  })}>
                    <View style={styles.authCon}>
                        <View style={styles.authImgCon}>
                            <Image
                                source={require('../assets/profile_img.png')}
                                style={styles.profileImg}
                            />
                        </View>
                        <View style={styles.authNameCon}>
                            <Text style={styles.authNameText}>Author 6</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/image_5.jpg')} style={styles.postImg} />
                    <View style={styles.actionCon} >
                        <View style={styles.likeButton}>
                            <Ionicons name={"heart"} size={RFValue(30)} color={'white'} />
                            <Text style={styles.likeT}>15k</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cardCon}
                onPress={() => this.props.navigation.navigate('PostScreen',{
                    story:this.props.story
                  })}>
                    <View style={styles.authCon}>
                        <View style={styles.authImgCon}>
                            <Image
                                source={require('../assets/profile_img.png')}
                                style={styles.profileImg}
                            />
                        </View>
                        <View style={styles.authNameCon}>
                            <Text style={styles.authNameText}>Author 7</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/image_6.jpg')} style={styles.postImg} />
                    <View style={styles.actionCon} >
                        <View style={styles.likeButton}>
                            <Ionicons name={"heart"} size={RFValue(30)} color={'white'} />
                            <Text style={styles.likeT}>18k</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cardCon}
                onPress={() => this.props.navigation.navigate('PostScreen',{
                    story:this.props.story
                  })}>
                    <View style={styles.authCon}>
                        <View style={styles.authImgCon}>
                            <Image
                                source={require('../assets/profile_img.png')}
                                style={styles.profileImg}
                            />
                        </View>
                        <View style={styles.authNameCon}>
                            <Text style={styles.authNameText}>Author 8</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/image_7.jpg')} style={styles.postImg} />
                    <View style={styles.actionCon} >
                        <View style={styles.likeButton}>
                            <Ionicons name={"heart"} size={RFValue(30)} color={'white'} />
                            <Text style={styles.likeT}>16k</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    cardCon: {
      margin: RFValue(13),
      backgroundColor: "#2f345d",
      borderRadius: RFValue(20)
    },
    postImg: {
      resizeMode: "contain",
      width: "95%",
      alignSelf:"center",
      height: RFValue(250)
    },
    authCon: {
      paddingLeft: RFValue(20),
      justifyContent: "center"
    },
    authNameCon: {
      fontSize: RFValue(25),
      color: "white"
    },
    authNameText: {
      fontSize: RFValue(18),
      color: "white"
    },
    profileImg: {
        width: RFValue(20),
        height:RFValue(20)
    },
    actionCon: {
      justifyContent: "center",
      alignItems: "center",
      padding: RFValue(10)
    },
    likeButton: {
      width: RFValue(160),
      height: RFValue(40),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#eb3948",
      borderRadius: RFValue(30)
    },
    likeT: {
      color: "white",
      fontSize: RFValue(25),
      marginLeft: RFValue(5)
    },
    authImgCon:{
        width: RFValue(50),
        height: RFValue(50)
    }
  });
  