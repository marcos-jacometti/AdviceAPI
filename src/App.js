import React, { useState } from 'react';
import Header from './core/components/header';
import { GlobalStyle } from './core/styles/global';
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./core/styles/toggle/dark";
import { lightTheme } from "./core/styles/toggle/light";
import themeContext from './core/assets/styles/theme';

function App (){
  const [mode, setMode] = useState(false);
  return (
    <themeContext.Provider value={[mode, setMode]}>
      <ThemeProvider theme={mode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header />
      </ThemeProvider>
    </themeContext.Provider>
  )
}

export default App;