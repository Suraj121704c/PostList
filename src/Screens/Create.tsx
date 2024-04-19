import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../Components/Button';
import Images from '../Utils/Images';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {CreatePostAction} from '../Redux/Actions/postAction';

const Create = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch<any>();

  const generateRandomId = () => {
    const timestamp = new Date().getTime();
    const randomString = Math.random().toString(36).substring(7); // Using substring to remove '0.' and taking only the characters after
    return `${timestamp}-${randomString}`;
  };

  const randomId = generateRandomId();

  const [userData, setUserData] = useState({
    id: randomId,
    profile_picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6JPOHWcXuh4vYdBUF-QxVlo0SIKAZ7iARahQliwZK0sfF6jaQsTsJF3s1_oY8xuLPgT8&usqp=CAU',
    name: '',
    title: '',
    timeAgo: 10,
    content: '',
    hasImage: false,
    shares: 5,
    comments: 2,
    likes: 17,
    isLiked: true,
    email: '',
  });

  const addCustomer = () => {
    dispatch(CreatePostAction(userData));
    setUserData({
      id: randomId,
      profile_picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6JPOHWcXuh4vYdBUF-QxVlo0SIKAZ7iARahQliwZK0sfF6jaQsTsJF3s1_oY8xuLPgT8&usqp=CAU',
      name: '',
      title: '',
      timeAgo: 10,
      content: '',
      hasImage: false,
      shares: 5,
      comments: 2,
      likes: 17,
      isLiked: true,
      email: '',
    });
  };

  const handleOnChangeText = (value: any, name: any) => {
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollViewContainer}>
        <View style={styles.userView}>
          <Image source={Images.USERS.USER1} style={styles.userImage} />
        </View>

        <Text style={styles.text}>Name</Text>
        <TextInput
          placeholder="Enter your Name"
          style={styles.textInputStyle}
          onChangeText={(value: string) => {
            handleOnChangeText(value, 'name');
          }}
        />

        <Text style={styles.text}>Content</Text>
        <TextInput
          placeholder="Write Post"
          style={styles.textInputStyle}
          onChangeText={(value: string) => {
            handleOnChangeText(value, 'content');
          }}
          multiline={true}
          numberOfLines={4}
        />

        <Text style={styles.text}>Title</Text>
        <TextInput
          placeholder="Enter Title"
          style={styles.textInputStyle}
          onChangeText={(value: string) => {
            handleOnChangeText(value, 'title');
          }}
        />

        <Text style={styles.text}>Email</Text>
        <TextInput
          placeholder="Enter email"
          style={styles.textInputStyle}
          onChangeText={(value: string) => {
            handleOnChangeText(value, 'email');
          }}
        />
      </ScrollView>
      <Button
        title="Create Post"
        onPress={addCustomer}
        style={styles.buttonStyle}
        btnStyle={styles.btnStyle}
      />
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  userImageView: {
    marginHorizontal: wp(5),
    marginVertical: hp(2),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  userDetailView: {
    marginHorizontal: wp(5),
    marginVertical: hp(2),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  userView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: hp(3),
  },

  userImageDiv: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: hp(15),
    width: hp(15),
  },

  userImage: {
    height: hp(19),
    width: wp(40),
    borderRadius: wp(35),
  },

  usertext: {
    color: '#000',
    fontSize: hp(3),
    fontWeight: '500',
    marginLeft: wp(3),
  },

  scrollViewContainer: {
    marginHorizontal: wp(8),
    flex: 1,
  },

  text2: {
    color: '#000',
    fontSize: hp(1.8),
  },

  textNameStyle: {
    borderWidth: wp(0.1),
    borderRadius: wp(2),
    marginVertical: hp(1),
    paddingHorizontal: wp(5),
    fontSize: hp(1.9),
    height: hp(5),
  },

  textInputStyle: {
    borderWidth: wp(0.1),
    borderRadius: wp(2),
    marginTop: hp(1),
    paddingHorizontal: wp(5),
    fontSize: hp(1.9),
    marginBottom: hp(2),
    height: hp(5),
  },

  textDateStyles: {
    borderWidth: wp(0.1),
    borderRadius: wp(2),
    marginTop: hp(1),
    // padding: wp(3),
    height: hp(5),
    fontSize: hp(1.9),
    marginBottom: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    justifyContent: 'space-between',
  },

  buttonStyle: {
    height: hp(6),
    backgroundColor: 'black',
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp(5),
    marginVertical: hp(1.5),
  },

  text: {
    color: '#000',
    fontSize: hp(1.8),
    alignItems: 'center',
  },

  textstyles: {
    color: 'blue',
    fontSize: hp(2),
    marginTop: hp(1),
    alignItems: 'center',
  },

  insidetext: {
    color: '#000',
    fontSize: hp(2),
    marginTop: hp(1),
    alignItems: 'center',
    minWidth: wp(2),
    maxWidth: wp(63),
  },

  btnStyle: {
    color: '#ffff',
    fontSize: hp(2.5),
  },

  separator: {
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: wp(0.3),
    borderColor: 'lightgray',
    paddingBottom: hp(1.5),
  },

  textNameView: {
    marginLeft: wp(2.3),
    flex: 1,
  },
});
