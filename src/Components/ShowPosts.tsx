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
import {useDispatch, useSelector} from 'react-redux';
import {Loader} from './Loader';
import {DeletePostAction} from '../Redux/Actions/postAction';

export default function ShowPosts({item}: any) {
  const navigation = useNavigation<any>();
  const id = item?.id;
  const dispatch = useDispatch<any>();

  const deleteAction = (id: any) => {
    dispatch(DeletePostAction(id));
  };

  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        marginVertical: hp(1),
        paddingVertical: wp(2),
      }}>
      <View style={Styles.flexCenter}>
        <TouchableOpacity
          onPress={() => navigation.navigate(Screens.CREATOR, {id: id})}>
          <Image
            source={{uri: item?.profile_picture}}
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
            onPress={() => navigation.navigate(Screens.CREATOR, {id: id})}>
            <Text
              style={{
                fontSize: hp(2),
                color: Colors.BLACK,
                fontWeight: 'bold',
              }}>
              {item?.username}
            </Text>
          </TouchableOpacity>
          <Text
            style={{width: wp(100), color: '#000'}}
            numberOfLines={1}
            ellipsizeMode="tail">
            {item.title}
          </Text>
        </View>
      </View>

      {item.content ? (
        <TouchableOpacity
          onPress={() => navigation.navigate(Screens.COMMENT, {id: id})}>
          <Text
            style={{
              paddingHorizontal: 16,
              color: Colors.BLACK,
              marginVertical: hp(1),
              textAlign: 'justify',
            }}
            ellipsizeMode="tail">
            {item?.content}
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={{marginTop: 10}} />
      )}

      {item.hasImage && (
        <TouchableOpacity
          onPress={() => navigation.navigate(Screens.COMMENT, {id: id})}>
          <Image
            source={{uri: item?.postImage}}
            style={{height: hp(25), width: deviceWidth}}
          />
        </TouchableOpacity>
      )}

      {/* <View
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
        </View>
      </View> */}

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
            style={{height: hp(2.3), width: wp(5)}}
          />
          <Text style={{color: Colors.BLUE}}>Like</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => {
            navigation.navigate(Screens.COMMENT, {id: id});
          }}>
          <Image
            source={Images.IMG.CHAT}
            style={{height: hp(2.3), width: wp(5)}}
          />
          <Text style={{color: Colors.BLUE}}>comment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => navigation.navigate(Screens.CREATE, {id: id})}>
          <Image
            source={Images.IMG.EDIT}
            style={{height: hp(2.3), width: wp(5)}}
          />
          <Text style={{color: Colors.BLUE}}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => deleteAction(id)}>
          <Image
            source={Images.IMG.DELETE}
            style={{height: hp(2.3), width: wp(5)}}
          />
          <Text style={{color: Colors.BLUE}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
