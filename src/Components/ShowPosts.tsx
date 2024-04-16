import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// user defined imports
import Colors from '../Utils/Colors';
import {deviceWidth} from './Dimensions';
import Images from '../Utils/Images';
import Styles from '../Utils/Styles';
import {useNavigation} from '@react-navigation/native';
import Screens from '../Utils/Screens';

export default function ShowPosts({item}: any) {
  const navigation = useNavigation<any>();
  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        marginVertical: 5,
        paddingVertical: 10,
      }}>
      <View style={Styles.flexCenter}>
        <TouchableOpacity onPress={() => navigation.navigate(Screens.CREATOR)}>
          <Image
            source={item.profile_picture}
            style={{
              height: hp(5.8),
              width: wp(12.6),
              borderRadius: wp(4),
              marginHorizontal: hp(1),
            }}
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={Styles.flexCenter}
            onPress={() => navigation.navigate(Screens.CREATOR)}>
            <Text
              style={{
                fontSize: hp(2),
                color: Colors.BLACK,
                fontWeight: 'bold',
              }}>
              {item.name}
            </Text>
            {item.connection ? (
              <Text style={{fontWeight: 'bold'}}>{item.connection}</Text>
            ) : null}
          </TouchableOpacity>
          <Text style={{width: wp(100)}} numberOfLines={1} ellipsizeMode="tail">
            {item.title}
          </Text>
          <Text style={{fontSize: hp(2)}}>{item.timeAgo} hr</Text>
        </View>
        {item.connection ? (
          <TouchableOpacity
            onPress={() => {}}
            style={{width: 80, alignItems: 'flex-end'}}></TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => {}} style={Styles.flexCenter}>
            <Text
              style={{
                fontSize: 19,
                fontWeight: 'bold',
                color: Colors.BLUE,
                marginLeft: 5,
              }}>
              Follow
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {item.content ? (
        <Text
          style={{
            paddingHorizontal: 16,
            color: Colors.BLACK,
            marginVertical: 10,
            textAlign: 'justify',
          }}
          numberOfLines={3}
          ellipsizeMode="tail">
          {item.content}
        </Text>
      ) : (
        <View style={{marginTop: 10}} />
      )}

      {item.hasImage ? (
        <Image
          source={item.postImage}
          style={{height: hp(25), width: deviceWidth}}
        />
      ) : null}

      <View
        style={[
          Styles.flexCenter,
          {
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingTop: 5,
          },
        ]}>
        <View style={Styles.flexCenter}>
          <Image
            style={{height: 25, width: 25, borderRadius: 100}}
            source={Images.LIKE}
          />
          <Text>{item.likes} likes</Text>
        </View>
        <View style={Styles.flexCenter}>
          {item.comments > 0 ? <Text>{item.comments} comments</Text> : null}
          {/* {item.comments > 0 && item.shares > 0 ? (
            <Icon name="dot-single" size={16} color={Colors.GRAY} />
          ) : null} */}
        </View>
      </View>

      <View
        style={{
          borderTopColor: Colors.LIGHT_GRAY,
          borderTopWidth: 1,
          margin: 10,
        }}
      />

      <View
        style={[
          Styles.flexCenter,
          {
            justifyContent: 'space-between',
            paddingHorizontal: 40,
          },
        ]}>
        <TouchableOpacity onPress={() => {}} style={{alignItems: 'center'}}>
          <Image
            source={Images.IMG.LIKE}
            style={{height: hp(3.3), width: wp(7)}}
          />
          <Text style={{color: Colors.BLUE}}>Like</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => {
            navigation.navigate(Screens.COMMENT);
          }}>
          <Image
            source={Images.IMG.CHAT}
            style={{height: hp(3.3), width: wp(7)}}
          />
          <Text style={{color: Colors.BLUE}}>comment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {}}>
          <Image
            source={Images.IMG.SEND}
            style={{height: hp(3.3), width: wp(7)}}
          />
          <Text style={{color: Colors.BLUE}}>share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}