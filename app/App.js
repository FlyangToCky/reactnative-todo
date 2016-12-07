import React, {Component} from 'react';
import {
    StyleSheet
}from 'react-native';
import { Container, Header,Content, Text,Title, Button, Icon } from 'native-base';

//import Header from './components/Header';
import Util from  './common/utils';
//import Card from './components/Card';

export default class App extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            checked:false
        };
      }

    render() {
        return (
            <Container>
                <Header>
                    <Button transparent>
                        <Icon name='ios-arrow-back' />
                    </Button>

                    <Title>Header</Title>

                    <Button transparent>
                        <Icon name='ios-menu' />
                    </Button>
                </Header>

                <Content>
                    <Text>Your main content goes here</Text>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#f5f5f5",
        alignItems:"center"
    }
});

