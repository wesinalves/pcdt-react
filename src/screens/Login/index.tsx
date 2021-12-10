import React from 'react';
import { Container, InputArea, CustomButton, CustomButtonText } from './styles';
import { Image, ImageBackground } from 'react-native';
import PcdtLogo from '../../assets/pcdt.png';
import Background from '../../assets/background.png';

import LoginInput from '../../components/LoginInput';

export default () => {
    return (
        <Container>
            <ImageBackground source={Background} resizeMode="cover" style={{flex:1, justifyContent:"center", alignItems: "center"}}> 
                <Image 
                    source={PcdtLogo} 
                    style={{ width: 200, height: 200}}
                />
                <InputArea>
                <LoginInput 
                    placeholder="Digite seu login"
                />
                <LoginInput 
                    placeholder="Digite sua senha"
                />
                <CustomButton>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
            </InputArea>              

            </ImageBackground>
            

        </Container>
    );
}