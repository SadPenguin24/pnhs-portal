import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { setCookie } from 'cookies-next';

import { setCredentials } from '../redux/slice/authSlice';

import { useLoginMutation } from '../redux/slice/authApiSlice.js';

import '../styles/login.scss';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('EMAIL: ', email);
    console.log('PASSWORDss: ', password);

    try {
      const { user, access_token } = await login({ email, password }).unwrap();
      dispatch(setCredentials({ user, access_token }));
      setCookie('access_token', access_token, {
        sameSite: 'strict',
      });
      console.log('process.env.NEXT_PUBLIC_COOKIE_TIME: ', access_token, {
        sameSite: 'strict',
      });
      setEmail('');
      setPassword('');
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="wrap-center">
      <div className="child-center">
        <img
          className="image"
          src="../../assets/images/pnhs-logo.png"
          alt="pnhs-logo"
        />
        <h1>Welcome to your portal</h1>
        <form>
          <div className="field">
            <label className="label">Email: </label>
            <input className="input" type="text" id="email" name="email" />
          </div>
          <div className="field">
            <label className="label">Password: </label>
            <input
              className="input"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <button>Login</button>
          <button>Reset</button>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
