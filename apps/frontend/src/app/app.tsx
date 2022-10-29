// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

import Layout from './redux/screens/Layout';
import RequireAuth from './redux/screens/RequireAuth';

import './styles/global.scss';

import AdminHomeScreen from './screens/admin/AdminHomeScreen';
import AdminProfileScreen from './screens/admin/AdminProfileScreen';
import AdminEnrollProcessScreen from './screens/admin/AdminEnrollProcessScreen';
import AdminStudentsList from './screens/admin/AdminStudentsList';
import AdminStudentProfile from './screens/admin/AdminStudentProfile';
import AdminFacultyList from './screens/admin/AdminFacultyList';
import AdminStrandEnrollees from './screens/admin/AdminStrandEnrollees';
import AdminStrandStudentList from './screens/admin/AdminStrandStudentList';
import AdminStudentScheduleScreen from './screens/admin/AdminStudentScheduleScreen';
import AdminFacultySchedule from './screens/admin/AdminFacultySchedule';

import StudentHomeScreen from './screens/student/StudentHomeScreen';
import StudentEnrollmentScreen from './screens/student/StudentEnrollmentScreen';
import StudentReportCardScreen from './screens/student/StudentReportCardScreen';
import StudentScheduleScreen from './screens/student/StudentScheduleScreen';
import StudentProfileScreen from './screens/student/StudentProfileScreen';
import FacultyHomeScreen from './screens/faculty/FacultyHomeScreen';
import FacultyScheduleScreen from './screens/faculty/FacultyScheduleScreen';
import FacultyProfileScreen from './screens/faculty/FacultyProfileScreen';
import FacultyGradeScreen from './screens/faculty/FacultyGradeScreen';
import FacultyClassListScreen from './screens/faculty/FacultyClassListScreen';

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
          <Route
            path="/admin/strandstudentlist"
            element={<AdminStrandStudentList />}
          />
          <Route
            path="/admin/studentschedule"
            element={<AdminStudentScheduleScreen />}
          />
          <Route
            path="/admin/facultyschedule"
            element={<AdminFacultySchedule />}
          />

          {/* Student Screens */}
          <Route path="/student/home" element={<StudentHomeScreen />} />
          <Route
            path="/student/enrollment"
            element={<StudentEnrollmentScreen />}
          />
          <Route
            path="/student/reportcard"
            element={<StudentReportCardScreen />}
          />
          <Route path="/student/schedule" element={<StudentScheduleScreen />} />
          <Route path="/student/profile" element={<StudentProfileScreen />} />

          {/* Faculty Screens */}
          <Route path="/faculty/home" element={<FacultyHomeScreen />} />
          <Route path="/faculty/schedule" element={<FacultyScheduleScreen />} />
          <Route path="/faculty/profile" element={<FacultyProfileScreen />} />
          <Route path="/faculty/grademodule" element={<FacultyGradeScreen />} />
          <Route
            path="/faculty/classlist"
            element={<FacultyClassListScreen />}
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
