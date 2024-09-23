import { createTheme, responsiveFontSizes } from "@mui/material"
import { blue } from "@mui/material/colors"

const theme = responsiveFontSizes(
	createTheme({
		palette: {
			primary: {
				main: blue[500],
			},
		},
	})
)

export default theme
