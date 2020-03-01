import React, { Component } from "react";
import Toast from 'react-native-simple-toast';
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.initialValue
    };

    this.decrementValue = this.decrementValue.bind(this);
    this.incrementValue = this.incrementValue.bind(this);
  }


  // decrment the current value by 1
  decrementValue() {
    const { value } = this.state;
    const newValue = value - 1;

    if (value == this.props.min) {
      Toast.showWithGravity('Oops cannot go below lowest value : ' + this.props.min, Toast.LONG, Toast.TOP)
      return;
    }

    return this.setState({ value: newValue }, () =>
      this.props.onChange(newValue, "-")
    );
  }


  // increment the current value by 1
  incrementValue() {
    const { value } = this.state;
    const newValue = value + 1;

    if (value == this.props.max) {
      Toast.showWithGravity('Oops cannot go beyond heighest value : ' + this.props.max, Toast.LONG, Toast.TOP)
      return;
    }

    return this.setState({ value: newValue }, () =>
      this.props.onChange(newValue, "+")
    );
  }

  renderDecrementAction() {
    const {
      min,
      touchableDisabledColor,
      touchableColor,
      minusIcon
    } = this.props;

    const isMinusDisabled = min == this.state.value;
    const buttonDesign = {
      borderColor: isMinusDisabled ? touchableDisabledColor : touchableColor
    };

    return (
      <TouchableOpacity
        style={[Styles.touchable, buttonDesign]}
        onPress={this.decrementValue}
        activeOpacity={isMinusDisabled ? 0.8 : 0.3}
      >
        {this.props.minusIcon ? (
          this.props.minusIcon(
            isMinusDisabled,
            touchableDisabledColor,
            touchableColor
          )
        ) : (
          <Text
            style={[
              Styles.iconText,
              {
                color: isMinusDisabled ? touchableDisabledColor : touchableColor
              }
            ]}
          >
            -
          </Text>
        )}
      </TouchableOpacity>
    );
  }

  renderIncrementAction() {
    const {
      max,
      touchableDisabledColor,
      touchableColor,
      plusIcon
    } = this.props;

    const isIcrementDisabled = max == this.state.value;
    const buttonDesign = {
      borderColor: isIcrementDisabled ? touchableDisabledColor : touchableColor
    };

    return (
      <TouchableOpacity
        style={[Styles.touchable, buttonDesign]}
        onPress={this.incrementValue}
        activeOpacity={isIcrementDisabled ? 0.8 : 0.3}
      >
        {this.props.plusIcon ? (
          this.props.plusIcon(
            isIcrementDisabled,
            touchableDisabledColor,
            touchableColor
          )
        ) : (
          <Text
            style={[
              Styles.iconText,
              {
                color: isIcrementDisabled ? touchableDisabledColor : touchableColor
              }
            ]}
          >
            +
          </Text>
        )}
      </TouchableOpacity>
    );
  }

  render() {
    const { value } = this.state;

    return (
      <View style={Styles.container}>
        <View>{this.renderDecrementAction()}</View>
        <View style={Styles.value}>
          <Text style={[Styles.text, { color: this.props.textColor }]}>
            {value}
          </Text>
        </View>
        <View>{this.renderIncrementAction()}</View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },

  text: {
    fontSize: 30,
    paddingLeft: 15,
    paddingRight: 15
  },

  iconText: {
    fontSize: 30,
    marginTop: -3
  },

  number: {
    minWidth: 40,
    alignItems: "center",
    justifyContent: "center"
  },

  touchable: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  }
});

Counter.propTypes = {
  start: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,

  textColor: PropTypes.string,
  touchableColor: PropTypes.string,
  touchableDisabledColor: PropTypes.string,

  minusIcon: PropTypes.func,
  plusIcon: PropTypes.func
};

Counter.defaultProps = {
  start: 0,
  min: -100,
  max: 100,
  onChange(number, type) {
    
  },

  textColor: "#196583",
  touchableColor: "#27AAE1",
  touchableDisabledColor: "#B5E9FF",

  minusIcon: null,
  plusIcon: null
};