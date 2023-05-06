import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { About } from "../screens/Profile/About";
import { Evolution } from "../screens/Profile/Evolution";
import { Stats } from "../screens/Profile/Stats";

import PokeballSvg from "../assets/svgs/pokeball.svg";
import { theme } from "../theme/global";

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="About"
      screenOptions={{
        tabBarIcon: (props) =>
          props.focused && <PokeballSvg style={{ alignSelf: "center" }} />,
        tabBarContentContainerStyle: {
          backgroundColor: theme.colors.backgroundTypeGrass,
          elevation: 0,
        },
        tabBarStyle: {
          elevation: 0,
        },
        tabBarActiveTintColor: theme.colors.textWhite,
      }}
      style={{ backgroundColor: theme.colors.backgroundTypeGrass }}
      sceneContainerStyle={{
        backgroundColor: theme.colors.backgroundWhite,
        padding: 40,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}
    >
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Stats" component={Stats} />
      <Tab.Screen name="Evolution" component={Evolution} />
    </Tab.Navigator>
  );
};
