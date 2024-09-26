import { Button, Divider, List, ListItem, Paper, TextField, Typography } from "@mui/material"
import Header from "./components/Header"
import NoData from './assets/no data.jpg'
import { useState } from "react"
import { Link } from "react-router-dom"

const Cart = () => {
  const [quantity, setQuantity] = useState(0);

  const handleAddQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const handleMinusQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity - 1)
  }

  return (
    <>
      <div className="flex justify-center h-8 bg-sky-950">
				<div className="pt-1">
					<Typography color={"white"}>
						Get up to 70% off on selected items!
					</Typography>
				</div>
			</div>

    <Header/>
    
    <div className="pt-5 pl-5 w-2/3 m-auto">
      <Typography variant="h5"><b>Shopping Cart</b></Typography>
      <Typography><b>5 items</b> in your cart.</Typography>
    </div>

    <div className="flex justify-center gap-1">
    <Paper className="w-6/12">
      <div className="flex pl-5 m-5 gap-24">
        <Typography className="flex-1 pt-5"><b>Product</b></Typography>
        <Typography className="pt-5"><b>Price</b></Typography>
        <Typography className="pt-5"><b>Quantity</b></Typography>
        <Typography className="pt-5"><b>Total Price</b></Typography>
      </div>

      <Divider />
      
      <List>
        <ListItem>
          <img src={NoData} className='size-28 rounded-lg'/>
          <div className='flex pl-5 w-full'>
            <div className='flex-1'>
              <Typography fontSize={12}>Item Category</Typography>
              <Typography display="block"><b>Item Name</b></Typography>
              
              <Typography variant='caption'>Color • None</Typography>
              <Typography variant='caption' display="block">Size • 0</Typography>
            </div>

            <div className='flex gap-24 pr-10 pt-5'>
              <Typography><b>$0</b></Typography>
              <div className="flex gap-4">
               <Button variant="outlined" className="size-5" sx={{minWidth: 3}} onClick={handleMinusQuantity}>-</Button>
               <Typography><b>{quantity}</b></Typography>
                <Button variant="outlined" className="size-5"  sx={{minWidth: 3}} onClick={handleAddQuantity}>+</Button>
              </div>
              <Typography><b>$0</b></Typography>
            </div>
          </div>
        </ListItem>
        <ListItem>
          <img src={NoData} className='size-28 rounded-lg'/>
          <div className='flex pl-5 w-full'>
            <div className='flex-1'>
              <Typography fontSize={12}>Item Category</Typography>
              <Typography display="block"><b>Item Name</b></Typography>
              
              <Typography variant='caption'>Color • None</Typography>
              <Typography variant='caption' display="block">Size • 0</Typography>
            </div>

            <div className='flex gap-24 pr-10 pt-5'>
              <Typography><b>$0</b></Typography>
              <div className="flex gap-4">
               <Button variant="outlined" className="size-5" sx={{minWidth: 3}} onClick={handleMinusQuantity}>-</Button>
               <Typography><b>{quantity}</b></Typography>
                <Button variant="outlined" className="size-5"  sx={{minWidth: 3}} onClick={handleAddQuantity}>+</Button>
              </div>
              <Typography><b>$0</b></Typography>
            </div>
          </div>
        </ListItem>
        <ListItem>
          <img src={NoData} className='size-28 rounded-lg'/>
          <div className='flex pl-5 w-full'>
            <div className='flex-1'>
              <Typography fontSize={12}>Item Category</Typography>
              <Typography display="block"><b>Item Name</b></Typography>
              
              <Typography variant='caption'>Color • None</Typography>
              <Typography variant='caption' display="block">Size • 0</Typography>
            </div>

            <div className='flex gap-24 pr-10 pt-5'>
              <Typography><b>$0</b></Typography>
              <div className="flex gap-4">
               <Button variant="outlined" className="size-5" sx={{minWidth: 3}} onClick={handleMinusQuantity}>-</Button>
               <Typography><b>{quantity}</b></Typography>
                <Button variant="outlined" className="size-5"  sx={{minWidth: 3}} onClick={handleAddQuantity}>+</Button>
              </div>
              <Typography><b>$0</b></Typography>
            </div>
          </div>
        </ListItem>
        <ListItem>
          <img src={NoData} className='size-28 rounded-lg'/>
          <div className='flex pl-5 w-full'>
            <div className='flex-1'>
              <Typography fontSize={12}>Item Category</Typography>
              <Typography display="block"><b>Item Name</b></Typography>
              
              <Typography variant='caption'>Color • None</Typography>
              <Typography variant='caption' display="block">Size • 0</Typography>
            </div>

            <div className='flex gap-24 pr-10 pt-5'>
              <Typography><b>$0</b></Typography>
              <div className="flex gap-4">
               <Button variant="outlined" className="size-5" sx={{minWidth: 3}} onClick={handleMinusQuantity}>-</Button>
               <Typography><b>{quantity}</b></Typography>
                <Button variant="outlined" className="size-5"  sx={{minWidth: 3}} onClick={handleAddQuantity}>+</Button>
              </div>
              <Typography><b>$0</b></Typography>
            </div>
          </div>
        </ListItem>
        <ListItem>
          <img src={NoData} className='size-28 rounded-lg'/>
          <div className='flex pl-5 w-full'>
            <div className='flex-1'>
              <Typography fontSize={12}>Item Category</Typography>
              <Typography display="block"><b>Item Name</b></Typography>
              
              <Typography variant='caption'>Color • None</Typography>
              <Typography variant='caption' display="block">Size • 0</Typography>
            </div>

            <div className='flex gap-24 pr-10 pt-5'>
              <Typography><b>$0</b></Typography>
              <div className="flex gap-4">
               <Button variant="outlined" className="size-5" sx={{minWidth: 3}} onClick={handleMinusQuantity}>-</Button>
               <Typography><b>{quantity}</b></Typography>
                <Button variant="outlined" className="size-5"  sx={{minWidth: 3}} onClick={handleAddQuantity}>+</Button>
              </div>
              <Typography><b>$0</b></Typography>
            </div>
          </div>
        </ListItem>
      </List>
    </Paper>

    <Paper className="w-1/6 h-fit">
      <Typography className="pt-5 pl-5"><b>Coupon Code</b></Typography>
      <Typography className="pt-5 pl-5 pr-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ea.</Typography>
      <div className="pt-1 pl-5 pb-5" >
        <TextField label='Enter Coupon Code' variant="outlined"/>
      </div>

      <Divider /> 

      <Paper className="w-11/12 m-auto pb-5 mt-5 mb-5" elevation={3} sx={{backgroundColor:'orange'}}>
        <Typography className="pt-5 pl-5"><b>Cart Total</b></Typography>
        <div className="flex pt-5 pl-5">
          <div className="flex-1">
            <Typography>Cart Subtotal</Typography>
            <Typography>Discount</Typography>
            <Typography>Cart Total</Typography>
          </div>
          <div className="pr-5 text-center">
            <Typography><b>$0</b></Typography>
            <Typography><b>-$0</b></Typography>
            <Typography><b>$0</b></Typography>
          </div>
        </div>
      </Paper>
    </Paper>
    </div>

    <div className="flex flex-wrap h-16 bg-sky-950 mt-10 w-full">
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
  )
}

export default Cart