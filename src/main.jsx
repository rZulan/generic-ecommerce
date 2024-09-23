import { ThemeProvider } from "@mui/material"
import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter} from "react-router-dom"
import Browse from "./Browse.jsx"
import Cart from "./Cart.jsx"
import Checkout from "./Checkout.jsx"
import HomePage from "./Home.jsx"
import "./index.css"
import Item from "./Item.jsx"
import theme from "./theme.jsx"
import Login from "./Login.jsx"
import Signup from "./Signup.jsx"

import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App.jsx"
import HomeTesting from "./HomeTesting.jsx"

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
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
	{
		path: "/testing",
		element: <HomeTesting />,
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
)

export default router