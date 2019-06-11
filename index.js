import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

export default class Hello360 extends React.Component {


  state = {
    count: 0.00,
  }

  _incrementCount = () => {
    var newVal = (this.state.count + 0.1)
    this.setState({ count: newVal });
  }

  _decrementCount = () => {

    if (this.state.count > 0) {
      var newVal = (this.state.count - 0.1)
      this.setState({ count: newVal });
    }
  }

  // componentDidMount() {
  //   setInterval(this._incrementCount, 10);
  // }

  render() {
    return (
      <View style={styles.panel}>
        <VrButton onClick={this._incrementCount} style={styles.upButton} />
        <Text style={styles.greeting}>
          {`Count = ${this.state.count.toPrecision(2)}`}
        </Text>
        <VrButton onClick={this._decrementCount} style={styles.downButton} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(110, 110, 100, 1.0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upButton: {
    padding: 20,
    backgroundColor: '#00FF00',
    borderColor: '#FFFFFF',
    borderWidth: 2,
  },
  downButton: {
    padding: 20,
    backgroundColor: '#FF0000',
    borderColor: '#FFFFFF',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 48,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
