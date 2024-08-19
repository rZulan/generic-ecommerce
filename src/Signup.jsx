import { Button, Divider, Link, Paper, TextField, Typography } from "@mui/material"
import EcommerceLogo from './assets/e-commercelogo.png'

const Signup = () => {
  return (
    <>
    <div className="pt-5 pl-5 pb-5 w-2/3 m-auto">
      <Typography variant="h5">E-commerce Sign Up</Typography>
    </div>

    <div className="flex justify-center bg-slate-400 h-fit">
      <img src={EcommerceLogo} alt="e-commerce logo" />
      <Paper className="w-96 mt-10 mb-10 pt-5 pl-5 pr-5 h-fit">
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
            <Button variant="outlined" fullWidth><Typography>Facebook</Typography></Button>
            <Button variant="outlined" fullWidth><Typography>Google</Typography></Button>
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