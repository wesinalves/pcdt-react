import React from "react";
import styled from "styled-components/native";
import Trophy from '../assets/trophy.svg';
import { useNavigation } from '@react-navigation/native'; 

const TopicArea = styled.View`
    margin: 0px 10px 5px 10px;
    border-radius: 10px;
    flex-direction: column;
    height: 100px; 
    background-color: #fff;
    
`
const TopicItem = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
        
`;

const InfoView = styled.View`
    flex: 1;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
`;

const TopicPercent = styled.Text`
    margin-right: 10px;
    margin-left: 10px;
    color: #000;
    font-size: 20px;                   
`;

const TopicLabel = styled.Text`
  margin-top: 18px;
  margin-right: 10px;
  margin-bottom: 20px;
  margin-left: 10px;
  color: #000;
  font-size: 25px;
`

interface TopicProps {
    id: number;
    name: string;
    percent: number; 
}

const TopicComponent: React.FC<TopicProps> = ({id, name, percent}) => {
    
    const navigation = useNavigation();

    //const link = '/tabs/topicos/detalhes/'.concat(id.toString())

    const goToDetails = (topicId: number) => {
        navigation.navigate('TopicDetails' as never, {id: topicId} as never);
    }

    return (
        <TopicArea>
            <TopicItem onPress={()=>goToDetails(id)}>
                <TopicLabel>{name.substring(0,20)}</TopicLabel>
                <InfoView>
                    {percent === 100 ?
                        <Trophy height={20} width={20} />
                    : null}
                    <TopicPercent>{percent}%</TopicPercent>
                </InfoView>
            </TopicItem>
        </TopicArea>
        
    );
}

export default TopicComponent;