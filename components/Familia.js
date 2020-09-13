import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Card, CardItem, Body, Form, Item, Label, Input} from 'native-base';
import { Text} from 'galio-framework';
import { Actions } from 'react-native-router-flux';

export default class Familia extends Component {
    render() {
        return (
 
                <Container>

                    <Header/>
                    <Content>
                    <Card>
                        <CardItem header>
                        <Text>Sobre la familia y/o la comunidad</Text>
                        </CardItem>
                        <CardItem>
                        <Body>
                            <Text>
                            Características del modo de vida.
                            </Text>
                        </Body>
                        </CardItem>
                        <CardItem footer>
                        <Text></Text>
                        </CardItem>
                    </Card>
                    <Text>
                        {"\n"}
                    </Text>
                    <Form>
                        <Item stackedLabel>
                        <Label>¿Cuáles son los antecedentes históricos de la población?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Existen manifestaciones de acumulación de poder que estén afectando la salud de las poblaciones?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Existe algún factor de importancia que esté afectando la salud de la comunidad?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Qué tipo de alternativas de educación para la salud existen?</Label>
                        <Input />                       
                        </Item>
                    </Form>
                    <Text>
                        {"\n"}
                    </Text>
                    <Button onPress={() => { Actions.Final(); }} rounded light radius={200} shadowless={true} style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                            <Text>Siguiente</Text>
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