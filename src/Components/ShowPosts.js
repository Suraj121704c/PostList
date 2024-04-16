import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import {deviceWidth} from './Dimensions';
import Images from '../Utils/Images';
import Styles from '../Utils/Styles';
import {useNavigation} from '@react-navigation/native';
import Screens from '../Utils/Screens';

export default function ShowPosts({item}) {
  const navigation = useNavigation();
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
              height: 60,
              width: 60,
              borderRadius: 100,
              marginHorizontal: 10,
            }}
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={Styles.flexCenter}
            onPress={() => navigation.navigate(Screens.CREATOR)}>
            <Text
              style={{fontSize: 16, color: Colors.BLACK, fontWeight: 'bold'}}>
              {item.name}
            </Text>
            {item.connection ? (
              <Text style={{fontWeight: 'bold'}}>
                {/* <Icon size={16} name="dot-single" color={Colors.GRAY} /> */}
                {item.connection}
              </Text>
            ) : null}
          </TouchableOpacity>
          <Text style={{width: 180}} numberOfLines={1} ellipsizeMode="tail">
            {item.title}
          </Text>
          <Text style={{fontSize: 11}}>{item.timeAgo} hr</Text>
        </View>
        {item.connection ? (
          <TouchableOpacity
            onPress={() => {}}
            style={{width: 80, alignItems: 'flex-end'}}>
            {/* <Icon name="dots-three-vertical" size={19} color={Colors.GRAY} /> */}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => {}} style={Styles.flexCenter}>
            {/* <Icon name="plus" color={Colors.BLUE} size={22} /> */}
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
          style={{height: 300, width: deviceWidth}}
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
          <Image source={Images.IMG.LIKE} />
          <Text style={{color: item.isLiked ? Colors.BLUE : Colors.GRAY}}>
            Like
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => {
            navigation.navigate(Screens.COMMENT);
          }}>
          <Image source={Images.IMG.CHAT} />
          <Text>comment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {}}>
          <Image source={Images.IMG.SEND} />
          <Text>share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
