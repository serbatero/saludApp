import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Left, Right,Body, Form,Item, Label,Input} from 'native-base';
import { Text, Title } from 'galio-framework';
import { Actions } from 'react-native-router-flux';

export default class Anamnesis extends Component {
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
                        <Label>Para usted, ¿qué es la salud?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Cree que tiene salud? ¿Por qué?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Ha tenido alguna enfermedad durante el último año? ¿Cual?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Su enfermedad ha afectado sus actividades diarias (Trabajo, recreación, tiempo en familia, estudio)?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Cuándo está enfermo que hace para recuperar la salud? (incluya remedios y métodos caseros)</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Qué significa para usted tener calidad de vida? ¿cómo es la calidad de vida que pueden tener usted, su familia y su comunidad?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>Si la salud es un derecho, ¿usted considera que en el territorio en el que usted y su familia viven se garantiza y respeta ese derecho? ¿por qué?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Cree que alguna de las siguientes condiciones le afecta su salud, la de su familia o la de su comunidad? ¿cómo?</Label>
                        <Input />
                        </Item>
                    </Form>
                    <Text>
                        {"\n"}
                    </Text>
                    <Button onPress={() => { Actions.Anasig(); }} rounded light radius={200} shadowless={true} style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>
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