import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';  
import { Link } from 'react-router-dom';
import { Divider, FormGroup, List, ListItem, ListItemIcon, Paper, TextField } from '@mui/material';
import { useState } from 'react';
import EWalletIcon from './assets/eWalletIcon.png'
import BankIcon from './assets/bankIcon.png'
import CODIcon from './assets/cashOnDeliveryIcon.png'
import Header from './components/Header';
import NoData from './assets/no data.jpg'


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

			<Header/>

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
						<div className='flex gap-1'>
						<TextField sx={{width: '50%'}}
						name='First Name'
						label='First Name'
						required
						/>
						<TextField sx={{width: '50%'}}
						name='Last Name'
						label='Last Name'
						required
						/>
						</div>
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
						<Paper>
							
								<Typography variant='h5' sx={{paddingTop: 1, paddingLeft: 2}}>Order No. :	9778675645342</Typography>
								
							
							<Divider/>
							<List >
								<ListItem>
									<img src={NoData} className='size-20 rounded-lg'/>
									<div className='flex leading-3 pl-5 w-full'>
										<div className='flex-1'>
											<Typography><b>Item Name</b></Typography>
											<Typography variant='caption' display="block">Item Details • Item Variant </Typography>
										</div>
										<div className='justify-end '>
											<Typography><b>$0</b></Typography>
											<Typography variant='caption'>Qty: 0</Typography>
										</div>
									</div>
								</ListItem>
								<ListItem>
									<img src={NoData} className='size-20 rounded-lg'/>
									<div className='flex leading-3 pl-5 w-full'>
										<div className='flex-1'>
											<Typography><b>Item Name</b></Typography>
											<Typography variant='caption' display="block">Item Details • Item Variant </Typography>
										</div>
										<div className='justify-end '>
											<Typography><b>$0</b></Typography>
											<Typography variant='caption'>Qty: 0</Typography>
										</div>
									</div>
								</ListItem>
								<ListItem>
									<img src={NoData} className='size-20 rounded-lg'/>
									<div className='flex leading-3 pl-5 w-full'>
										<div className='flex-1'>
											<Typography><b>Item Name</b></Typography>
											<Typography variant='caption' display="block">Item Details • Item Variant </Typography>
										</div>
										<div className='justify-end '>
											<Typography><b>$0</b></Typography>
											<Typography variant='caption'>Qty: 0</Typography>
										</div>
									</div>
								</ListItem>
							</List>
							<Divider/>
							<div className='pl-5 pr-5 pb-1'>
								<div className='flex'>
								<Typography className='h-10 pt-2.5 flex-1'><b>Subtotal</b></Typography>
								<Typography className='h-10 pt-2.5'><b>$0</b></Typography>
								</div>
								<Divider/>
								<div className='flex'>
								<Typography className='h-10 pt-2.5 flex-1'><b>Shipping</b></Typography>
								<Typography className='h-10 pt-2.5'><b>$0</b></Typography>
								</div>
								<Divider/>
								<div className='flex'>
								<Typography className='h-10 pt-2.5 flex-1'><b>Total</b></Typography>
								<Typography className='h-10 pt-2.5'><b>$0</b></Typography>
								</div>
							</div>
						</Paper>	
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
						<Button 
						onClick={handleNext}
						disabled={activeStep === steps.length}
						>
							{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
						</Button>
					</Box>
				</Box>
			</div>
			
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
			
		</>
    );
};

export default Checkout;