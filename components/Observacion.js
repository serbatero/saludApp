import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Left, Right,Body} from 'native-base';
import { Text} from 'galio-framework';
import { Actions } from 'react-native-router-flux';

export default class Observacion extends Component {
    render() {
        return (
 
                <Container>

                    <Header/>
                    <Content>
                    <Text>
                        {"\n"}
                    </Text>
                    <Button onPress={() => { Actions.Individuo(); }} rounded light radius={200} shadowless={true} style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                            <Text>Sobre el individuo</Text>
                    </Button>
                    <Button onPress={() => { Actions.Familia(); }} rounded light radius={200} shadowless={true} style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                            <Text>Sobre la familia y/o comunidad</Text>
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