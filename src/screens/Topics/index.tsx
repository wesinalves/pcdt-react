import React, { isValidElement, useEffect, useState } from "react";
import { Container } from "../Topics/styles";
import { SectionList, Text } from "react-native";
import TopicComponent from "../../components/TopicComponent";
import Api from "../../Api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

export default () => {
    const [sections, setSections] = useState([])
    const navigation = useNavigation();

    useEffect(()=>{
        const loadData = async () => {
            const token = await AsyncStorage.getItem("token") as any;
            //const tokenValue = token != null ? JSON.parse(token) : null;
            //console.log(token);
            //navigation.navigate('Login' as never)
            Api.loadSections(token).then(data => {
                setSections(data);
                //console.log(data);
            })
        };
        loadData();
    });

    const countSectionProgress = (module_data: any) => {
        let percent = 0.5
        let totalModules = 0
        let totalCompletion = 0

        module_data.forEach((module: any) => {
        if(module.completion == 1){
            totalModules += 1
            if(module.completiondata.state == 1){
            totalCompletion += 1
            }
        }
        });
        

        percent = (totalCompletion * 100) / totalModules
        if(totalModules == 0){
            percent = 0
        }

        return Number(percent.toFixed(0))
    }
    return (
        <Container>
            {sections.length != 0 ? (
                <>
                    <Text>Continuar</Text>
                    {sections.filter(section => countSectionProgress(section['modules']) > 0)
                    .map((section, index) => <TopicComponent name={section['name']} 
                        percent={countSectionProgress(section['modules'])} id={section['id']} key={index}/>
                    )}
                    
                    <Text>Não Lida</Text>
                </>
            ) : <Text>Nenhum texto</Text>
            }
        </Container>
    );
}