import './SignUp.scss';
import * as React from 'react';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Logo from '../../Logo/Logo.svg';
import OutlinedInput from '@mui/material/OutlinedInput';
import SideImg from './assets/images/Rectangle 20.png';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import apple from './assets/images/apple.svg';
import facebook from './assets/images/facebook.svg';
import google from './assets/images/google.svg';

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
    phoneNumber: yup.number().required().positive().integer(),
    password: yup.string().required().min(6),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div className="wrapper">
      <div className="img">
        <img src={SideImg} alt="img" />
      </div>
      <div className="sign-up_form">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="text">
          <h1>Sign Up</h1>
          <p>Let’s get you all st up so you can access your personal account.</p>
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            sx={{ width: 308 }}
            {...register('firstName')}
          />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" {...register('lastName')} />
          <p className="validation-error">{errors.firstName?.message}</p>
          <p className="validation-error">{errors.lastName?.message}</p>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: 308 }}
            {...register('email')}
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            {...register('phoneNumber')}
          />
          <p className="validation-error">{errors.email?.message}</p>
          <OutlinedInput
            sx={{ gridColumn: 'span 2' }}
            {...register('password')}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            placeholder="Password"
          />
          <p className="validation-error">{errors.password?.message}</p>
          <p className="validation-error">{errors.confirmPassword?.message}</p>
          <OutlinedInput
            sx={{ gridColumn: 'span 2' }}
            {...register('confirmPassword')}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
            placeholder="Confirm Password"
          />
          <div className="checkbox">
            <Checkbox {...label} defaultChecked />
            <p>
              I agree to all the <span>Terms </span>and <span>Privacy Policies</span>
            </p>
          </div>
          <Stack sx={{ gridColumn: 'span 2' }}>
            <Button
              variant="contained"
              size="large"
              sx={{ background: '#8DD3BB', color: '#112211' }}
              type="submit"
            >
              Create account
            </Button>
          </Stack>
        </form>
        <div className="account">
          <p>
            Already have an account?{' '}
            <Link to="/" className="login">
              Login
            </Link>
          </p>
        </div>
        <div className="two-lines">
          <div className="line"></div>
          <p>Or Sign up with</p>
          <div className="line"></div>
        </div>
        <div className="links">
          <button>
            <img src={facebook} alt="facebook" />
          </button>
          <button>
            <img src={google} alt="facebook" />
          </button>
          <button>
            <img src={apple} alt="facebook" />
          </button>
        </div>
      </div>
    </div>
  );
};
