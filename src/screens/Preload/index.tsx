import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './styles';
import { Image, ImageBackground } from 'react-native';
import PcdtLogo from '../../assets/pcdt.png';
import Background from '../../assets/background.png';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';



export default () => {
    const navigation = useNavigation();
    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');

            if(token !== null){
                // validate token
            }else{
                navigation.navigate("Login" as never);
            }
        }
        checkToken()
    }, []);
    return (
        <Container>
            <ImageBackground source={Background} resizeMode="cover" style={{flex:1, justifyContent:"center", alignItems: "center"}}> 
                <Image 
                    source={PcdtLogo} 
                    style={{ width: 200, height: 200}}
                />
                <LoadingIcon size="large" color="#FFFFFF"/>

            </ImageBackground>         
        </Container>
    );
}