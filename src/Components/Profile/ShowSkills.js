import React from 'react';
import {View, Text} from 'react-native';

// user defined imports
import Colors from '../../Utils/Colors';
import Styles from '../../Utils/Styles';

const ShowSkills = ({DATA}) => DATA.SKILLS.map(item => (
  <View
    style={{
      borderBottomColor: Colors.LIGHT_GRAY,
      borderBottomWidth: 1,
      paddingVertical: 10,
    }}>
    <Text style={{fontSize: 19, color: Colors.BLACK, fontWeight: 'bold'}}>
      {item.title}
    </Text>
    <View style={Styles.flexCenter}>
      <Text style={{fontSize: 16}}>
        {item.endorsements}{' '}
        {item.endorsements > 1 ? 'endorsments' : 'endorsment'}
      </Text>
    </View>
  </View>
))

export default ShowSkills;
