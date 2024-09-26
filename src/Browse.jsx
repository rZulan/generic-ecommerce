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
import { useGetAllProductsQuery } from "./redux/api/productsAPI"

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
	const { data } = useGetAllProductsQuery()
	console.log(data)

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
					<div className="grid grid-cols-7 gap-5 pt-5">
						{data?.map((item, i) => (
							<CardActionArea key={i}>
								<Card>
									<CardMedia
										component={"img"}
										image={item.image}
										sx={{padding: "1em 1em 0 1em", objectFit: 'contain', height: 185}}
									/>
									<CardContent>
										<Typography variant="body1" className="truncate">{item.title}</Typography>
										<Typography variant="body1">
											<b>${item.price}</b>
										</Typography>
										<div className="flex flex-row">
											<Rating value={item.rating.rate} readOnly={true} size="small" />
											<Typography variant="caption">({item.rating.count} Ratings)</Typography>
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
