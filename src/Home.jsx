import { Button, Link, Typography } from "@mui/material"

const HomePage = () => {
	return (
		<div className="">
			<h1>Home</h1>
			<ul>
				<li>
					<Button variant="contained">test</Button>
					<Link href="/item" variant="h5">
						<Typography variant="h1">Item</Typography>
					</Link>
				</li>
				<li>
					<Link to={"/checkout"}>Checkout</Link>
				</li>
			</ul>
		</div>
	)
}

export default HomePage
