import { Avatar, Link, Typography } from "@mui/material"

const HomePage = () => {
	return (
		<>
		<div className="flex justify-center h-8 bg-sky-950">
			<div className="pt-1">
			<Typography color={'white'}>Get up to 70% off on selected items!</Typography>
			</div>
		</div>

		<div className="flex flex-wrap">
			<div className='flex pt-10 pl-10 gap-5 '>
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

			<div className="flex justify-center pt-1">
				<Typography variant="h2">Zulan</Typography>
			</div>
			
			<div className="flex justify-end pt-8 pr-10">
				<Avatar>A</Avatar>
			</div>
		</div>


		</>
	)
}

export default HomePage
