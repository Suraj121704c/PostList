import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screens from './Utils/Screens';
import Profile from './Screens/Profile';
import Home from './Screens/Home';
import Job from './Screens/Job';
import Notification from './Screens/Notification';
import Colors from './Utils/Colors';
import {Image, StatusBar} from 'react-native';
import CustomIcon from './Components/CustomIcon';
import HeaderOptions from './Components/HeaderOptions';
import Creator from './Screens/Creator';
import Comments from './Screens/comments';
import Images from './Utils/Images';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const JobStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();

const HomeScreen = () => (
  <HomeStack.Navigator screenOptions={{headerShown: false}}>
    <HomeStack.Screen name={Screens.HOME} component={Home} />
    <HomeStack.Screen name={Screens.PROFILE} component={Profile} />
    <HomeStack.Screen name={Screens.COMMENT} component={Comments} />
    <HomeStack.Screen name={Screens.CREATOR} component={Creator} />
  </HomeStack.Navigator>
);

const JobScreen = () => (
  <JobStack.Navigator screenOptions={{headerShown: false}}>
    <JobStack.Screen name={Screens.JOB} component={Job} />
  </JobStack.Navigator>
);

const NotificationScreen = () => (
  <NotificationStack.Navigator screenOptions={{headerShown: false}}>
    <NotificationStack.Screen
      name={Screens.NOTIFICATION}
      component={Notification}
    />
  </NotificationStack.Navigator>
);

const showTabBar = route => {
  const routeName = getFocusedRouteNameFromRoute(route);
  return routeName == Screens.PROFILE ? 'none' : 'flex';
};

const header = (
  navigation,
  route,
  icon,
  title,
  iconLeft = '',
  isPostScreen = false,
  isNotificationScreen = false,
) => ({
  title: title,
  tabBarStyle: {display: showTabBar(route)},
  tabBarBadge: isNotificationScreen ? 5 : null,
  tabBarIcon: ({focused}) => <Image source={icon} />,
  header: () => (
    <HeaderOptions
      iconLeft={iconLeft}
      navigation={navigation}
      isPostScreen={isPostScreen}
    />
  ),
});

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.BLACK,
          tabBarInactiveTintColor: Colors.GRAY,
          tabBarLabelStyle: {fontWeight: 'bold'},
          headerStyle: {elevation: 10},
        }}>
        <Tab.Screen
          name={Screens.HOME_STACK}
          component={HomeScreen}
          options={({navigation, route}) =>
            header(navigation, route, Images.ROUTES.ROUTE1, 'Home')
          }
        />
        <Tab.Screen
          name={Screens.NOTIFICATION_STACK}
          component={NotificationScreen}
          options={({navigation, route}) =>
            header(
              navigation,
              route,
              Images.ROUTES.ROUTE2,
              'Notifications',
              '',
              false,
              true,
            )
          }
        />
        {/* <Tab.Screen
          name={Screens.JOB_STACK}
          component={JobScreen}
          options={({navigation, route}) =>
            header(navigation, route, Images.ROUTES.ROUTE3, 'Jobs')
          }
        /> */}
        {/* <Tab.Screen
          name={Screens.COMMENT}
          component={CommentScreen}
          options={({navigation, route}) => {
            header(navigation, route, 'comments', 'comment');
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
