import React, { Component } from "react";
// import Toast from 'react-native-simple-toast';
import { Text, View, TouchableOpacity, StyleSheet, Button } from "react-native";
import BaseStyles from '../../../themes/BaseStyles';


export default class SecondPage extends Component {

	constructor(props) {
    super(props);

    
    this.goHome = this.goHome.bind(this);

    this.state = {
      maxTabs: 0,
    }
  }

  goHome(){

    this.props.history.goBack();
  }

componentDidMount(){
    }

  render(){

    const {counterValue} = this.props.location.state;

  	return (
  		<View>
  			<Text style={BaseStyles.baseMarginBottom}>Value of the counter from home page {counterValue}</Text>
        <Button title="Go Back" onPress={this.goHome} />
  		</View>
  	)
  }
}