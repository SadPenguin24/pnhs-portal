// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

import Layout from './redux/screens/Layout';
import RequireAuth from './redux/screens/RequireAuth';

//css is rough change when finalizing
export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<LoginScreen />} />

        {/*Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/register" element={<RegisterScreen />} />
          <Route index element={<ProfileScreen />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
