import {StyleSheet, TouchableOpacity, useColorScheme} from 'react-native';
import {Colors} from '../../theme/colors';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

function BottomSheet({isOpen, toggleSheet, duration = 500, children}) {
  const {colorScheme = 'light'} = useColorScheme();
  const height = useSharedValue(0);
  const progress = useDerivedValue(() =>
    withTiming(isOpen.value ? 0 : 1, {duration}),
  );

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{translateY: progress.value * 2 * height.value}],
  }));

  const backgroundColorSheetStyle = {
    backgroundColor: colorScheme === 'light' ? '#f1f1f1' : '#272B3C',
  };

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    zIndex: isOpen.value
      ? 1
      : withDelay(duration, withTiming(-1, {duration: 0})),
  }));

  return (
    <>
      <Animated.View style={[sheetStyles.backdrop, backdropStyle]}>
        <TouchableOpacity onPress={toggleSheet} />
      </Animated.View>

      <Animated.View
        onLayout={e => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={[sheetStyles.sheet, sheetStyle, backgroundColorSheetStyle]}>
        {children}
      </Animated.View>
    </>
  );
}

const sheetStyles = StyleSheet.create({
  sheet: {
    padding: 16,
    paddingHorizontal: 32,
    height: 160,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 2,
    borderRightWidth: 0.3,
    borderLeftWidth: 0.3,
    borderColor: Colors.BUTTON_COLOR,
  },
  backdrop: Object.assign(Object.assign({}, StyleSheet.absoluteFillObject), {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
  }),
});

export default BottomSheet;
