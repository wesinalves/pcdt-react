import React from "react";
import styled from "styled-components/native";
import Trophy from '../assets/trophy.svg';
import { useNavigation} from '@react-navigation/native'; 

const TopicArea = styled.View`
    margin: 0px 20px 5px 20px;
    border-radius: 10px;
    flex-direction: column;
    height: 50px;
     
    
`
const TopicItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
    
    
`;

const TopicPercent = styled.Text`
    margin-right: 10px;
    color: #000;
`

const TopicLabel = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  color: #000;
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
                <TopicLabel>{name}</TopicLabel>
                {percent === 100 ?
                    <Trophy height={20} width={20} />
                : null}
                <TopicPercent>{percent}</TopicPercent>
            </TopicItem>
        </TopicArea>
        
    );
}

export default TopicComponent;