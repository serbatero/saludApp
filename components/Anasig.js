import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Card, CardItem, Body, Form, Item, Label, Input} from 'native-base';
import { Text} from 'galio-framework';
import { Actions } from 'react-native-router-flux';

export default class Anasig extends Component {
    render() {
        return (
 
                <Container>

                    <Header/>
                    <Content>
                    <Text>
                        {"\n"}
                    </Text>
                    <Form>
                        <Item stackedLabel>
                        <Label>Su clase social</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>La comunidad o sociedad a la que pertenece</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>Su edad</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>Su género</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>Sus condiciones de vida, de estudio, de trabajo</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>Su capacidad para socializar</Label>
                        <Input />
                        </Item>
                    </Form>

                    <Button onPress={() => { Actions.Anasig2(); }} rounded light radius={200} shadowless={true} style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>
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