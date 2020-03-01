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

import {
  
  Colors,
  
} from 'react-native/Libraries/NewAppScreen';

import {Dimensions} from 'react-native';


import {NativeRouter, Switch, Route, Link} from "react-router-native";
import Home from "./features/home/screens/home.rn";
import SecondPage from "./features/secondpage/screens/secondpage.rn";

import {BrowserHistory} from 'history';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App: () => React$Node = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
          <NativeRouter>
            <View style={[styles.container]}>
              <View style={{justifyContent: 'center', alignItems: 'center', height: windowHeight}}>
                <Route exact path="/" component={Home} />
                <Route exact path="/secondpage" component={SecondPage} />
              </View>
            </View>
          </NativeRouter>
            
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

  container: {
    
    flex: 1,
  },

  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
    color: '#333'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
