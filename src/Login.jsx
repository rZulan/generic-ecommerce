import { Button, Divider, IconButton, InputAdornment, Link, Paper, TextField, Typography } from "@mui/material"
import EcommerceLogo from './assets/e-commercelogo.png'
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
    
      <div className="flex pt-5 pl-5 pb-5 w-2/3 m-auto">
        <div className="-mb-10 -mt-5 -mr-3">
          <img className="size-20" src={EcommerceLogo} alt="e-commerce logo" />
        </div>
        <Typography variant="h5">E-commerce Login</Typography>
      </div>

      <div className="flex justify-center bg-slate-400 h-150">
        <img className="mr-16" src={EcommerceLogo} alt="e-commerce logo" />
        <Paper className="w-96 mt-10 mb-10 pt-5 pl-5 pr-5 h-fit ">
          <Typography variant="h6" className="flex pb-5 justify-center">Login</Typography>
          <div className="flex flex-col gap-7">
            <TextField 
            label='Username / Email / Phone Number'
            size="small"
            fullWidth
            />
          
            <TextField 
            label='Password'
            size="small"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            />

            <Button variant="contained">LOG IN</Button>
            <div className="flex justify-between -mt-7">
              <Link><Typography variant="caption">Forgot Password?</Typography></Link>
              <Link><Typography variant="caption">Log In with Phone Number</Typography></Link>
            </div>

            <Divider><Typography variant="caption" sx={{color:'gray'}}>OR</Typography></Divider>

            <div className="flex justify-between gap-5 -mt-4">
              <Button variant="outlined" fullWidth><Typography><FacebookIcon color="primary"/>Facebook</Typography></Button>
              <Button variant="outlined" fullWidth><Typography><GoogleIcon />Google</Typography></Button>
            </div>
            
            <div className="flex justify-between text-center">
              <Typography variant="caption">By signing up, you agree to E-Commerce's <Link>Terms of Service</Link> & <Link>Privacy Policy</Link></Typography>
            </div>

            <Typography color={"gray"} sx={{display: 'flex',justifyContent:'center', paddingBottom: 3}} variant="body">New to E-Commerce? <Link href='/signup'>Sign Up</Link></Typography>
          </div>
        </Paper>

        <div className="flex flex-wrap h-16 bg-sky-950 mt-10 fixed bottom-0 w-full">
          <div className="pl-10 pt-5">
            <Typography color={'white'}>© 2024 Zulan Productions</Typography>
          </div>

          <div className="flex flex-1 justify-end gap-9 pr-10">
            <div className="pl-5 pt-5">
              <Link>
                <Typography color={'white'}>Terms and Conditions</Typography>
              </Link>
            </div>
            <div className="pl-5 pt-5">
              <Link>
                <Typography color={'white'}>Privacy Policy</Typography>
              </Link>
        </div>
			</div>
			</div>
      </div>
    </>
  )
}

export default Login