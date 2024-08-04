import { ThemeProvider } from "@mui/material"
import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from "./Browse.jsx"
import Cart from "./cart.jsx"
import Checkout from "./Checkout.jsx"
import HomePage from "./Home.jsx"
import "./index.css"
import Item from "./Item.jsx"
import theme from "./theme.jsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/browse",
		element: <Browse />,
	},
	{
		path: "/item",
		element: <Item />,
	},
	{
		path: "/cart",
		element: <Cart />,
	},
	{
		path: "/checkout",
		element: <Checkout />,
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
)
