import { ReportTextImageState } from "@/app/data/reportTextInterface";
import theme from "@/app/theme";
import { Box, Typography } from "@mui/material";
import LazyLoad from "react-lazy-load";
import Markdown from "react-markdown";

interface TextAndImageProps {
	text?: string;
	image: ReportTextImageState;
	idx: number;
}

export default function TextAndImage(props: TextAndImageProps) {
	return (
		<Box sx={{ display: "flex", flexDirection: props.idx % 2 ? "row" : "row-reverse" }} gap={4}>
			<Box sx={{ flex: "0 0 auto", display: "flex", flexDirection: "column", justifyContent: "center" }} gap={1}>
				<LazyLoad threshold={0.95}>
					<img
						style={{ height: "auto", width: "400px", border: "5px solid white" }}
						src={`/${props.image.src}`}
						alt={props.image.caption}
					/>
				</LazyLoad>
				<Typography variant="subtitle2" sx={{ color: theme.palette.primary.main }}>
					{props.image.caption}
				</Typography>
			</Box>
			<Box
				sx={{
					flex: "1 1 100%",
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
				}}
			>
				<span
					style={{
						maxWidth: "600px",
						fontFamily: "inherit",
						textAlign: props.idx % 2 ? "left" : "right",
					}}
				>
					<Markdown>{props.text}</Markdown>
				</span>
			</Box>
		</Box>
	);
}
