import React, { useState } from 'react';
import Header from './core/components/header';
import { GlobalStyle } from './core/assets/styles/global';
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./core/assets/styles/toggle/dark";
import { lightTheme } from "./core/assets/styles/toggle/light";
import themeContext from './core/assets/styles/theme';
import Main from './core/components/main';

function App (){
  const [mode, setMode] = useState(false);
  return (
    <themeContext.Provider value={[mode, setMode]}>
      <ThemeProvider theme={mode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header />
        <Main />
      </ThemeProvider>
    </themeContext.Provider>
  )
}

export default App;