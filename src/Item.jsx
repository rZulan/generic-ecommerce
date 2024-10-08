import {
	Box,
	Button,
	LinearProgress,
	Paper,
	Rating,
	Typography,
	useTheme,
} from "@mui/material"
import { useState } from "react"
import Slider from "react-slick"
import Footer from "./components/Footer"
import Header from "./components/Header"

const itemData = {
	name: "iPhone 11",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore quas nemo dicta officia accusantium quisquam quidem mollitia quibusdam consequuntur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus aliquid ut corporis magnam magni, ullam voluptatem labore non mollitia omnis consectetur nam minus veritatis atque, alias cupiditate consequatur id odio similique dolore voluptatibus quasi? Maiores assumenda voluptas quam ratione numquam ea, possimus voluptatem? Necessitatibus illo magnam officiis, ratione repellendus possimus.",
	rating: {
		star1: 5,
		star2: 0,
		star3: 10,
		star4: 5,
		star5: 50,
	},
	price: 69.0,
	productDetails:
		"• Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, molestias.\n• Lorem ipsum, dolor sit amet consectetur adipisicing.\n• Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, sint voluptate.",
}

const getTotalRating = () => {
	let total = 0

	Object.entries(itemData.rating).forEach(([key, val]) => {
		total += val
	})

	return total
}

function LinearProgressWithLabel(props) {
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<Box sx={{ width: 200, mr: 1 }}>
				<LinearProgress variant="determinate" {...props} />
			</Box>
			<Box sx={{ minWidth: 35 }}>
				<Typography variant="body2" color="text.secondary">
					{props.value}
				</Typography>
			</Box>
		</Box>
	)
}

const Item = () => {
	const settings = {
		arrows: false,
		swipeToSlide: true,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	}

	const [rating, setRating] = useState(0)

	const theme = useTheme()

	return (
		<>
			<div className="flex justify-center h-8 bg-sky-950">
				<div className="pt-1">
					<Typography color={"white"}>
						Get up to 70% off on selected items!
					</Typography>
				</div>
			</div>

			<Header />
			
			<Box
				className="w-2/3 m-auto mt-10"
				sx={{ backgroundColor: theme.palette }}
			>
				<Paper className="flex flex-row flex-1 gap-10 py-10">
					<div className="flex flex-col w-1/4">
						<img src="https://picsum.photos/300/350" className="w-3/4 m-auto" />
						<div className="w-3/4 pb-10 m-auto mt-5">
							<Slider {...settings}>
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
					<div className="flex flex-col">
						<div className="flex-1">
							<Typography variant="h3">{itemData.name}</Typography>
							<Typography variant="body1">{itemData.description}</Typography>
						</div>
						<div className="flex flex-col justify-end flex-1 mb-10">
							<div className="flex flex-row gap-3 mt-10">
								<Rating
									value={rating}
									onChange={(event, newValue) => {
										setRating(newValue)
									}}
								/>
								<Typography
									variant="body1"
									sx={{
										fontWeight: "bold",
									}}
								>
									{getTotalRating()} ratings
								</Typography>
							</div>
							<Typography variant="h5">${itemData.price.toFixed(2)}</Typography>
							<div className="flex flex-row gap-1">
								<Button variant="contained">
									<Typography variant="body2">Buy Now</Typography>
								</Button>
								<Button variant="contained">
									<Typography variant="body2">Add to Cart</Typography>
								</Button>
							</div>
						</div>
					</div>
				</Paper>
				<Paper className="p-10 mt-12">
					<Typography variant="h6">
						Product Details Lorem ipsum dolor sit amet.
					</Typography>
					<Typography variant="body1">{itemData.productDetails}</Typography>

					<img src="https://picsum.photos/600/200" />
				</Paper>
				<Paper className="p-10 mt-12">
					<Typography variant="body1" sx={{ fontWeight: "bold" }}>
						Ratings and review Lorem ipsum dolor sit amet consectetur.
					</Typography>
					<div className="flex flex-row gap-16 mt-4 ml-2">
						<div>
							<Typography variant="body1" sx={{ fontWeight: "bold" }}>
								4.9/5
							</Typography>
							<Rating value={rating} readOnly={true} />
						</div>
						<div>
							<div className="flex flex-row gap-5">
								<Rating value={5} readOnly={true} />
								<LinearProgressWithLabel value={itemData.rating.star1} />
							</div>
							<div className="flex flex-row gap-5">
								<Rating value={4} readOnly={true} />
								<LinearProgressWithLabel value={itemData.rating.star2} />
							</div>
							<div className="flex flex-row gap-5">
								<Rating value={3} readOnly={true} />
								<LinearProgressWithLabel value={itemData.rating.star3} />
							</div>
							<div className="flex flex-row gap-5">
								<Rating value={2} readOnly={true} />
								<LinearProgressWithLabel value={itemData.rating.star4} />
							</div>
							<div className="flex flex-row gap-5">
								<Rating value={1} readOnly={true} />
								<LinearProgressWithLabel value={itemData.rating.star5} />
							</div>
						</div>
					</div>
					<div className="mt-12">
						<Paper elevation={3} className="p-5 my-5">
							<Rating value={5} readOnly={true} />
							<Typography variant="h6">Lorem, ipsum.</Typography>
							<Typography variant="body1">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
								ex aspernatur aut id voluptatibus aliquid, eos laudantium
								excepturi laborum rem velit, non maiores, nulla ipsam! Odio
								corrupti expedita exercitationem molestiae?
							</Typography>
							<img src="https://picsum.photos/150/200" />
							<div className="text-right text-gray-500">
								<Typography variant="caption">Janury 05, 2002</Typography>
							</div>
						</Paper>
						<Paper elevation={3} className="p-5 my-5">
							<Rating value={1} readOnly={true} />
							<Typography variant="h6">Lorem, ipsum.</Typography>
							<Typography variant="body1">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
								ex aspernatur aut id voluptatibus aliquid, eos laudantium
								excepturi laborum rem velit, non maiores, nulla ipsam! Odio
								corrupti expedita exercitationem molestiae?
							</Typography>
							<img src="https://picsum.photos/150/201" />
							<div className="text-right text-gray-500">
								<Typography variant="caption">Janury 05, 2002</Typography>
							</div>
						</Paper>
						<Paper elevation={3} className="p-5 my-5">
							<Rating value={4} readOnly={true} />
							<Typography variant="h6">Lorem, ipsum.</Typography>
							<Typography variant="body1">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
								ex aspernatur aut id voluptatibus aliquid, eos laudantium
								excepturi laborum rem velit, non maiores, nulla ipsam! Odio
								corrupti expedita exercitationem molestiae?
							</Typography>
							<img src="https://picsum.photos/151/200" />
							<div className="text-right text-gray-500">
								<Typography variant="caption">Janury 05, 2002</Typography>
							</div>
						</Paper>
						<Paper elevation={3} className="p-5 my-5">
							<Rating value={2} readOnly={true} />
							<Typography variant="h6">Lorem, ipsum.</Typography>
							<Typography variant="body1">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
								ex aspernatur aut id voluptatibus aliquid, eos laudantium
								excepturi laborum rem velit, non maiores, nulla ipsam! Odio
								corrupti expedita exercitationem molestiae?
							</Typography>
							<img src="https://picsum.photos/151/200" />
							<div className="text-right text-gray-500">
								<Typography variant="caption">Janury 05, 2002</Typography>
							</div>
						</Paper>
					</div>
				</Paper>
			</Box>
			<Footer />
		</>
	)
}

export default Item
