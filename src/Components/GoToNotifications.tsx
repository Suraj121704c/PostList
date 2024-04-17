import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

// user defined imports
import Styles from '../Utils/Styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Screens from '../Utils/Screens';

export default function GoToNotifications({navigation}:any) {
  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 16,
      }}>
      <Text style={{fontSize: 16, color: Colors.BLACK, marginVertical: 5}}>
        Invitations have moved to Notifications tab
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(Screens.NOTIFICATION)}
        style={[Styles.flexCenter, {
          paddingHorizontal: 16,
          alignSelf: 'flex-start',
          paddingVertical: 5,
          borderRadius: 50,
          backgroundColor: Colors.BLUE,
          elevation: 5,
        }]}>
        <Text style={{color: Colors.WHITE, fontSize: 16, fontWeight: 'bold'}}>
          Go To Notifications
        </Text>
      </TouchableOpacity>
    </View>
  );
}
