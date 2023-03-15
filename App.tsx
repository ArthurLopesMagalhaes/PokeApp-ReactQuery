import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Home } from "./src/screens/Home";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/theme/global";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

function App() {
  const [fontsLoaded] = useFonts({
    "SF-Pro-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
    "SF-Pro-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
    "SF-Pro-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default gestureHandlerRootHOC(App);
