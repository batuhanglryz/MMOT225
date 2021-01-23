import React, { useContext,Component} from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import { Container, Header, Content, Left, Body, Right, Title, Tab, Tabs, Button } from 'native-base';
import Tab1 from '../screens/Tab1';
import { abs } from 'react-native-reanimated';


const HomeScreen = ({navigation}) => {
    const {logout} = useContext(AuthContext);

        return (
            <Container>
                <Header style={{ backgroundColor: '#6c1d0c' }} hasTabs >
                    <Left />
                       
                    <Right />
                </Header>
                <Tabs>
                    <Tab tabStyle={{ backgroundColor: '#6c1d0c' }}
                        activeTabStyle={{ backgroundColor: '#0000FE' }}
                        heading="işler">
                        <Tab1 />
                    </Tab>
                </Tabs><Button transparent buttonTitle='Logout' onPress={() => logout()} ><Text>Çık</Text></Button>
            </Container>

        );

}
export default HomeScreen;