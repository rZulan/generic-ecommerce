import { Button, Divider, Link, Paper, TextField, Typography } from "@mui/material"
import EcommerceLogo from './assets/e-commercelogo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const Signup = () => {
  return (
    <>
    <div className="flex pt-5 pl-5 pb-5 w-2/3 m-auto">
    <div className="-mb-10 -mt-5 -mr-3">
          <img className="size-20" src={EcommerceLogo} alt="e-commerce logo" />
        </div>
      <Typography variant="h5">E-commerce Sign Up</Typography>
    </div>

    <div className="flex justify-center bg-slate-400 h-150">
      <img src={EcommerceLogo} alt="e-commerce logo" />
      <Paper className="w-96 mt-32 ml-16 mb-10 pt-5 pl-5 pr-5 h-fit ">
        <Typography variant="h6" className="flex pb-5 justify-center">Sign Up</Typography>
        <div className="flex flex-col gap-7">
          <TextField 
          label='Phone Number'
          size="small"
          fullWidth
          />

          <Button variant="contained">SIGN UP</Button>

          <Divider><Typography variant="caption" sx={{color:'gray'}}>OR</Typography></Divider>

          <div className="flex justify-between gap-5 -mt-4">
            <Button variant="outlined" fullWidth><Typography><FacebookIcon color="primary"/>Facebook</Typography></Button>
            <Button variant="outlined" fullWidth><Typography><GoogleIcon /> Google</Typography></Button>
          </div>
          
          <Typography color={"gray"} sx={{display: 'flex',justifyContent:'center', paddingBottom: 3}}>Already have an account? <Link href='/login'>Log In</Link></Typography>
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

export default Signup