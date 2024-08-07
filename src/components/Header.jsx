import SearchIcon from "@mui/icons-material/Search"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Box, TextField, ThemeProvider, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import theme from "../theme"

const Header = () => {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ backgroundColor: theme.palette.primary.main }}>
				<Box className="flex flex-row items-center w-2/3 h-16 m-auto">
					<ul className="flex flex-row flex-1 gap-5">
						<li>
							<Link to={"/"}>Home</Link>
						</li>
						<li>
							<Link to={"/item"}>Item</Link>
						</li>
						<li>
							<Link to={"/checkout"}>Checkout</Link>
						</li>
						<li>
							<Link to={"/browse"}>Browse</Link>
						</li>
					</ul>
					<div className="flex flex-row items-center gap-5">
						<Typography variant="h5" className="flex-1 text-2xl text-center">
							E-Commerce
						</Typography>
						<div className="flex flex-row items-center">
							<TextField
								variant="outlined"
								size="small"
								sx={{
									width: 400,
									"& .MuiOutlinedInput-root": { backgroundColor: "white" },
								}}
							/>
							<SearchIcon
								onClick={() => {
									console.log("pressed!")
								}}
								sx={{
									width: 30,
									height: 30,
									color: "black",
								}}
							/>
						</div>
					</div>
					<div className="flex flex-row justify-end flex-1 gap-5">
						<Link to={"/cart"}>
							<ShoppingCartIcon />
						</Link>
						<h1>Logout</h1>
					</div>
				</Box>
			</Box>
		</ThemeProvider>
	)
}

export default Header
