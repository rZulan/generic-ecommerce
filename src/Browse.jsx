import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	useTheme,
} from "@mui/material"
import Slider from "react-slick"
import Header from "./components/Header"
import "./styles/browse.css"

const settings = {
	dots: false,
	arrows: false,
	infinite: true,
	speed: 500,
	slidesToShow: 10,
	slidesToScroll: 1,
	swipeToSlide: true,
}

const Browse = () => {
	const theme = useTheme()

	return (
		<>
			<Header />

			<div className="w-2/3 m-auto">
				<div className="mt-12">
					<Typography variant="h5">Flash Sale!</Typography>
					<div className="grid grid-cols-5 grid-rows-6 gap-5">
						<Card>
							<CardMedia component={"img"} image="https://picsum.photos/500" />
							<CardContent>
								<Typography variant="body1">Item 1</Typography>
								<Typography variant="body2" className="line-clamp-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
									vero!
								</Typography>
							</CardContent>
						</Card>
						<Card>
							<CardMedia component={"img"} image="https://picsum.photos/501" />
							<CardContent>
								<Typography variant="body1">Item 1</Typography>
								<Typography variant="body2" className="line-clamp-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
									vero!
								</Typography>
							</CardContent>
						</Card>
						<Card>
							<CardMedia component={"img"} image="https://picsum.photos/502" />
							<CardContent>
								<Typography variant="body1">Item 1</Typography>
								<Typography variant="body2" className="line-clamp-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
									vero!
								</Typography>
							</CardContent>
						</Card>
						<Card>
							<CardMedia component={"img"} image="https://picsum.photos/503" />
							<CardContent>
								<Typography variant="body1">Item 1</Typography>
								<Typography variant="body2" className="line-clamp-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
									vero!
								</Typography>
							</CardContent>
						</Card>
						<Card>
							<CardMedia component={"img"} image="https://picsum.photos/504" />
							<CardContent>
								<Typography variant="body1">Item 1</Typography>
								<Typography variant="body2" className="line-clamp-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
									vero!
								</Typography>
							</CardContent>
						</Card>
					</div>
				</div>
				<div className="my-10">
					<Typography variant="h5">Categories</Typography>
					<Slider {...settings}>
						<div className="category-1">
							<Typography
								variant="h5"
								className="flex items-center justify-center h-full text-center text-white"
							>
								Furniture
							</Typography>
						</div>
						<div className="category-2">
							<Typography
								variant="h5"
								className="flex items-center justify-center h-full text-center text-white"
							>
								Clothing
							</Typography>
						</div>
						<div className="category-3">
							<Typography
								variant="h5"
								className="flex items-center justify-center h-full text-center text-white"
							>
								Beauty Products
							</Typography>
						</div>
						<div className="category-4">
							<Typography
								variant="h5"
								className="flex items-center justify-center h-full text-center text-white"
							>
								Toys
							</Typography>
						</div>
						<div className="category-5">
							<Typography
								variant="h5"
								className="flex items-center justify-center h-full text-center text-white"
							>
								Accessories
							</Typography>
						</div>
						<div className="category-6">
							<Typography
								variant="h5"
								className="flex items-center justify-center h-full text-center text-white"
							>
								Household Essentials
							</Typography>
						</div>
						<div className="category-7">
							<Typography
								variant="h5"
								className="flex items-center justify-center h-full text-center text-white"
							>
								Books
							</Typography>
						</div>
						<div className="category-8">
							<Typography
								variant="h5"
								className="flex items-center justify-center h-full text-center text-white"
							>
								Health
							</Typography>
						</div>
						<div className="category-9">
							<Typography
								variant="h5"
								className="flex items-center justify-center h-full text-center text-white"
							>
								Food
							</Typography>
						</div>
						<div className="category-10">
							<Typography
								variant="h5"
								className="flex items-center justify-center h-full text-center text-white"
							>
								Entertainment
							</Typography>
						</div>
					</Slider>
				</div>
				<div>
					<h1>Just For You!</h1>
					<div className="flex flex-row gap-5">
						<div className="w-48 h-48 bg-blue-400" />
						<div className="w-48 h-48 bg-blue-400" />
						<div className="w-48 h-48 bg-blue-400" />
						<div className="w-48 h-48 bg-blue-400" />
						<div className="w-48 h-48 bg-blue-400" />
						<div className="w-48 h-48 bg-blue-400" />
					</div>
				</div>
			</div>
		</>
	)
}

export default Browse
