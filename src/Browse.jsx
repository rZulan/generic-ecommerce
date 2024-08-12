import {
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Rating,
	Typography,
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

const items = {
	item1: {
		name: "iPhone 11",
	},
	item2: {
		name: "iPhone 12",
	},
	item3: {
		name: "iPhone 13",
	},
	item4: {
		name: "iPhone 14",
	},
	item5: {
		name: "iPhone 15",
	},
	item6: {
		name: "iPhone 15",
	},
	item7: {
		name: "iPhone 15",
	},
	item8: {
		name: "iPhone 15",
	},
	item9: {
		name: "iPhone 15",
	},
	item10: {
		name: "iPhone 15",
	},
	item11: {
		name: "iPhone 15",
	},
	item12: {
		name: "iPhone 15",
	},
	item13: {
		name: "iPhone 15",
	},
	item14: {
		name: "iPhone 15",
	},
}

const Browse = () => {
	return (
		<>
			<Header />

			<div className="w-2/3 m-auto">
				<div className="mt-12">
					<Typography variant="h5">Flash Sale!</Typography>
					<div className="grid grid-cols-5 gap-5">
						<CardActionArea>
							<Card>
								<CardMedia
									component={"img"}
									image="https://picsum.photos/500"
								/>
								<CardContent>
									<Typography variant="body1">Item 1</Typography>
									<Typography variant="body2" className="line-clamp-4">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
										vero!
									</Typography>
								</CardContent>
							</Card>
						</CardActionArea>
						<CardActionArea>
							<Card>
								<CardMedia
									component={"img"}
									image="https://picsum.photos/501"
								/>
								<CardContent>
									<Typography variant="body1">Item 1</Typography>
									<Typography variant="body2" className="line-clamp-4">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
										vero!
									</Typography>
								</CardContent>
							</Card>
						</CardActionArea>
						<CardActionArea>
							<Card>
								<CardMedia
									component={"img"}
									image="https://picsum.photos/502"
								/>
								<CardContent>
									<Typography variant="body1">Item 1</Typography>
									<Typography variant="body2" className="line-clamp-4">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
										vero!
									</Typography>
								</CardContent>
							</Card>
						</CardActionArea>
						<CardActionArea>
							<Card>
								<CardMedia
									component={"img"}
									image="https://picsum.photos/503"
								/>
								<CardContent>
									<Typography variant="body1">Item 1</Typography>
									<Typography variant="body2" className="line-clamp-4">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
										vero!
									</Typography>
								</CardContent>
							</Card>
						</CardActionArea>
						<CardActionArea>
							<Card>
								<CardMedia
									component={"img"}
									image="https://picsum.photos/504"
								/>
								<CardContent>
									<Typography variant="body1">Item 1</Typography>
									<Typography variant="body2" className="line-clamp-4">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
										vero!
									</Typography>
								</CardContent>
							</Card>
						</CardActionArea>
					</div>
				</div>
				<div className="my-10">
					<div className="flex flex-row items-baseline justify-between">
						<Typography variant="h5">Categories</Typography>
						<Typography
							variant="body2"
							className="italic text-gray-600 underline"
						>
							Swipe right to see more {">>"}
						</Typography>
					</div>
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
					<Typography variant="h5">Just For You!</Typography>
					<div className="grid grid-cols-7 gap-5">
						{Object.keys(items).map((item, i) => (
							<CardActionArea key={i}>
								<Card>
									<CardMedia
										component={"img"}
										image="https://picsum.photos/600"
									/>
									<CardContent>
										<Typography variant="body1">{item}</Typography>
										<Typography variant="body1">
											<b>$69.00</b>
										</Typography>
										<div className="flex flex-row">
											<Rating value={5} readOnly={true} size="small" />
											<Typography variant="caption">(50 Ratings)</Typography>
										</div>
									</CardContent>
								</Card>
							</CardActionArea>
						))}
					</div>
					<div className="flex justify-center mt-10 mb-20">
						<Button variant="contained" className="">
							<Typography variant="body1">Load More</Typography>
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Browse
