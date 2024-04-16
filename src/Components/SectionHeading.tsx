import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// user defined import
import Heading from './Heading';
import Styles from '../Utils/Styles';

export default function SectionHeading({title}: any) {
  return (
    <View
      style={[
        Styles.flexCenter,
        {
          justifyContent: 'space-between',
          marginBottom: hp(2),
        },
      ]}>
      <Heading title={title} />
    </View>
  );
}
