import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';

// user defined imports
import * as ProfileData from '../Data/Profile';
import CustomIcon from '../Components/CustomIcon';
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

const Creator = () => {
  const DATA = ProfileData.default;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor: Colors.WHITE, marginBottom: 10}}>
        <Image source={DATA.INFO.banner} style={{width: '100%', height: 100}} />
        <Image
          source={DATA.INFO.profile_picture}
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            borderColor: Colors.WHITE,
            bottom: 50,
            left: 15,
          }}
        />
        <View style={{marginTop: -45, paddingHorizontal: 10}}>
          <Text style={{fontSize: 28, color: Colors.BLACK, fontWeight: 'bold'}}>
            {DATA.INFO.name}
          </Text>
          <Text style={{color: Colors.BLACK, fontSize: 16}}>
            {DATA.INFO.bio}
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
        </View>
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
          numberOfLines={4}
          ellipsizeMode="tail">
          {DATA.ABOUT}
        </Text>
      </View>

      <View style={Styles.container}>
        <SectionHeading title="Experience" />
        <ShowExperience DATA={DATA} />
        <ShowAllFooter />
      </View>

      <View style={Styles.container}>
        <SectionHeading title="Education" />
        <ShowEducation DATA={DATA} />
      </View>
    </ScrollView>
  );
};

export default Creator;
