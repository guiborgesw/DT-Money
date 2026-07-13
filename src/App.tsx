import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Styles/global";
import { defaultTheme } from "./Styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />

    <h1>Hello World</h1>
  </ThemeProvider>
  )
}
