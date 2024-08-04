import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';  
import { Link } from 'react-router-dom';
import { Avatar, FormGroup, Paper, TextField } from '@mui/material';
import { useState } from 'react';
import EWalletIcon from './assets/eWalletIcon.png'
import BankIcon from './assets/bankIcon.png'
import CODIcon from './assets/cashOnDeliveryIcon.png'


const steps = ['Shipping and Gift Options', 'Payment and Billing', 'Review and Place Order'];

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
		<>
			<div className="flex justify-center h-8 bg-sky-950">
				<div className="pt-1">
					<Typography color={'white'}>Get up to 70% off on selected items!</Typography>
				</div>
			</div>

			<div className="flex flex-wrap">
				<div className='flex flex-1 pt-10 pl-10 gap-5 '>
					<div>
						<Link href="/item" variant="h5">
							<Typography variant="h5">Item</Typography>
						</Link>
					</div>
					<div>
						<Link href="/cart" variant="h5">
							<Typography variant="h5">Cart</Typography>
						</Link></div>
					<div>
						<Link href="/checkout">
							<Typography variant="h5">Checkout</Typography>
						</Link>
					</div>
				</div>

				<div className="flex flex-1 flex-grow justify-center pt-1">
					<Typography variant="h2">Zulan</Typography>
				</div>
				
				<div className="flex flex-1 justify-end pt-8 pr-10">
					<Avatar>A</Avatar>
				</div>
			</div>

			<div className='flex justify-center'>
				<Box sx={{ width: '75%', paddingTop: 10}}>
					<Stepper activeStep={activeStep}>
						{steps.map((label) => {
							const stepProps = {};
							const labelProps = {};
							return (
								<Step key={label} {...stepProps}>
									<StepLabel {...labelProps}>{label}</StepLabel>
								</Step>
							);
						})}
					</Stepper>

					<FormGroup sx={{display: activeStep === 0 ? "" : 'none',  m: 5, gap: 1}}>
						<Typography variant='h4'>Ship to</Typography>
						<TextField 
						name='First Name'
						label='First Name'
						required
						/>
						<TextField 
						name='Last Name'
						label='Last Name'
						required
						/>
						<TextField 
						name='Phone Number'
						label='Phone Number'
						required
						/>
						<TextField 
						name='Email Address'
						label='Email Address'
						required
						/>
						<TextField 
						name='Address'
						label='Address'
						required
						/>
					</FormGroup>

					<FormGroup sx={{display: activeStep === 1 ? "" : 'none',  m: 5, gap: 1}}>
						<Typography variant='h4'>Choose your payment option</Typography>
						<div className='flex flex-wrap gap-2'>
							<Button variant='contained'><img src={EWalletIcon}/><Typography variant='h6' color={'white'}>E-Wallet</Typography></Button>
							<Button variant='contained'><img src={BankIcon}/><Typography variant='h6' color={'white'}>Bank</Typography></Button>
							<Button variant='contained'><img src={CODIcon}/><Typography variant='h6' color={'white'}>Cash on Delivery</Typography></Button>
						</div>
					</FormGroup>

					<FormGroup sx={{display: activeStep === 2 ? "" : 'none',  m: 5, gap: 1}}>
						<Typography variant='h4'>Order Summary</Typography>
						<div className='flex flex-wrap h-96 w-auto bg-slate-400'>
						<Paper elevation={3} />
						</div>	
					</FormGroup>
					
					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Button
							color="inherit"
							disabled={activeStep === 0}
							onClick={handleBack}
							sx={{ mr: 1 }}
						>
							Back
						</Button>
						<Box sx={{ flex: '1 1 auto' }} />
						<Button onClick={handleReset}>Reset</Button>
						<Button onClick={handleNext}>
							{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
						</Button>
					</Box>
				</Box>
			</div>
			
			<div className="flex flex-wrap h-16 bg-sky-950 mt-10">
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
			
		</>
    );
};

export default Checkout;