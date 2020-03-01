import React, { Component } from "react";
import Toast from 'react-native-simple-toast';
import { Text, View, TouchableOpacity, StyleSheet, Button } from "react-native";
import PropTypes from "prop-types";
import Counter from "../../../components/counter";



export default class Home extends Component {

	constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this)
    this.goToSEcondPage = this.goToSEcondPage.bind(this);

    this.state = {
      counterValue: 0,
    }
  }


  goToSEcondPage(){

    this.props.history.push('/secondpage', { counterValue: this.state.counterValue });
  }

  onChange(number, type){
    this.setState({counterValue: number});

    
  }

  render(){


  	return (
  		<View style={{alignItems: 'center', justifyContent: 'center', }}>
        <Text style={{marginBottom: 30, fontSize: 30, textAlign: 'center', paddingLeft: 10, paddingRight: 10}}>Go ahead! Test the counter to its limits</Text>
  			<View style={{marginBottom: 10}}>
          <Counter initialValue={this.state.counterValue} onChange={this.onChange.bind(this)}   />
        </View>
        <Button title="Second Page" onPress={this.goToSEcondPage} />
  		</View>
  	)
  }
}

