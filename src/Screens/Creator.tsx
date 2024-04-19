import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// user defined imports
import * as ProfileData from '../Data/Profile';
import SectionHeading from '../Components/SectionHeading';
import ShowExperience from '../Components/Profile/ShowExperience';
import ShowAllFooter from '../Components/ShowAllFooter';
import ShowEducation from '../Components/Profile/ShowEducation';
import ShowLicenses from '../Components/Profile/ShowLicenses';
import ShowCourses from '../Components/Profile/ShowCourses';
import ShowProjects from '../Components/Profile/ShowProjects';
import Colors from '../Utils/Colors';
import Styles from '../Utils/Styles';
import Heading from '../Components/Heading';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {postActionById} from '../Redux/Actions/postAction';
import {Loader} from '../Components/Loader';

const Creator = () => {
  const DATA = ProfileData.default;
  const dispatch = useDispatch<any>();
  const route = useRoute<any>();
  const {id} = route?.params;
  const {data, loading, error, id_data} = useSelector(
    (state: any) => state.postReducer,
  );

  useEffect(() => {
    dispatch(postActionById(id));
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor: Colors.WHITE, marginBottom: 10}}>
        <Image source={DATA.INFO.banner} style={{width: '100%', height: 100}} />
        <Image
          source={{uri: id_data[0]?.profile_picture}}
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            borderColor: Colors.WHITE,
            bottom: 50,
            left: 15,
          }}
        />
        <View style={{marginTop: -45, paddingHorizontal: 10 , marginBottom : hp(2)}}>
          <Text style={{fontSize: 28, color: Colors.BLACK, fontWeight: 'bold'}}>
            {id_data[0]?.name}
          </Text>
          <Text style={{color: Colors.BLACK, fontSize: 16}}>
            {id_data[0]?.title}
          </Text>
          <Text style={{marginTop: 4, marginBottom: 10}}>
            Talks about - {DATA.INFO.talksAbout.map(item => `${item} `)}
          </Text>
          <View style={Styles.flexCenter}>
            <Text
              style={{color: Colors.BLUE, fontSize: 15, fontWeight: 'bold'}}>
              {DATA.INFO.followers} followers
            </Text>
            <Text
              style={{color: Colors.BLUE, fontSize: 15, fontWeight: 'bold'}}>
              {DATA.INFO.connections > 500 ? '500+' : DATA.INFO.connections}{' '}
              connections
            </Text>
          </View>
        </View>
{/* 
        <View
          style={[
            Styles.flexCenter,
            {
              marginVertical: 16,
              justifyContent: 'space-evenly',
            },
          ]}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: Colors.BLUE,
              borderRadius: 50,
              width: 140,
              paddingVertical: 5,
              alignItems: 'center',
            }}>
            <Text style={{color: Colors.WHITE, fontSize: 19}}>Open to</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderWidth: 1,
              borderColor: Colors.GRAY,
              borderRadius: 50,
              width: 140,
              paddingVertical: 5,
              alignItems: 'center',
            }}>
            <Text style={{color: Colors.GRAY, fontSize: 19}}>Add Section</Text>
          </TouchableOpacity>
        </View> */}
      </View>

      <View
        style={{backgroundColor: Colors.WHITE, marginBottom: 10, padding: 10}}>
        <View
          style={[
            Styles.flexCenter,
            {
              justifyContent: 'space-between',
              marginBottom: 14,
            },
          ]}>
          <Heading title="About" />
        </View>

        <Text
          style={{color: Colors.BLACK, fontSize: 15, textAlign: 'justify'}}
          ellipsizeMode="tail">
          {DATA.ABOUT}
        </Text>
      </View>

      <View style={Styles.container}>
        <SectionHeading title="Education" />
        <ShowEducation DATA={DATA} />
      </View>
    </ScrollView>
  );
};

export default Creator;
