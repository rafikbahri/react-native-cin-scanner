
import React, {Component} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { CardIOModule } from 'react-native-awesome-card-io';

export default class App extends Component {

    scanCard() {
        CardIOModule
            .scanCard()
            .then((card) => {
              Alert.alert('Done!');
              console.log(card);

              })
            .catch(() => {
                // the user cancelled
            })
    }
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={this
                    .scanCard
                    .bind(this)}>
                    <Text>Scan card!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
