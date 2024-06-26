import React, {useEffect, useState} from 'react';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// user defined imports
import Screens from '../Utils/Screens';
import Home from '../Screens/Home';
import Colors from '../Utils/Colors';
import {Button, Image, StatusBar} from 'react-native';
import HeaderOptions from '../Components/HeaderOptions';
import Creator from '../Screens/Creator';
import Comments from '../Screens/comments';
import Images from '../Utils/Images';
import {useDispatch} from 'react-redux';
import {searchAction} from '../Redux/Actions/postAction';
import Create from '../Screens/Create';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();

const HomeScreen = () => (
  <HomeStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName={Screens.HOME}>
    <HomeStack.Screen name={Screens.HOME} component={Home} />
    <HomeStack.Screen name={Screens.COMMENT} component={Comments} />
    <HomeStack.Screen name={Screens.CREATOR} component={Creator} />
    <NotificationStack.Screen name={Screens.CREATE} component={Create} />
  </HomeStack.Navigator>
);

const NotificationScreen = () => (
  <NotificationStack.Navigator screenOptions={{headerShown: false}}>
    <NotificationStack.Screen name={Screens.CREATE} component={Create} />
  </NotificationStack.Navigator>
);

const showTabBar = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  return routeName == Screens.PROFILE ? 'none' : 'flex';
};

export default function Routes() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch<any>();

  const handleSearchTextChange = (text: any) => {
    setSearch(text);
  };

  const handleSearchSubmit = () => {
    dispatch(searchAction(search));
  };

  const header = (
    navigation: any,
    route: any,
    icon: any,
    title: any,
    iconLeft = '',
    isPostScreen = false,
    isNotificationScreen = false,
  ) => ({
    title: title,
    tabBarStyle: {display: showTabBar(route)},
    tabBarBadge: isNotificationScreen ? 5 : null,
    tabBarIcon: ({focused}: any) => (
      <Image source={icon} style={{height: hp(3.1), width: wp(6.6)}} />
    ),
    header: () => (
      <HeaderOptions
        iconLeft={iconLeft}
        navigation={navigation}
        isPostScreen={isPostScreen}
        handleSearchTextChange={handleSearchTextChange}
        search={search}
        handleSearchSubmit={handleSearchSubmit}
      />
    ),
  });

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.BLACK,
          tabBarInactiveTintColor: Colors.GRAY,
          tabBarLabelStyle: {fontWeight: 'bold'},
          headerStyle: {elevation: hp(2)},
        }}>
        <Tab.Screen
          name={Screens.HOME_STACK}
          component={HomeScreen}
          options={({navigation, route}): any =>
            header(navigation, route, Images.ROUTES.ROUTE1, 'Home')
          }
        />
        <Tab.Screen
          name={Screens.NOTIFICATION}
          component={NotificationScreen}
          options={({navigation, route}): any =>
            header(navigation, route, Images.IMG.EDIT, 'Create')
          }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
