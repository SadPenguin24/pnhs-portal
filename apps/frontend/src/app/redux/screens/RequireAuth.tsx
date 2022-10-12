import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { getCookie } from 'cookies-next';
//import { useAppSelector } from '../store';
//import { selectCurrentUser } from '../slice/authSlice';
import NavBar from '../../components/navbar/NavBar';
import Sidebar from '../../components/sidebar/Sidebar';

function RequireAuth() {
  const token = getCookie('access_token');
  //rehydrate if there is a token
  //const user = useAppSelector(selectCurrentUser);
  const location = useLocation();

  const content = token ? (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: '6' }}>
        <NavBar />
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );

  return content;
}

export default RequireAuth;
