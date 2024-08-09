import { createTheme, responsiveFontSizes } from "@mui/material"
import { red } from "@mui/material/colors"

const theme = responsiveFontSizes(
	createTheme({
		palette: {
			primary: {
				main: red[500],
			},
		},
	})
)

export default theme
