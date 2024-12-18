import theme from "@/app/theme";
import { PauseOutlined, PlayArrowOutlined, SkipNextOutlined, SkipPreviousOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

interface MusicPlayerDummyProps {
	color: string;
}

export default function MusicPlayerDummy(props: MusicPlayerDummyProps) {
	return (
		<Box sx={{ display: "flex", p: 1, border: `1px solid ${props.color}`, borderRadius: "1px" }} gap={1}>
			<Box sx={{ display: "flex" }} gap={1}>
				<IconButton sx={{ p: 0 }}>
					<SkipPreviousOutlined
						sx={{
							color: props.color,
							fontSize: "20px",
						}}
					/>
				</IconButton>
				<IconButton sx={{ p: 0 }}>
					<PlayArrowOutlined sx={{ color: props.color, fontSize: "20px" }} />
				</IconButton>
				<IconButton sx={{ p: 0 }}>
					<PauseOutlined sx={{ color: props.color, fontSize: "20px" }} />
				</IconButton>
				<IconButton sx={{ p: 0 }}>
					<SkipNextOutlined
						sx={{
							color: props.color,
							fontSize: "20px",
						}}
					/>
				</IconButton>
			</Box>
		</Box>
	);
}
