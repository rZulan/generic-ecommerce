import { Avatar, Button, Link, Typography } from "@mui/material"
import itemUnavailable from './assets/item sample.jpg'
import notFound from './assets/not found.jpg'
import noData from './assets/no data.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const HomePage = () => {	
		var settings = {
			dots: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3500,
			pauseOnHover: true
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

		<div className="flex justify-center pt-10"><Typography variant="h4">New Collection</Typography></div>
		<div className="flex justify-center"><Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facilis.</Typography></div>

		<div className="grid grid-cols-3 gap-5 pt-5 w-3/4 m-auto text-center">
			<div className="grid text-left ">
				<img src={itemUnavailable} alt="item unavailable photo"/> 
				<Typography variant="h6" ><b>Item Name</b></Typography>
				<Typography variant="caption" display='block'>This is the description of the item.</Typography>
				<Typography variant="h6" display='block'><b>$0</b></Typography>
			</div>

			<div className="grid text-left ">
				<img src={itemUnavailable} alt="item unavailable photo"/> 
				<Typography variant="h6" ><b>Item Name</b></Typography>
				<Typography variant="caption" display='block'>This is the description of the item.</Typography>
				<Typography variant="h6" display='block'><b>$0</b></Typography>
			</div>

			<div className="grid text-left ">
				<img src={itemUnavailable} alt="item unavailable photo"/> 
				<Typography variant="h6" ><b>Item Name</b></Typography>
				<Typography variant="caption" display='block'>This is the description of the item.</Typography>
				<Typography variant="h6" display='block'><b>$0</b></Typography>
			</div>

			<div className="grid text-left ">
				<img src={itemUnavailable} alt="item unavailable photo"/> 
				<Typography variant="h6" ><b>Item Name</b></Typography>
				<Typography variant="caption" display='block'>This is the description of the item.</Typography>
				<Typography variant="h6" display='block'><b>$0</b></Typography>
			</div>

			<div className="grid text-left ">
				<img src={itemUnavailable} alt="item unavailable photo"/> 
				<Typography variant="h6" ><b>Item Name</b></Typography>
				<Typography variant="caption" display='block'>This is the description of the item.</Typography>
				<Typography variant="h6" display='block'><b>$0</b></Typography>
			</div>

			<div className="grid text-left ">
				<img src={itemUnavailable} alt="item unavailable photo"/> 
				<Typography variant="h6" ><b>Item Name</b></Typography>
				<Typography variant="caption" display='block'>This is the description of the item.</Typography>
				<Typography variant="h6" display='block'><b>$0</b></Typography>
			</div>
		</div>

		<div className="flex justify-center pt-10"><Typography variant="h4">Other Collection</Typography></div>
		<div className="flex justify-center "><Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facilis.</Typography></div>
		<div className="flex justify-center pt-5"><Button variant="contained" sx={{borderRadius: 20, color: "white", backgroundColor: 'black'}}>Browse other collections</Button></div>
		
		
		<div className="w-3/4 m-auto">
			<div className="slider-container size-3/5 w-auto pt-10 gap-5">
				<Slider {...settings}>
					{/* <div className="grid grid-cols-3 gap-5 w-3/4 m-auto text-center"> */}
						<div><img src={itemUnavailable} className="rounded-lg" alt="item unavailable photo"/></div>
						<div><img src={noData} className="rounded-lg" alt="item unavailable photo"/></div>
						<div><img src={notFound} className="rounded-lg" alt="item unavailable photo"/></div>
					{/* </div> */}
				</Slider>
			</div>
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
	)
}

export default HomePage
