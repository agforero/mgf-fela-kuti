"use client";

import { Box } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import { handleNext, handlePrevious } from "../components/Navigation/handleNavigation";
import ReportTextBody from "../components/ReportTextBody/ReportTextBody";

export default function Project() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [section, setSection] = React.useState<number>(NaN);
	const [subSection, setSubSection] = React.useState<number>(NaN);

	React.useEffect(() => {
		const sectionParam = searchParams?.get("section");
		const subSectionParam = searchParams?.get("subSection");

		setSection(sectionParam !== null ? Number(sectionParam) : NaN);
		setSubSection(subSectionParam !== null ? Number(subSectionParam) : NaN);
	}, [searchParams]);

	React.useEffect(() => {
		document.addEventListener("keydown", (event) => {
			if (!isNaN(section) && !isNaN(subSection)) {
				if (event.key === "ArrowLeft") {
					handlePrevious(section, subSection, router);
				} else if (event.key === "ArrowRight") {
					handleNext(section, subSection, router);
				}
			}
		});
	}, [section, subSection]); // eslint-disable-line

	return (
		<Suspense>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					overflowY: "hidden",
					height: "100%",
					width: "100%",
				}}
			>
				<ReportTextBody />
			</Box>
		</Suspense>
	);
}
