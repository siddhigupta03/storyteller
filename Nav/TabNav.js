import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Create from '../Sceens/Create';
import Feed from '../Sceens/Feed';

const Tab = createMaterialBottomTabNavigator();

const TabNav = () => {
    return(
        <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomTabStyle}
        screenOptions= {({route}) => ({
            tabBarIcon: ({focused, color, size}) =>{
                let iconName;
                if(route.name === 'Feed') {
                    iconName = focused
                    ? 'home'
                    : 'home-outline'
                } else if(route.name === 'Create'){
                    iconName= focused? "add-circle":"add-circle-outline"
                }
                return(
                    <Ionicons name = {iconName} size={size} color={color}
                    style={styles.icons}/>
                )
            }
        }) }
            
            activeColor='#f0f'
            inactiveColor = 'orange' >
                <Tab.Screen name='Feed' component={Feed}/>
                <Tab.Screen name='Create' component={Create}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    bottomTabStyle:{
        backgroundColor:'#2f345d',
        height:'8%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        overflow:'hidden',
        position:'absolute'
    },
    icons:{
        width:RFValue(30),
        height:RFValue(30),
    },
})

export default TabNav;