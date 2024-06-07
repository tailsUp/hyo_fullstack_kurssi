import theme from "./theme";

const appBarTheme = {

    appBarContainer: {
        paddingTop:       50,
        display:          'flex',
        flexDirection:    'row',
        flexWrap:         'wrap',
        alignItems:       'center',
        backgroundColor:  theme.colors.backAppbar,
      },
      appBarItem: {
        paddingRight: 20,
      },
    appBarText: {
        color:            theme.colors.textAppbar,
        backgroundColor:  theme.colors.backAppbar,
        fontWeight:       'bold',
      }
};

export default appBarTheme;