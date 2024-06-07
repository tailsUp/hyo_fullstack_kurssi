import { Platform } from "react-native";

export const testOS = {
    byOS: {
      color: 'red',
      //fontFamily: 'Impact',
      ...Platform.select({
        ios: {fontFamily: 'Impact'},
        andrioid: {fontFamily: 'Robot'},
        default: {fontFamily: 'Impact'},
      }),
    },
  }

export default testOS;