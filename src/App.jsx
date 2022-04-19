import GlobalStyle from "./styles/globals";
import { ThemeProvider } from "styled-components";

import Login from "./Pages/Login";

const theme = {
  colors: {
    primary: '#000',
    secondary: 'blue'
  },
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Login />
      </div>
    </ThemeProvider> 
  );
}
