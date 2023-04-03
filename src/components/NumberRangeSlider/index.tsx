import { View, Dimensions, TextInput } from "react-native";
import { Container, styles } from "./styles";

import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

type AnimatedGHContext = {
  startX: number;
};

interface INumberRangeSlider {
  minValue: number;
  maxValue: number;
  onValueChange: (range: { min: number; max: number }) => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const sliderWidth = SCREEN_WIDTH - 100;
const MIN = 1;
const MAX = 500;
const STEP = 1;

export const NumberRangeSlider = ({
  minValue,
  maxValue,
  onValueChange,
}: INumberRangeSlider) => {
  const position = useSharedValue(0);
  const position2 = useSharedValue(sliderWidth);
  const zIndex = useSharedValue(0);
  const zIndex2 = useSharedValue(0);

  const leftThumbGestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    AnimatedGHContext
  >({
    onStart: (_, ctx) => {
      ctx.startX = position.value;
    },
    onActive: (e, ctx) => {
      if (ctx.startX + e.translationX < 0) {
        position.value = 0;
      } else if (ctx.startX + e.translationX > position2.value) {
        position.value = position2.value;
        zIndex.value = 1;
        zIndex2.value = 0;
      } else {
        position.value = ctx.startX + e.translationX;
      }
    },
    onEnd: () => {
      runOnJS(onValueChange)({
        min:
          MIN +
          Math.floor(position.value / (sliderWidth / ((MAX - MIN) / STEP))) *
            STEP,
        max:
          MIN +
          Math.floor(position2.value / (sliderWidth / ((MAX - MIN) / STEP))) *
            STEP,
      });
    },
  });

  const rightThumbGestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    AnimatedGHContext
  >({
    onStart: (_, ctx) => {
      ctx.startX = position2.value;
    },
    onActive: (e, ctx) => {
      if (ctx.startX + e.translationX > sliderWidth) {
        position2.value = sliderWidth;
      } else if (ctx.startX + e.translationX < position.value) {
        position2.value = position.value;
        zIndex.value = 0;
        zIndex2.value = 1;
      } else {
        position2.value = ctx.startX + e.translationX;
      }
    },
    onEnd: () => {
      runOnJS(onValueChange)({
        min:
          MIN +
          Math.floor(position.value / (sliderWidth / ((MAX - MIN) / STEP))) *
            STEP,
        max:
          MIN +
          Math.floor(position2.value / (sliderWidth / ((MAX - MIN) / STEP))) *
            STEP,
      });
    },
  });

  const animatedleftThumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
    zIndex: zIndex.value,
  }));
  const animatedRightThumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position2.value }],
    zIndex: zIndex2.value,
  }));

  const sliderStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
    width: position2.value - position.value,
  }));

  const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
  const minLabelText = useAnimatedProps(() => {
    return {
      text: `${
        MIN +
        Math.floor(position.value / (sliderWidth / ((MAX - MIN) / STEP))) * STEP
      }`,
    };
  });
  const maxLabelText = useAnimatedProps(() => {
    return {
      text: `${
        MIN +
        Math.floor(position2.value / (sliderWidth / ((MAX - MIN) / STEP))) *
          STEP
      }`,
    };
  });

  return (
    <Container>
      <View style={styles.sliderBack} />
      <Animated.View style={[styles.sliderFront, sliderStyle]} />
      <PanGestureHandler onGestureEvent={leftThumbGestureHandler}>
        <Animated.View style={[styles.thumb, animatedleftThumbStyle]}>
          <Animated.View style={styles.label}>
            <AnimatedTextInput
              style={styles.labelText}
              defaultValue={`${minValue}`}
              animatedProps={minLabelText}
              editable={false}
            />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
      <PanGestureHandler onGestureEvent={rightThumbGestureHandler}>
        <Animated.View style={[styles.thumb, animatedRightThumbStyle]}>
          <View style={styles.label}>
            <AnimatedTextInput
              style={styles.labelText}
              defaultValue={`${maxValue}`}
              animatedProps={maxLabelText}
              editable={false}
            />
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
};
