import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/theme/global";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { AppRoutes } from "./src/routes";

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
      <AppRoutes />
    </ThemeProvider>
  );
}

export default gestureHandlerRootHOC(App);
