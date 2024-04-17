import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// user defined imports
import {deviceWidth} from '../Components/Dimensions';
import Images from '../Utils/Images';
import {useNavigation, useRoute} from '@react-navigation/native';
import Styles from '../Utils/Styles';
import Colors from '../Utils/Colors';
import Screens from '../Utils/Screens';
import {useDispatch, useSelector} from 'react-redux';
import {postActionById} from '../Redux/Actions/postAction';

const Comments = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const [Comments, SetComments] = useState<any>([
    {
      id: 1,
      commentValue:
        'In commodo eu nulla duis adipisicing proident Lorem qui incididunt',
    },
  ]);
  const [commentValue, setCommentValue] = useState('');
  const InputRef = useRef<any>();
  const route = useRoute<any>();
  const {id} = route?.params;
  const {data, loading, error, id_data} = useSelector(
    (state: any) => state.postReducer,
  );

  const item = {
    profile_picture: Images.USERS.USER1,
    name: 'Asma Punia',
    title: 'SDE-1 @Google || Full Stack Developer',
    timeAgo: 2,
    connection: '1st',
    content:
      'In commodo eu nulla duis adipisicing proident Lorem qui incididunt est nulla magna officia. Minim voluptate adipisicing esse dolor proident cupidatat nostrud. Veniam consectetur adipisicing do reprehenderit esse elit commodo sit veniam. Cupidatat deserunt ipsum deserunt cupidatat sint occaecat irure minim. Veniam id reprehenderit quis anim Lorem ipsum. Proident pariatur laborum est proident ea culpa occaecat sunt ullamco. Nisi est sint laboris mollit nisi tempor.',
    hasImage: true,
    postImage: Images.POSTS.POST1,
    shares: 5,
    comments: 10,
    likes: 156,
  };

  const AddToComments = () => {
    let temp = {
      id: GenerateUniqueID(),
      commentValue: commentValue,
    };
    SetComments([...Comments, temp]);
    InputRef.current.clear();
  };

  const GenerateUniqueID = () => {
    return Math.floor(Math.random() * Date.now()).toString();
  };

  useEffect(() => {
    dispatch(postActionById(id));
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.WHITE,
        marginVertical: 5,
        paddingVertical: 10,
      }}>
      <ScrollView>
        <View style={Styles.flexCenter}>
          <TouchableOpacity
            onPress={() => navigation.navigate(Screens.CREATOR)}>
            <Image
              source={{uri: id_data[0]?.profile_picture}}
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
                {id_data[0]?.name}
              </Text>
              {item.connection ? (
                <Text style={{fontWeight: 'bold'}}>
                  {id_data[0]?.connection}
                </Text>
              ) : null}
            </TouchableOpacity>
            <Text style={{width: 180}} numberOfLines={1} ellipsizeMode="tail">
              {id_data[0]?.title}
            </Text>
            <Text style={{fontSize: 11}}>{id_data[0]?.timeAgo} hr</Text>
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

        {id_data[0]?.content ? (
          <Text
            style={{
              paddingHorizontal: 16,
              color: Colors.BLACK,
              marginVertical: 10,
              textAlign: 'justify',
            }}
            numberOfLines={3}
            ellipsizeMode="tail">
            {id_data[0]?.content}
          </Text>
        ) : (
          <View style={{marginTop: 10}} />
        )}

        {id_data[0]?.postImage ? (
          <Image
            source={{uri: id_data[0]?.postImage}}
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
            <Text>{id_data[0]?.likes} likes</Text>
          </View>
          <View style={Styles.flexCenter}>
            {item.comments > 0 ? (
              <Text>{id_data[0]?.comments} comments</Text>
            ) : null}
          </View>
        </View>

        <View
          style={{
            marginTop: hp(3),
            flex: 1,
            alignItems: 'center',
          }}>
          <Text style={{color: '#000', fontSize: hp(2.3)}}>
            Comment Your Opinion
          </Text>
          <View style={styles.comment_container}>
            <TextInput
              style={styles.input_txt}
              onChangeText={text => setCommentValue(text)}
              placeholder="type something ..."
              ref={InputRef}
            />
            <TouchableOpacity
              onPress={() => AddToComments()}
              style={{
                backgroundColor: '#2c67f2',
                padding: wp(3),
                borderRadius: wp(3),
                margin: hp(1),
              }}>
              <Text style={{color: '#fff'}}>Comment</Text>
            </TouchableOpacity>
          </View>

          {Comments.map((c: any) => (
            <View style={styles.showComment_container} key={c.id}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={Images.IMG.ADMIN}
                  style={{height: hp(3), width: wp(6)}}
                />
                <Text
                  style={{fontSize: hp(2), marginLeft: wp(2), color: 'blue'}}>
                  xyz@gmail.com
                </Text>
              </View>
              <Text style={{color: '#000', marginTop: hp(1)}}>
                {c.commentValue}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginTop: hp(2),
                }}>
                <TouchableOpacity>
                  <Text style={{color: '#a55233'}}>Reply</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  comment_container: {
    width: wp(100),
    minHeight: hp(6),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2),
    marginBottom: hp(2),
  },
  input_txt: {
    width: wp(70),
    borderWidth: wp(0.2),
    borderColor: '#000000',
    padding: wp(2),
    borderRadius: wp(2),
  },
  showComment_container: {
    width: wp(80),
    minHeight: hp(6),
    backgroundColor: '#f2f2f2',
    marginTop: hp(1),
    padding: wp(3),
    borderRadius: wp(3),
  },
});
