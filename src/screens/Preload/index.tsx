import React from 'react';
import { Container, LoadingIcon } from './styles';
import { Image, ImageBackground } from 'react-native';
import PcdtLogo from '../../assets/pcdt.png';
import Background from '../../assets/background.png';



export default () => {
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