import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Left, Right,Body} from 'native-base';
import { Text, Title } from 'galio-framework';
import { Actions } from 'react-native-router-flux';

export default class Valoracion extends Component {
    render() {
        return (
 
                <Container>

                    <Header/>
                    <Content>
                    <Text>
                        {"\n"}
                    </Text>
                    <Button onPress={() => { Actions.Observacion(); }} rounded light radius={200} shadowless={true} style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                            <Text>Observación</Text>
                    </Button>
                    <Button onPress={() => { Actions.Anamnesis(); }} rounded light radius={200} shadowless={true} style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                            <Text>Anamnesis</Text>
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