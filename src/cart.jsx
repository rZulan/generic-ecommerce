import { Button, Divider, List, ListItem, Paper, Typography } from "@mui/material"
import Header from "./components/Header"
import NoData from './assets/no data.jpg'
import { useState } from "react"

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
    <Header/>
    <div className="pt-5 pl-5 w-2/3 m-auto">
      <Typography variant="h5"><b>Shopping Cart</b></Typography>
      <Typography><b>0 items</b> in your cart.</Typography>
    </div>

    <Paper className="w-2/3 m-auto">
      <div className="flex pl-5 m-5 gap-28">
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

            <div className='flex gap-28 pr-10 pt-5'>
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

            <div className='flex gap-28 pr-10 pt-5'>
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

            <div className='flex gap-28 pr-10 pt-5'>
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

            <div className='flex gap-28 pr-10 pt-5'>
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

            <div className='flex gap-28 pr-10 pt-5'>
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

    {/* <div className="">
      <Typography>Calculated Shipping</Typography>
    </div> */}
    </>
  )
}

export default Cart