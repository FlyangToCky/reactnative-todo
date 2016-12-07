import React, {Component} from 'react';



import Util from '../common/utils';

export default class Cards extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
      }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <CheckBox checked={true} />
                            <Text>Daily Stand Up</Text>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={false} />
                            <Text>Discussion with Client</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}



