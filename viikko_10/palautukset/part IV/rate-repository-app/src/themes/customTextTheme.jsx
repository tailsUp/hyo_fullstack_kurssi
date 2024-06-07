import theme from "./theme";

const customTextTheme = {
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.testOS.fontFamily,
        fontWeight: theme.fontWeights.normal,
      },
      colorTextSecondary: {
        color: theme.colors.textSecondary,
      },
      colorPrimary: {
        color: theme.colors.primary,
      },
      fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading,
      },
      fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
      },
};

export default customTextTheme;