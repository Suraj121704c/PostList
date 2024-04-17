import {Text} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';

const Heading = ({title}: any) => (
  <Text style={{fontSize: 19, color: Colors.BLACK, fontWeight: 'bold'}}>
    {title}
  </Text>
);

export default Heading;
