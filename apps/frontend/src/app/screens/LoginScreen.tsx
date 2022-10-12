import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { setCookie } from 'cookies-next';

import { setCredentials } from '../redux/slice/authSlice';

import {
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useLoginMutation } from '../redux/slice/authApiSlice.js';

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
    <Box
      sx={{
        my: 8,
        mx: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      maxWidth="xs"
    >
      <Avatar sx={{ m: 1, bgcolor: '#388e3c' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <Box
        component="form"
        sx={{ mt: 1 }}
        onSubmit={onSubmitHandler}
        noValidate
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
          color="primary"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => onSubmitHandler}
        >
          Sign in
        </Button>
        <Grid container>
          <Link href="#" variant="body2" color="primary">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2" color="primary">
            Don't have and account? Sign Up
          </Link>
        </Grid>
      </Box>
    </Box>
  );
}

export default LoginScreen;
