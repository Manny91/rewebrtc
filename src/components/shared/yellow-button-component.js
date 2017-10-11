import { Button } from 'react-native-elements'
import React from 'react';

export class YellowButtonComponent extends React.Component {
    render() {
        const {source, children, style, ...props} = this.props
        return (
            <Button

                    buttonStyle={
                        { borderRadius: 4,
                            paddingTop: 5,
                            paddingLeft: 10,
                            paddingBottom: 5,
                            paddingRight: 10,
                            marginBottom: 5,
                            backgroundColor: '#eded50',
                             ...style
                        }
                    }
                    color={this.props.color}
                    title={this.props.title}
                    onPress={this.props.onPress}>
            </Button>
        )
    }

}
