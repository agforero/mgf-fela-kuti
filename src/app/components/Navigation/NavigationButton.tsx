import theme from "@/app/theme";
import { Box, Button, Fade, ThemeProvider, Tooltip } from "@mui/material";
import React from "react";

interface NavigationButtonProps {
	text: string;
	onPress: Function;
	amber?: boolean;
	disabled?: boolean;
	startIcon?: any;
	endIcon?: any;
}

export default function NavigationButton(props: NavigationButtonProps) {
	return (
		<ThemeProvider theme={theme}>
			<span>
				<Button
					color={!props.amber ? "primary" : "amber"}
					variant="contained"
					startIcon={props.startIcon ? props.startIcon : undefined}
					endIcon={props.endIcon ? props.endIcon : undefined}
					onClick={() => props.onPress()}
					onTouchStart={() => props.onPress()}
					disabled={props.disabled}
					sx={{ fontSize: "unset" }}
				>
					{props.text}
				</Button>
			</span>
		</ThemeProvider>
	);
}
