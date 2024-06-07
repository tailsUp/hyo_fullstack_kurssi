import { Text as NativeText } from 'react-native';
import customTextTheme from '../themes/customTextTheme';

const CustomText = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    customTextTheme.text,
    color === 'textSecondary' && customTextTheme.colorTextSecondary,
    color === 'primary' && customTextTheme.colorPrimary,
    fontSize === 'subheading' && customTextTheme.fontSizeSubheading,
    fontWeight === 'bold' && customTextTheme.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default CustomText;