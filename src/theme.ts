// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "system",
};

// 3. extend the theme
const theme = extendTheme({
  config,
  colors: {
    white: "#EDF2F7",
    gray: {
      100: "#E2E8F0",
      200: "#CBD5E0",
      300: "#A0AEC0",
      400: "#718096",
      500: "#4A5568",
      600: "#2D3748",
      700: "#1A202C",
      800: "#171923",
      900: "#1A202C",
    },
  },
});

export default theme;
