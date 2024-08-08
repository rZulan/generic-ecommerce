import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Rating,
	Typography,
} from "@mui/material"
import Header from "./components/Header"

const Browse = () => {
	return (
		<>
			<Header />
			<div className="w-2/3 m-auto">
				<div className="mt-12">
					<Typography variant="h4">Flash Sale!</Typography>
					<div className="grid grid-cols-5 justify-items-center">
						<Card sx={{ maxWidth: 300 }}>
							<CardActionArea>
								<CardMedia
									component={"img"}
									image="https://picsum.photos/300"
								/>
								<CardContent>
									<Typography variant="h6">Item 1</Typography>
									<Typography variant="body2">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
										vero!
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
						<Card sx={{ maxWidth: 300 }}>
							<CardActionArea>
								<CardMedia
									component={"img"}
									height={"140"}
									image="https://picsum.photos/3000"
								/>
								<CardContent>
									<Typography variant="h6">Item 2</Typography>
									<Typography variant="body2">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
										vero! Lorem ipsum dolor sit amet.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardContent>
								<Rating value={5} readOnly={true} />
							</CardContent>
						</Card>
						<Card sx={{ maxWidth: 300 }}>
							<CardActionArea>
								<CardMedia
									component={"img"}
									height={"140"}
									image="https://picsum.photos/3000"
								/>
								<CardContent>
									<Typography variant="h6">Item 3</Typography>
									<Typography variant="body2">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
										vero! Lorem ipsum, dolor sit amet consectetur adipisicing.
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
						<Card sx={{ maxWidth: 300 }}>
							<CardActionArea>
								<CardMedia
									component={"img"}
									height={"140"}
									image="https://picsum.photos/3000"
								/>
								<CardContent>
									<Typography variant="h6">Item 4</Typography>
									<Typography variant="body2">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
						<Card sx={{ maxWidth: 300 }}>
							<CardActionArea>
								<CardMedia
									component={"img"}
									height={"140"}
									image="https://picsum.photos/3000"
								/>
								<CardContent>
									<Typography variant="h6">Item 5</Typography>
									<Typography variant="body2">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
										vero!
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</div>
				</div>
				<div>
					<h1>Categories</h1>
					<div className="grid grid-cols-6 gap-2">
						<div className="w-48 h-48 bg-blue-400" />
						<div className="w-48 h-48 bg-blue-400" />
						<div className="w-48 h-48 bg-blue-400" />
						<div className="w-48 h-48 bg-blue-400" />
						<div className="w-48 h-48 bg-blue-400" />
						<div className="w-48 h-48 bg-blue-400" />
						<div className="w-48 h-48 bg-blue-400" />
						<div className="w-48 h-48 bg-blue-400" />
						<div className="w-48 h-48 bg-blue-400" />
						<div className="w-48 h-48 bg-blue-400" />
						<div className="w-48 h-48 bg-blue-400" />
						<div className="w-48 h-48 bg-blue-400" />
					</div>
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
