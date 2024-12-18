import { ReportTextImageState } from "@/app/data/reportTextInterface";
import theme from "@/app/theme";
import { Box, Typography } from "@mui/material";
import LazyLoad from "react-lazy-load";
import Markdown from "react-markdown";
import YouTubeEmbed from "./YouTubeEmbed";

interface TextAndVideoProps {
	text?: string;
	embedId: string;
	idx: number;
}

export default function TextAndVideo(props: TextAndVideoProps) {
	return (
		<Box sx={{ display: "flex", flexDirection: props.idx % 2 ? "row" : "row-reverse" }} gap={4}>
			<Box sx={{ flex: "0 0 auto", display: "flex", flexDirection: "column", justifyContent: "center" }} gap={1}>
				<LazyLoad threshold={0.95}>
					{/* <YouTubeEmbed embedId={props.embedId} /> */}
					<Box>
						<iframe
							width="560"
							height="315"
							src={`https://www.youtube.com/embed/${props.embedId}`}
							style={{ border: "5px solid white" }}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						></iframe>
					</Box>
				</LazyLoad>
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
