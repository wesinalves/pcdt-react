import React, {useState, useContext } from 'react';
import { Container, InputArea, CustomButton, CustomButtonText } from './styles';
import { Image, ImageBackground } from 'react-native';
import PcdtLogo from '../../assets/pcdt.png';
import Background from '../../assets/background.png';

import LoginInput from '../../components/LoginInput';
import Api from '../../Api';
// import { UserContext } from '../../contexts/userContext';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation} from '@react-navigation/native'; 

export default () => {

    const [emailField, setEmailFiled] = useState('');
    const [passwordField, setPasswordFiled] = useState('');
    // const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();
    
    const handleLoginClick = async (e: React.FormEvent) => {
        e.preventDefault();

        if(emailField && passwordField){
            await Api.handleLogin(emailField, passwordField).then((res)=>{
                if(res.data.token){
                    AsyncStorage.setItem("token", res.data.token)
                    console.log(res.data.token)

                    // dispatch should be used for store useful information
                    // from users but we received just the token in handle login
                    // userDispatch({
                    //     type: 'setAvatar',
                    //     payload: {
                    //         avatar: res.data.id
                    //     } 
                    // });
                    navigation.reset({
                        routes: [{name: 'MainTab'} as never]
                    });

                }else{
                    AsyncStorage.removeItem("token")                    
                }
            })
        }

    }

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
                        value={emailField}
                        onChangeText={(t: string)=>setEmailFiled(t)}
                    />
                    <LoginInput 
                        placeholder="Digite sua senha"
                        value={passwordField}
                        onChangeText={(t: string)=>setPasswordFiled(t)}
                        password={true}
                    />
                    <CustomButton onPress={handleLoginClick}>
                        <CustomButtonText>Login</CustomButtonText>
                    </CustomButton>
                </InputArea>              

            </ImageBackground>
            

        </Container>
    );
}