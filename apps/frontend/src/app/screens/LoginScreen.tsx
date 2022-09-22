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
import { useLoginUserMutation } from '../redux/api/authApi';

function LoginScreen() {
  const [loginUser, { isLoading, error, isSuccess }] = useLoginUserMutation();

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log('EMAIL: ', data.get('email'));
    console.log('PASSWORDss: ', data.get('password'));

    //console.log('login handler: ', data);
    const access_token = await loginUser({
      email: data.get('email'),
      password: data.get('password'),
    });
    console.log('TOKEN!: ', JSON.stringify(access_token));
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
