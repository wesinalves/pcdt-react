import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
   flex: 1;
   justify-content: center;  

`;

// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center    
// height: 100%;
// background-image: url('../../assets/background.png');
// background-position: center top;
// background-repeat: no-repeat;
// background-size: cover;

export const LoadingIcon = styled.ActivityIndicator`
    margint-top: 50px
`;