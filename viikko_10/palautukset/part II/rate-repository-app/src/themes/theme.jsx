import { Platform } from "react-native";

const theme = {
    testOS: {
      fontFamily: Platform.select({
        android:  'Roboto',
        ios:      'Arial',
        default:  'System',
      }),
    },
    testOS2: {
      ...Platform.select({
        ios: {fontFamily: 'Impact'},
        andrioid: {fontFamily: 'Robot'},
        default: {fontFamily: 'Impact'},
      }),
    },
    colors: {
      textPrimary:    '#24292e',
      textSecondary:  '#586069',
      primary:        '#0366d6',
      textAppbar:     '#ffffff',
      backAppbar:     '#24292e',
      mainBack:       '#e1e4e8',
    },
    opacity: {
      opacityAppbar:  '0.8',
    },
    padding: {
      pTopAppbar:     '11300',
    },
    fontSizes: {
      body:           14,
      subheading:     16,
    },
    fonts: {
      main:           'System',
    },
    fontWeights: {
      normal:       '400',
      bold:         '700',
    },
    repositoryFlexBoxColumn: {
      mainColumnFlex: {
        display:          'flex',
        flexDirection:    'column',
        gap:              10,
        flexWrap:         'wrap',
        //flex: 0,
        //wrap: 'wrap',
        //flexwrap: 'wrap',
      },
      flexColumnItem: {
        backgroundColor:  'white',
        flex: '0 1 1',
      },
    },
    repositoryFlexBoxRow: {
      flexRowContainer: {
        display:          'flex',
        flexDirection:    'row',
        paddingTop:       10,
        paddingLeft:      20,
      },
      flexStatistics: {
        //justifyContent:   'space-evenly',
        //display:          'flex',
        flexDirection:    'row',
        paddingLeft:      20,
        //paddingRight:     20,
        paddingBottom:    20,
      },
      flexButton: {
        display:          'flex',
        flexDirection:    'row',
        paddingLeft:      90,
        paddingBottom:    20,
      },
      flexStatisticsItem: {
        alignItems:       'center',
        justifyContent:   'center',
        paddingRight:      60,
      },
    },
  };
  
  export default theme;