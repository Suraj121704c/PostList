import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {deviceWidth} from '../Components/Dimensions';
import Images from '../Utils/Images';
import {useNavigation} from '@react-navigation/native';

const Comments = () => {
  const navigation = useNavigation();
  const [Comments, SetComments] = useState([]);
  const [commentValue, setCommentValue] = useState('');
  const [showComment, setShowComment] = useState(false);
  const InputRef = useRef();

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
    SetComments([...Comments, temp]); // Adds comment to Array
    InputRef.current.clear(); // This clears the TextInput Field
  };

  // Function to Generate a Unique ID for array elements
  const GenerateUniqueID = () => {
    return Math.floor(Math.random() * Date.now()).toString();
  };

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
              <Text style={{fontWeight: 'bold'}}>{item.connection}</Text>
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
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.comment_container}>
          <TextInput
            style={styles.input_txt}
            onChangeText={text => setCommentValue(text)}
            placeholder="type something ..."
            ref={InputRef}
          />
          <Button title="send" onPress={() => AddToComments()} />
        </View>

        {Comments.map(c => (
          <View style={styles.showComment_container} key={c.id}>
            <Text>{c.commentValue}</Text>
          </View>
        ))}
      </View>
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
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 40,
  },
  input_txt: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
  },
  showComment_container: {
    width: '70%',
    minHeight: 50,
    backgroundColor: '#B0C4DE',
    marginTop: 10,
  },
});
