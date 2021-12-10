import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    flex-direction: row;
    border-radius: 10px;            
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
    background-color: #fff;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    margin-left: 10px;
    color: #000;        

`;

export default ({placeholder}: any) => {
    return (
        <InputArea>
            <Input 
                placeholder={placeholder}
            />
        </InputArea>
    )
}