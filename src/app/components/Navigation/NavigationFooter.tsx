"use client";

import { ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import NavigationButton from "./NavigationButton";
import React, { Suspense } from "react";
import reportText from "@/app/data/reportText";
import { handleNext, handlePrevious } from "./handleNavigation";

export default function NavigationFooter() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [section, setSection] = React.useState<number>(NaN);
	const [subSection, setSubSection] = React.useState<number>(NaN);

	React.useEffect(() => {
		const sectionParam = searchParams.get("section");
		const subSectionParam = searchParams.get("subSection");

		setSection(sectionParam !== null ? Number(sectionParam) : NaN);
		setSubSection(subSectionParam !== null ? Number(subSectionParam) : NaN);
	}, [searchParams]);

	const [previousDisabled, setPreviousDisabled] = React.useState<boolean>(true);
	const [nextDisabled, setNextDisabled] = React.useState<boolean>(true);
	React.useEffect(() => {
		setPreviousDisabled(isNaN(section) || isNaN(subSection) || (section === 0 && subSection === 0));
		setNextDisabled(
			isNaN(section) ||
				isNaN(subSection) ||
				(section === reportText.length - 1 && subSection === reportText.slice(-1)[0].subSections.length - 1),
		);
	}, [section, subSection]);

	return (
		<Suspense>
			<Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
				<NavigationButton
					text="Previous"
					onPress={() => handlePrevious(section, subSection, router)}
					disabled={previousDisabled}
					startIcon={<ArrowBackOutlined />}
				/>
				<NavigationButton
					text="Next"
					onPress={() => handleNext(section, subSection, router)}
					disabled={nextDisabled}
					endIcon={<ArrowForwardOutlined />}
				/>
			</Box>
		</Suspense>
	);
}
