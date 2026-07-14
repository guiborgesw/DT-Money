import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Styles/global";
import { defaultTheme } from "./Styles/themes/default";
import { Transactions } from "./pages/Transactions";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Transactions />
    </ThemeProvider>
  )
}
