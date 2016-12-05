import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import CheckBox from 'react-native-checkbox';

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
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    TODOS
                </Text>
                <CheckBox
                    label='切换'
                    checked={this.state.checked}
                    onChange={(checked) => this.state.checked =!this.state.checked}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

