import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Props {
  title?: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: object;
  btnTxt?: object;
  icon?: number;
  iconStyle?: object;
  btnStyle?: object;
  disabled?: boolean;
  activeOpacity?: number;
}

const Button = (data: Props) => {
  const {
    title,
    icon,
    onPress,
    activeOpacity,
    disabled,
    style,
    iconStyle,
    btnStyle,
  } = data;

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      disabled={disabled}
      onPress={onPress}
      style={style}>
      {icon && <Image source={icon} style={[styles.icon, iconStyle]} />}
      {title && <Text style={btnStyle}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default Button;

export const styles = StyleSheet.create({
  icon: {
    height: hp(4),
    width: wp(8),
    resizeMode: 'contain',
  },
});
