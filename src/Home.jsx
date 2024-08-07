import { Avatar, Box, Button, Link, Rating, Typography } from "@mui/material"
import itemUnavailable from './assets/item sample.jpg'
import notFound from './assets/not found.jpg'
import noData from './assets/no data.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import StarIcon from '@mui/icons-material/Star';
import Header from "./components/Header";

const labels = {
	0.5: 'Useless',
	1: 'Useless+',
	1.5: 'Poor',
	2: 'Poor+',
	2.5: 'Ok',
	3: 'Ok+',
	3.5: 'Good',
	4: 'Good+',
	4.5: 'Excellent',
	5: 'Excellent+',
};

function getLabelText(value) {
	return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

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

		const [value1, setValue1] = useState(4);
		const [hover1, setHover1] = useState(-1);

		const [value2, setValue2] = useState(4);
		const [hover2, setHover2] = useState(-1);

		const [value3, setValue3] = useState(4);
		const [hover3, setHover3] = useState(-1);

		const [value4, setValue4] = useState(4);
		const [hover4, setHover4] = useState(-1);

		const [value5, setValue5] = useState(4);
		const [hover5, setHover5] = useState(-1);

		const [value6, setValue6] = useState(4);
		const [hover6, setHover6] = useState(-1);

		return (
		<>
		<div className="flex justify-center h-8 bg-sky-950">
			<div className="pt-1">
			<Typography color={'white'}>Get up to 70% off on selected items!</Typography>
			</div>
		</div>

		<Header/>

		<div className="flex justify-center pt-10"><Typography variant="h4">New Collection</Typography></div>
		<div className="flex justify-center"><Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facilis.</Typography></div>

		<div className="grid grid-cols-3 gap-5 pt-5 w-3/4 m-auto text-center">
			<div className="grid text-left ">
				<img src={itemUnavailable} alt="item unavailable photo"/> 
				<Typography variant="h6" ><b>Item Name</b></Typography>
				<Typography variant="caption" display='block'>This is the description of the item.</Typography>
				<Typography variant="h6" display='block'><b>$0</b></Typography>
				<Box
					sx={{
						width: 200,
						display: 'flex',
						alignItems: 'center',
					}}
					>
					<Rating
						name="hover-feedback"
						value={value1}
						precision={0.5}
						getLabelText={getLabelText}
						onChange={(event, newValue) => {
						setValue1(newValue);
						}}
						onChangeActive={(event, newHover) => {
						setHover1(newHover);
						}}
						emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
					/>
					{value1 !== null && (
						<Box sx={{ ml: 2 }}>{labels[hover1 !== -1 ? hover1 : value1]}</Box>
					)}
				</Box>
			</div>

			<div className="grid text-left ">
				<img src={itemUnavailable} alt="item unavailable photo"/> 
				<Typography variant="h6" ><b>Item Name</b></Typography>
				<Typography variant="caption" display='block'>This is the description of the item.</Typography>
				<Typography variant="h6" display='block'><b>$0</b></Typography>
				<Box
					sx={{
						width: 200,
						display: 'flex',
						alignItems: 'center',
					}}
					>
					<Rating
						name="hover-feedback"
						value={value2}
						precision={0.5}
						getLabelText={getLabelText}
						onChange={(event, newValue) => {
						setValue2(newValue);
						}}
						onChangeActive={(event, newHover) => {
						setHover2(newHover);
						}}
						emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
					/>
					{value2 !== null && (
						<Box sx={{ ml: 2 }}>{labels[hover2 !== -1 ? hover2 : value2]}</Box>
					)}
				</Box>
			</div>

			<div className="grid text-left ">
				<img src={itemUnavailable} alt="item unavailable photo"/> 
				<Typography variant="h6" ><b>Item Name</b></Typography>
				<Typography variant="caption" display='block'>This is the description of the item.</Typography>
				<Typography variant="h6" display='block'><b>$0</b></Typography>
				<Box
					sx={{
						width: 200,
						display: 'flex',
						alignItems: 'center',
					}}
					>
					<Rating
						name="hover-feedback"
						value={value3}
						precision={0.5}
						getLabelText={getLabelText}
						onChange={(event, newValue) => {
						setValue3(newValue);
						}}
						onChangeActive={(event, newHover) => {
						setHover3(newHover);
						}}
						emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
					/>
					{value3 !== null && (
						<Box sx={{ ml: 2 }}>{labels[hover3 !== -1 ? hover3 : value3]}</Box>
					)}
				</Box>
			</div>

			<div className="grid text-left ">
				<img src={itemUnavailable} alt="item unavailable photo"/> 
				<Typography variant="h6" ><b>Item Name</b></Typography>
				<Typography variant="caption" display='block'>This is the description of the item.</Typography>
				<Typography variant="h6" display='block'><b>$0</b></Typography>
				<Box
					sx={{
						width: 200,
						display: 'flex',
						alignItems: 'center',
					}}
					>
					<Rating
						name="hover-feedback"
						value={value4}
						precision={0.5}
						getLabelText={getLabelText}
						onChange={(event, newValue) => {
						setValue4(newValue);
						}}
						onChangeActive={(event, newHover) => {
						setHover4(newHover);
						}}
						emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
					/>
					{value4 !== null && (
						<Box sx={{ ml: 2 }}>{labels[hover4 !== -1 ? hover4 : value4]}</Box>
					)}
				</Box>
			</div>

			<div className="grid text-left ">
				<img src={itemUnavailable} alt="item unavailable photo"/> 
				<Typography variant="h6" ><b>Item Name</b></Typography>
				<Typography variant="caption" display='block'>This is the description of the item.</Typography>
				<Typography variant="h6" display='block'><b>$0</b></Typography>
				<Box
					sx={{
						width: 200,
						display: 'flex',
						alignItems: 'center',
					}}
					>
					<Rating
						name="hover-feedback"
						value={value5}
						precision={0.5}
						getLabelText={getLabelText}
						onChange={(event, newValue) => {
						setValue5(newValue);
						}}
						onChangeActive={(event, newHover) => {
						setHover5(newHover);
						}}
						emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
					/>
					{value5 !== null && (
						<Box sx={{ ml: 2 }}>{labels[hover5 !== -1 ? hover5 : value5]}</Box>
					)}
				</Box>
			</div>

			<div className="grid text-left ">
				<img src={itemUnavailable} alt="item unavailable photo"/> 
				<Typography variant="h6" ><b>Item Name</b></Typography>
				<Typography variant="caption" display='block'>This is the description of the item.</Typography>
				<Typography variant="h6" display='block'><b>$0</b></Typography>
				<Box
					sx={{
						width: 200,
						display: 'flex',
						alignItems: 'center',
					}}
					>
					<Rating
						name="hover-feedback"
						value={value6}
						precision={0.5}
						getLabelText={getLabelText}
						onChange={(event, newValue) => {
						setValue6(newValue);
						}}
						onChangeActive={(event, newHover) => {
						setHover6(newHover);
						}}
						emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
					/>
					{value6 !== null && (
						<Box sx={{ ml: 2 }}>{labels[hover6 !== -1 ? hover6 : value6]}</Box>
					)}
				</Box>
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
