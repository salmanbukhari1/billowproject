

import { Platform } from 'react-native'; //for platform specific styles
import { Colors } from 'react-native/Libraries/NewAppScreen';

// This file is for a reusable grouping of Theme items


const base = {

  container: {    
    flex: 1,
  },

  centerContent: {
    justifyContent: 'center', alignItems: 'center'
  },
  
  mainTitle: {
    fontSize: 30, textAlign: 'center', paddingLeft: 10, paddingRight: 10, marginBottom: 30
  },

  baseMarginBottom:{
    marginBottom: 10
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
}



export default base
