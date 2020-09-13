import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Form, Item, Label, Input} from 'native-base';
import { Text} from 'galio-framework';
import { Actions } from 'react-native-router-flux';

export default class Anasig2 extends Component {
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
                        <Label>¿Qué significa para usted el autocuidado?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Cuál es su motivación para autocuidarse?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Realiza usted exámenes de rutina?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Le es fácil seguir las instrucciones de médicos, enfermeras, nutricionistas u otro personal de salud? Describa las estrategias que tiene para fortalecer o mejorar su salud, es decir, ¿cómo cuida usted su salud y la de su familia y su comunidad?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Qué mecanismos tiene su comunidad para proteger la salud de la población? Es decir, ¿qué hacen en su barrio, su institución educativa y/o su trabajo para cuidar de la salud?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Acude con facilidad al médico cuando considera que este enfermo?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Reconoce fácilmente la necesidad de acudir a las clínicas u hospitales y pedir ayuda asistencial?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>Aparte de las clínicas, los hospitales y los centros de salud, ¿qué otras organizaciones o entidades cree usted que le aportan en el mejoramiento de su salud? ¿pertenece a alguna de ellas?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Quiénes han invertido económicamente para mejorar la salud de su comunidad, recientemente?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Conoce algún proyecto social que le ayude a usted, a su familia o su comunidad a mejorar su salud?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Cuáles cree que puedan ser los factores políticos que afectan su salud, la de su familia y la su comunidad? ¿Cómo se han visto afectados?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Considera que existen factores medioambientales que estén afectando su salud y la de su familia o su comunidad? ¿Cuáles y cómo?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Qué experiencias negativas ha tenido en su vida que le hayan afectado su salud?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>Mencione qué hábitos de vida tiene usted, su familia y su comunidad que afectan la salud.</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Cómo controla las tendencias malsanas que pueden afectar su salud? Es decir, ¿cómo evita caer en el error de cometer actos que afecten su salud?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Ha participado de algún tipo de movilización social?</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                        <Label>¿Es usted un líder social o conoce y/o es cercano a alguno? ¿Cómo describe esta experiencia? Identifique los valores y principios de su comunidad que hacen que su salud mejore o empeore.</Label>
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