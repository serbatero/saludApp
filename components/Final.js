import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Button, Icon, Card, CardItem, Thumbnail, Left, Body, Right} from 'native-base';
import { Text} from 'galio-framework';
import { Actions } from 'react-native-router-flux';

export default class Final extends Component {
    render() {
        return (
 
                <Container>

                    <Header/>
                    <Content>
                    <Text>
                        {"\n"}
                    </Text>
                    <Card>
                        <CardItem>
                        <Left>
                            <Thumbnail source={{uri: 'https://image.freepik.com/vector-gratis/simbolo-pulgar-arriba-red-social_107146-13.jpg'}} />
                            <Body>
                            <Text>Identificación de la falencia del dominio</Text>
                            </Body>
                        </Left>
                        </CardItem>
                        <CardItem cardBody>
                        <Image source={{uri: 'https://assets.entrepreneur.com/content/3x2/2000/20171123150220-gracias.jpeg'}} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                        <Left>
                            <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>12 Likes</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>4 Comments</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                        </CardItem>
                    </Card>

                    <Button iconLeft onPress={() => { Actions.Menu(); }} style={{alignItems: 'center', justifyContent: 'center', margin: 100}}>
                        <Icon name='home' />
                        <Text>   HOME</Text>
                    </Button>
                    </Content>
                </Container>

        );
    }
}