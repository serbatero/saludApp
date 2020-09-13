import React, { Component } from 'react';
import { Container, Header, Content, Button,Card, CardItem, Icon, Body} from 'native-base';
import { Text } from 'galio-framework';
import { Actions } from 'react-native-router-flux';

export default class Clase2 extends Component {
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
                                 Identificación, control, realización e integración de actividades para mantener la salud y el bienestar
                            </Text>
                        </Body>
                        </CardItem>
                        <CardItem footer>
                        <Text>ODS</Text>
                        </CardItem>
                    </Card>
                        <Button onPress={() => { Actions.Valoracion(); }} rounded light radius={200} shadowless={true} style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                            <Text>Valoración</Text>
                        </Button>
                        <Button iconLeft onPress={() => { Actions.Menu(); }} style={{alignItems: 'center', justifyContent: 'center', margin: 100}}>
                            <Icon name='home' />
                            <Text>   HOME</Text>
                        </Button>

                    </Content>

                </Container>

        );
    }
}