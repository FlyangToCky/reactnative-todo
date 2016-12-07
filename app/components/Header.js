import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Header extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
      }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>todos</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    title:{
        fontSize:100,
        fontWeight:'bold',
        color:"#EAD7D7"
    }
});

