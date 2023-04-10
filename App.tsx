import theme from "./src/global/styles/theme";
import { ThemeProvider } from "styled-components";

import Home from "./src/screens/home";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
