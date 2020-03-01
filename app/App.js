/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';



import {Dimensions} from 'react-native';


import {NativeRouter, Switch, Route, Link} from "react-router-native";
import Home from "./features/home/screens/home.rn";
import SecondPage from "./features/secondpage/screens/secondpage.rn";
import BaseStyles from './themes/BaseStyles';

import {BrowserHistory} from 'history';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App: () => React$Node = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={BaseStyles.container}>
          <NativeRouter>
            <View style={BaseStyles.container}>
              <View style={[{height: windowHeight}, BaseStyles.centerContent]}>
                <Route exact path="/" component={Home} />
                <Route exact path="/secondpage" component={SecondPage} />
              </View>
            </View>
          </NativeRouter>
            
      </SafeAreaView>
    </>
  );
};

export default App;
