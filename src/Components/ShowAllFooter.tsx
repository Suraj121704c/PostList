import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

// user defined imports
import Colors from '../Utils/Colors';
import Styles from '../Utils/Styles';

export default function ShowAllFooter() {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: Colors.GRAY,
        borderTopWidth: 1,
        paddingVertical: 10,
      }}>
      <TouchableOpacity onPress={() => {}} style={Styles.flexCenter}>
        <Text style={{color: Colors.BLUE, fontWeight: 'bold', fontSize: 17}}>
          Show All
        </Text>
      </TouchableOpacity>
    </View>
  );
}
