import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { Container } from "../TopicDetails/styles";
import { useNavigation, useRoute } from "@react-navigation/native";


export default () => {

    const navigation = useNavigation();
    const route = useRoute();
    
    const {id}: any = route.params;
    console.log(id)

    // useEffect(()=>{
    //   setId(route.params.id)  
    // })

    return (
        <Container>
            <Text>Topic: {id}</Text>
        </Container>
    );
}