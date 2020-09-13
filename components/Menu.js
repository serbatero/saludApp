import React, { Component } from 'react';
import { StyleSheet, View, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Container, Header, Content, Button,Card, CardItem, Body} from 'native-base';
import { Text } from 'galio-framework';
import { Actions } from 'react-native-router-flux';

export default class Menu extends Component {
    render() {
        return (
 
                <Container>
                    <Header />
                    <Content>
                    <Card>
                        <CardItem header>
                        <Text>Promoción de la Salud</Text>
                        </CardItem>
                        <CardItem>
                        <Body>
                            <Text>
                            Conciencia de bienestar o normalidad en la función y en las estrategias usadas para mantener el control, así como la mejora del bienestar o la normalidad de la función
                            </Text>
                        </Body>
                        </CardItem>
                        <CardItem footer>
                        <Text>ODS</Text>
                        </CardItem>
                    </Card>
                        <Button rounded light radius={200} shadowless={true} style={{ talignItems: 'center', justifyContent: 'center', margin: 10 }} onPress={() => { Actions.Clase1(); }}>
                            <Text>Clase 1: Toma de conciencia de la salud</Text>
                        </Button>
                        <Button rounded light radius={200} shadowless={true} style={{ talignItems: 'center', justifyContent: 'center', margin: 10 }} onPress={() => { Actions.Clase2(); }}>
                            <Text>Clase 2: Gestión de la Salud</Text>
                        </Button>
                    </Content>
                </Container>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#FF5733',
        alignItems: 'center',
        justifyContent: 'center',
    },
});