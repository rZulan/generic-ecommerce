import { Box, Button, LinearProgress, Rating, Typography } from "@mui/material"
import { useState } from "react"
import Slider from "react-slick"

function LinearProgressWithLabel(props) {
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<Box sx={{ width: 200, mr: 1 }}>
				<LinearProgress variant="determinate" {...props} />
			</Box>
			<Box sx={{ minWidth: 35 }}>
				<Typography variant="body2" color="text.secondary">{`${Math.round(
					props.value
				)} ratings`}</Typography>
			</Box>
		</Box>
	)
}

const Item = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	}

	const [rating, setRating] = useState(0)

	return (
		<div className="w-3/4 m-auto">
			<div className="flex flex-row h-16 text-white bg-black">
				<ul className="flex flex-row flex-1 gap-5">
					<li>Home</li>
					<li>Cart</li>
				</ul>
				<h1 className="flex-1 text-2xl text-center">E-Commerce</h1>
				<h1 className="flex-1 text-right">Logout</h1>
			</div>
			<div className="flex">
				<div className="flex flex-col bg-slate-400">
					<img src="https://picsum.photos/400" className="w-96" />
					<div className="pb-10 m-auto mt-5 w-72">
						<Slider {...settings} className="w-3/4 m-auto">
							<div>
								<img src="https://picsum.photos/1001" />
							</div>
							<div>
								<img src="https://picsum.photos/1002" />
							</div>
							<div>
								<img src="https://picsum.photos/1003" />
							</div>
							<div>
								<img src="https://picsum.photos/1004" />
							</div>
							<div>
								<img src="https://picsum.photos/1005" />
							</div>
							<div>
								<img src="https://picsum.photos/1006" />
							</div>
						</Slider>
					</div>
				</div>
				<div>
					<h1>Item #1</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
						labore quas nemo dicta officia accusantium quisquam quidem mollitia
						quibusdam consequuntur?
					</p>
					<div className="flex flex-row">
						<Rating
							value={rating}
							onChange={(event, newValue) => {
								setRating(newValue)
							}}
						/>
						<p>500 ratings</p>
					</div>
					<h1>$69.00</h1>
					<Button variant="contained">
						<p>Buy Now</p>
					</Button>
					<Button variant="contained">
						<p>Add to Cart</p>
					</Button>
				</div>
			</div>
			<div className="mt-12">
				<p>Product Details Lorem ipsum dolor sit amet.</p>
				<ul>
					<li>
						• Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id,
						molestias.
					</li>
					<li>• Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
					<li>
						• Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, sint
						voluptate.
					</li>
				</ul>
				<img src="https://picsum.photos/600/200" />
			</div>
			<div className="mt-12">
				<h1>Ratings and review Lorem ipsum dolor sit amet consectetur.</h1>
				<div className="flex flex-row">
					<div>
						<h1>4.9/5</h1>
						<Rating value={rating} />
					</div>
					<div>
						<div className="flex flex-row">
							<Rating value={5} />
							<LinearProgressWithLabel value={100} />
						</div>
						<div className="flex flex-row">
							<Rating value={1} />
							<LinearProgressWithLabel value={100} />
						</div>
						<div className="flex flex-row">
							<Rating value={1} />
							<LinearProgressWithLabel value={100} />
						</div>
						<div className="flex flex-row">
							<Rating value={2} />
							<LinearProgressWithLabel value={100} />
						</div>
						<div className="flex flex-row">
							<Rating value={1} />
							<LinearProgressWithLabel value={100} />
						</div>
					</div>
				</div>
				<div className="mt-12 mb-96">
					<Rating value={5} />
					<h1>Lorem, ipsum.</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ex
						aspernatur aut id voluptatibus aliquid, eos laudantium excepturi
						laborum rem velit, non maiores, nulla ipsam! Odio corrupti expedita
						exercitationem molestiae?
					</p>
					<img src="https://picsum.photos/150/200" />
				</div>
			</div>
		</div>
	)
}

export default Item
