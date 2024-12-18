import { ReportTextSubSectionState } from "@/app/data/reportTextInterface";
import { Box, Typography } from "@mui/material";
import React from "react";
import Markdown from "react-markdown";
import TextAndImage from "./TextAndImage";
import TextAndVideo from "./TextAndVideo";

interface ReportTextSubSectionDisplayProps {
	subSection?: ReportTextSubSectionState;
	idx?: number;
}

export default function ReportTextSubSectionDisplay(props: ReportTextSubSectionDisplayProps) {
	return !!props.subSection ? (
		!!props.subSection.image ? (
			<Box sx={{ width: "100%", overflowY: "auto" }}>
				<TextAndImage
					key={!!props.subSection ? `${props.subSection.text}-${props.idx}` : undefined}
					text={props.subSection.text}
					image={props.subSection.image}
					idx={props.idx || 0}
				/>
			</Box>
		) : !!props.subSection.video ? (
			<Box sx={{ width: "100%", overflowY: "auto" }}>
				<TextAndVideo
					key={!!props.subSection ? `${props.subSection.text}-${props.idx}` : undefined}
					text={props.subSection.text}
					embedId={props.subSection.video}
					idx={props.idx || 0}
				/>
			</Box>
		) : (
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					height: "100%",
					width: "100%",
					position: "relative",
				}}
			>
				<span
					id="markdownContainer"
					style={{
						left: "50%",
						translate: "-50% 0",
						position: "absolute",
						maxHeight: "100%",
						width: "100%",
						overflowX: "hidden",
						overflowY: "auto",
						wordBreak: "break-word",
						padding: "0px 10px",
					}}
				>
					<Markdown>{props.subSection.text}</Markdown>
				</span>
			</Box>
		)
	) : (
		<React.Fragment />
	);
}
