import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// user defined import
import Styles from '../Utils/Styles';
import CustomIcon from './CustomIcon';
import Images from '../Utils/Images';
import Colors from '../Utils/Colors';
import Screens from '../Utils/Screens';

const HeaderOptions = ({navigation, iconLeft, isPostScreen}: any) => (
  <View
    style={[
      Styles.flexCenter,
      {
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        elevation: hp(1),
        paddingVertical: 7,
      },
    ]}>
    <View style={{paddingLeft: wp(2)}}>
      {isPostScreen ? (
        <TouchableOpacity onPress={() => navigation.navigate(Screens.HOME)}>
          <CustomIcon name={iconLeft} size={34} color={Colors.BLACK} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate(Screens.PROFILE)}>
          <Image
            source={Images.USERS.USER1}
            style={{borderRadius: wp(4), height: hp(4.8), width: wp(10.2)}}
          />
        </TouchableOpacity>
      )}
    </View>

    {isPostScreen ? (
      <Text
        style={{
          width: 240,
          marginHorizontal: 16,
          fontSize: 19,
          color: Colors.BLACK,
          fontWeight: 'bold',
        }}>
        Share Post
      </Text>
    ) : (
      <TextInput
        placeholder="Search"
        placeholderTextColor={Colors.BLACK}
        style={{
          marginHorizontal: wp(5),
          width: wp(67),
          height: hp(5),
          backgroundColor: Colors.BLUE1,
          borderRadius: wp(2),
          paddingHorizontal: wp(4),
          color: Colors.BLACK,
        }}
      />
    )}

    <TouchableOpacity style={{marginRight: 19}}>
      {isPostScreen ? (
        <Text style={{color: Colors.GRAY, fontSize: 16, fontWeight: 'bold'}}>
          Post
        </Text>
      ) : (
        <Image
          source={Images.IMG.CHAT}
          style={{height: hp(3), width: wp(6.5)}}
        />
      )}
    </TouchableOpacity>
  </View>
);

export default HeaderOptions;
