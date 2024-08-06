import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { TextField } from "@mui/material"
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<div className="text-white bg-slate-800">
			<div className="flex flex-row items-center w-3/4 h-16 px-10 m-auto">
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
				</ul>
				<div className="flex flex-row gap-5">
					<h1 className="flex-1 text-2xl text-center">E-Commerce</h1>
					<TextField
						variant="outlined"
						size="small"
						sx={{
							width: 400,
							"& .MuiOutlinedInput-root": { backgroundColor: "white" },
						}}
					/>
				</div>
				<div className="flex flex-row justify-end flex-1 gap-5">
					<Link to={"/cart"}>
						<ShoppingCartIcon />
					</Link>
					<h1>Logout</h1>
				</div>
			</div>
		</div>
	)
}

export default Header
