import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// user defined imports
import * as ProfileData from '../Data/Profile';
import SectionHeading from '../Components/SectionHeading';
import ShowEducation from '../Components/Profile/ShowEducation';
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
        <View
          style={{marginTop: -45, paddingHorizontal: 10, marginBottom: hp(2)}}>
          <Text style={{fontSize: 28, color: Colors.BLACK, fontWeight: 'bold'}}>
            {id_data[0]?.username}
          </Text>
          <Text style={{color: Colors.BLACK, fontSize: 16}}>
            {id_data[0]?.name}
          </Text>
          <Text
            style={{
              marginTop: hp(1),
              marginBottom: hp(1),
              color: Colors.BLACK,
            }}>
            Email - {id_data[0]?.email}
          </Text>
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
          <Heading title="Company Details" />
        </View>

        <Text
          style={{color: Colors.BLACK, fontSize: 15, textAlign: 'justify'}}
          ellipsizeMode="tail">
          {id_data[0]?.company_details}
        </Text>

        <Text
          style={{color: Colors.BLACK, fontSize: 15, textAlign: 'justify'}}
          ellipsizeMode="tail">
          Website Link : {id_data[0]?.website}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Creator;
