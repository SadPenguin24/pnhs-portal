// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  ThemeProvider,
  createTheme,
  PaletteMode,
  Container,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
const ColorModeContext = React.createContext({
  toggleColorMode: () => {
    // This is intentional
  },
});

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
          type: 'dark',
          primary: {
            main: '#66bb6a',
          },
          secondary: {
            main: '#ffcc80',
          },
          background: {
            default: '#303030',
            paper: '#424242',
          },
        }
      : {
          type: 'light',
          primary: {
            main: '#388e3c',
          },
          secondary: {
            main: '#ffcc80',
          },
        }),
  },
});

export function App() {
  const [mode, setMode] = useState<PaletteMode>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main">
          <Routes>
            <Route path="/register" element={<RegisterScreen />} />

            <Route path="/" element={<LoginScreen />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
