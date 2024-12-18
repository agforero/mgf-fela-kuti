"use client";

import { createTheme } from "@mui/material/styles";
import { amber } from "@mui/material/colors";

declare module "@mui/material/styles" {
	interface Palette {
		amber: Palette["primary"];
	}

	interface PaletteOptions {
		amber?: PaletteOptions["primary"];
	}
}

declare module "@mui/material/Button" {
	interface ButtonPropsColorOverrides {
		amber: true;
	}
}

const theme = createTheme({
	palette: {
		amber: {
			main: amber[200],
			light: amber[50],
			dark: amber[500],
			contrastText: "#000",
		},
		primary: {
			main: "#fff",
			light: "#fff",
			dark: "#fff",
			contrastText: "#000",
		},
	},
});

theme.components = {
	MuiTooltip: {
		styleOverrides: {
			tooltip: {
				borderRadius: "1px",
				fontSize: "16px",
				textAlign: "center",
				backgroundColor: "black",
				border: "1px solid white",
				"&.amberTooltip": {
					color: amber[200],
					border: `1px solid ${amber[200]}`,
				},
			},
			arrow: {
				"&:before": {
					backgroundColor: "black",
					border: "1px solid white",
				},
				"&.amberTooltip": {
					"&:before": {
						border: `1px solid ${amber[200]}`,
					},
				},
			},
		},
	},
	MuiStepConnector: {
		styleOverrides: {
			line: {
				borderColor: theme.palette.primary.light,
			},
		},
	},
	MuiStepLabel: {
		styleOverrides: {
			labelContainer: {
				"& .MuiStepLabel-label": {
					fontSize: "22px",
					color: "white !important",
				},
			},
			active: {
				"& .MuiStepLabel-label": {
					fontSize: "22px",
					color: "white !important",
				},
			},
			iconContainer: {
				"& .MuiSvgIcon-root": {
					color: "white",
					"& .MuiStepIcon-text": {
						fontSize: "16px",
					},
				},
			},
		},
	},
	MuiStepContent: {
		styleOverrides: {
			root: {
				borderLeft: "1px solid white",
			},
			last: {
				borderLeft: "none",
			},
		},
	},
	MuiTypography: {
		styleOverrides: {
			body1: {
				fontSize: "18px",
			},
			subtitle2: {
				fontSize: "16px",
			},
			caption: {
				fontSize: "16px",
			},
		},
	},
};

export default theme;
