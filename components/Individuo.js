import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Card, CardItem, Body, Form, Item, Label, Input} from 'native-base';
import { Text} from 'galio-framework';
import { Actions } from 'react-native-router-flux';

export default class Individuo extends Component {
    render() {
        return (
 
                <Container>

                    <Header/>
                    <Content>
                    <Card>
                        <CardItem header>
                        <Text>Sobre el individuo</Text>
                        </CardItem>
                        <CardItem>
                        <Body>
                            <Text>
                            Revise la apariencia física teniendo en cuenta aspectos como:
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
                        <Label>Edad aparente.</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>Postura ante la anamnesis.</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>Conformación.</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>Características del lenguaje.</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>Movimientos corporales (voluntarios y/o involuntarios).</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>Presentación personal.</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>Grado de cooperación.</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>Evidencia de enfermedad.</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>Higiene personal.</Label>
                        <Input />
                        </Item>
                    </Form>

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