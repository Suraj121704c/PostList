import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Heading from './Heading';
import Styles from '../Utils/Styles';

export default function SectionHeading({title}) {
  return (
    <View
      style={[
        Styles.flexCenter,
        {
          justifyContent: 'space-between',
          marginBottom: 10,
        },
      ]}>
      <Heading title={title} />
    </View>
  );
}
