import React, { useContext } from 'react';
import styled from 'styled-components/native';

import { UserContext } from '../contexts/userContext';

import TopicIcon from '../assets/list.svg';
import HomeIcon from '../assets/home.svg';
import AccountIcon from '../assets/account.svg';
import FavoriteIcon from '../assets/favorite.svg';
import SearchIcon from '../assets/search.svg';

const TabArea = styled.View`
    height: 60px;
    background-color: #FFFFFF
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export default ({state, navigation}: any) => {
    const { state:user } = useContext(UserContext);

    const goTo = (screenName: string) => {
        navigation.navigate(screenName);
    }
    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Topics')}>
                <HomeIcon style={{opacity: state.index===0? 1 : 0.5}} width="24" height="24" fill="#333" />
            </TabItem>
            <TabItem onPress={()=>goTo('Favorites')}>
                <FavoriteIcon style={{opacity: state.index===1? 1 : 0.5}} width="24" height="24" fill="#333" />
            </TabItem>
            <TabItem onPress={()=>goTo('Topics')}>
                <SearchIcon style={{opacity: state.index===2? 1 : 0.5}} width="24" height="24" fill="#333" />
            </TabItem>
            <TabItem onPress={()=>goTo('Profile')}>
                <AccountIcon style={{opacity: state.index===3? 1 : 0.5}} width="24" height="24" fill="#333" />
            </TabItem>
        </TabArea>
    );
}
