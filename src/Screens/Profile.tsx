import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// user defined imports
import * as ProfileData from '../Data/Profile';
import Colors from '../Utils/Colors';
import Heading from '../Components/Heading';
import ShowAllFooter from '../Components/ShowAllFooter';
import SectionHeading from '../Components/SectionHeading';
import ShowCourses from '../Components/Profile/ShowCourses';
import ShowProjects from '../Components/Profile/ShowProjects';
import ShowSkills from '../Components/Profile/ShowSkills';
import ShowLicenses from '../Components/Profile/ShowLicenses';
import ShowEducation from '../Components/Profile/ShowEducation';
import ShowExperience from '../Components/Profile/ShowExperience';
import Styles from '../Utils/Styles';

export default function Profile() {
  const DATA = ProfileData.default;

  const Analytics = ({title, subTitle, icon}: any) => (
    <View style={[Styles.flexCenter, {paddingVertical: hp(2)}]}>
      <View>
        <Text
          style={{fontSize: hp(2), fontWeight: 'bold', color: Colors.BLACK}}>
          {title}
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{color: Colors.LIGHT_BLACK}}>{subTitle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor: Colors.WHITE, marginBottom: hp(2)}}>
        <Image
          source={DATA.INFO.banner}
          style={{width: wp(100), height: hp(10)}}
        />
        <Image
          source={DATA.INFO.profile_picture}
          style={{
            height: hp(10),
            width: hp(10),
            borderRadius: hp(5),
            borderColor: Colors.WHITE,
            bottom: 50,
            left: 15,
          }}
        />
        <View style={{marginTop: -hp(5), paddingHorizontal: hp(2)}}>
          <Text style={{fontSize: 28, color: Colors.BLACK, fontWeight: 'bold'}}>
            {DATA.INFO.name}
          </Text>
          <Text style={{color: Colors.BLACK, fontSize: hp(2)}}>
            {DATA.INFO.bio}
          </Text>
          <Text style={{marginTop: hp(1), marginBottom: hp(2)}}>
            Talks about - {DATA.INFO.talksAbout.map(item => `${item} `)}
          </Text>
          <View style={Styles.flexCenter}>
            <Text
              style={{color: Colors.BLUE, fontSize: hp(2), fontWeight: 'bold'}}>
              {DATA.INFO.followers} followers
            </Text>
            <Text
              style={{
                color: Colors.BLUE,
                fontSize: hp(2),
                fontWeight: 'bold',
                marginLeft: wp(5),
              }}>
              {DATA.INFO.connections > 500 ? '500+' : DATA.INFO.connections}{' '}
              connections
            </Text>
          </View>
        </View>

        <View
          style={[
            Styles.flexCenter,
            {
              marginVertical: hp(2),
              justifyContent: 'space-evenly',
            },
          ]}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: Colors.BLUE,
              borderRadius: wp(2),
              width: wp(40),
              paddingVertical: hp(1),
              alignItems: 'center',
            }}>
            <Text style={{color: Colors.WHITE, fontSize: hp(2.2)}}>
              Open to
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderWidth: wp(0.2),
              borderColor: Colors.GRAY,
              borderRadius: wp(2),
              width: wp(40),
              paddingVertical: hp(1),
              alignItems: 'center',
            }}>
            <Text style={{color: Colors.GRAY, fontSize: hp(2.2)}}>
              Add Section
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          backgroundColor: Colors.WHITE,
          marginBottom: hp(2),
          padding: wp(2),
        }}>
        <Heading title="Analytics" />
        <View style={Styles.flexCenter}>
          <Text> Private to you</Text>
        </View>
        <Analytics
          icon="people"
          title={`${DATA.ANALYTICS.profile_views} profile views`}
          subTitle="Discover who's viewed your profile"
        />
        <Analytics
          icon="bar-chart"
          title={`${DATA.ANALYTICS.post_impressions} post impressions`}
          subTitle="Check out who's engaing with your posts"
        />
        <Analytics
          icon="search"
          title={`${DATA.ANALYTICS.search_appearence} search appearences`}
          subTitle="See how often you appear in search results"
        />
      </View>

      <View
        style={{
          backgroundColor: Colors.WHITE,
          marginBottom: hp(1.5),
          padding: wp(1.5),
        }}>
        <View
          style={[
            Styles.flexCenter,
            {
              justifyContent: 'space-between',
              marginBottom: hp(2),
            },
          ]}>
          <Heading title="About" />
        </View>

        <Text
          style={{color: Colors.BLACK, fontSize: hp(1.9), textAlign: 'justify'}}
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

      <View style={Styles.container}>
        <SectionHeading title="Licenses & Certifications" />
        <ShowLicenses DATA={DATA} />
      </View>

      <View style={Styles.container}>
        <SectionHeading title="Skills" />
        <ShowSkills DATA={DATA} />
      </View>

      <View style={Styles.container}>
        <SectionHeading title="Courses" />
        <ShowCourses DATA={DATA} />
      </View>

      <View style={Styles.container}>
        <SectionHeading title="Projects" />
        <ShowProjects DATA={DATA} />
      </View>
    </ScrollView>
  );
}
