"use client";

import { HelpOutlineOutlined, MusicNoteOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import NavigationButton from "./NavigationButton";
import React from "react";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { useRouter } from "next/navigation";

export default function NavigationHeader() {
	const router = useRouter();

	return (
		<Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
			<MusicPlayer />
			<NavigationButton text="About" onPress={() => router.push("/tutorial")} endIcon={<HelpOutlineOutlined />} />
		</Box>
	);
}
