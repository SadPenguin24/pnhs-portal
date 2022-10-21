// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

import AdminHomeScreen from './screens/AdminHomeScreen';

import Layout from './redux/screens/Layout';
import RequireAuth from './redux/screens/RequireAuth';

import './styles/global.scss';
import AdminProfileScreen from './screens/AdminProfileScreen';
import AdminEnrollProcessScreen from './screens/AdminEnrollProcessScreen';
import AdminStudentsList from './screens/AdminStudentsList';
import AdminStudentProfile from './screens/AdminStudentProfile';
import AdminFacultyList from './screens/AdminFacultyList';
import AdminStrandEnrollees from './screens/AdminStrandEnrollees';

//css is rough change when finalizing
export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginScreen />} />

          {/* Admin Screens */}
          <Route path="/admin/home" element={<AdminHomeScreen />} />
          <Route path="/admin/profile" element={<AdminProfileScreen />} />
          <Route path="/admin/enroll" element={<AdminEnrollProcessScreen />} />
          <Route path="/admin/studentlist" element={<AdminStudentsList />} />
          <Route path="/admin/editstudent" element={<AdminStudentProfile />} />
          <Route path="/admin/facultylist" element={<AdminFacultyList />} />
          <Route
            path="/admin/strandenrollees"
            element={<AdminStrandEnrollees />}
          />

          {/*Protected Routes */}
          <Route element={<RequireAuth />}>
            <Route path="/register" element={<RegisterScreen />} />
            <Route index element={<ProfileScreen />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
