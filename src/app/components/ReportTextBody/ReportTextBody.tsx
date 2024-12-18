import reportText from "@/app/data/reportText";
import { ReportTextSubSectionState } from "@/app/data/reportTextInterface";
import { Box, Container, Typography } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";
import React, { Suspense } from "react";
import ReportTextSubSectionDisplay from "../ReportTextSubSection/ReportTextSubSectionDisplay";
import NavigationHeader from "../Navigation/NavigationHeader";
import NavigationFooter from "../Navigation/NavigationFooter";

function getSubSection(section?: number, subSection?: number): ReportTextSubSectionState | undefined {
	if (section !== undefined && subSection !== undefined) {
		if (section < reportText.length) {
			if (subSection < reportText[section].subSections.length) {
				return reportText[section].subSections[subSection];
			}
		}
	}
	return;
}

// if this returns undefined, push 0 to router
function normalizeSearchParam(searchParam: string | undefined, withinArray: Array<any>): number | undefined {
	const conversion = Number(searchParam);
	return !isNaN(conversion) && conversion < withinArray.length ? conversion : undefined;
}

export default function ReportTextBody() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [section, setSection] = React.useState<number | undefined>(undefined);
	const [subSection, setSubSection] = React.useState<number | undefined>(undefined);

	React.useEffect(() => {
		// prettier-ignore
		const normalizedSection = normalizeSearchParam(
      searchParams.get("section") || undefined,
      reportText
    );
		if (normalizedSection === undefined) {
			router.push("/project?section=0&subSection=0");
			return;
		}

		const normalizedSubSection = normalizeSearchParam(
			searchParams.get("subSection") || undefined,
			reportText[normalizedSection].subSections,
		);
		if (normalizedSubSection === undefined) {
			router.push(`/project?section=${normalizedSection}&subSection=0`);
			return;
		}

		setSection(normalizedSection);
		setSubSection(normalizedSubSection);
	}, [searchParams]); // eslint-disable-line

	return (
		<Suspense>
			<Box sx={{ display: "flex", flexDirection: "column", height: "100%", width: "100%" }}>
				<Box sx={{ flex: "0 0 auto", p: 1 }}>
					<NavigationHeader />
				</Box>
				<Container sx={{ flex: "1 1 100%", display: "flex", alignItems: "center", overflowY: "hidden" }}>
					<ReportTextSubSectionDisplay subSection={getSubSection(section, subSection)} idx={subSection} />
				</Container>
				<Box sx={{ flex: "0 0 auto", p: 1 }}>
					<NavigationFooter />
				</Box>
			</Box>
		</Suspense>
	);
}
