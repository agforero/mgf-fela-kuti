// this and handleNext() are going to trust that <ReportTextBody/> will

import reportText from "@/app/data/reportText";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// this and handleNext() are going to trust that <ReportTextBody/> will
// correctly set the searchParams
export const handlePrevious = (section: number, subSection: number, router: AppRouterInstance) => {
	if (section === 0 && subSection === 0) {
		return;
	} else if (subSection === 0) {
		const prevSectionIdx = section - 1;
		const prevSubSectionIdx = reportText[prevSectionIdx].subSections.length - 1;
		router.push(`/project?section=${prevSectionIdx}&subSection=${prevSubSectionIdx}`);
	} else {
		const prevSubSectionIdx = subSection - 1;
		router.push(`/project?section=${section}&subSection=${prevSubSectionIdx}`);
	}
};

export const handleNext = (section: number, subSection: number, router: AppRouterInstance) => {
	if (section === reportText.length - 1 && subSection === reportText.slice(-1)[0].subSections.length - 1) {
		return;
	} else if (subSection === reportText[section].subSections.length - 1) {
		const nextSectionIdx = section + 1;
		const nextSubSectionIdx = 0;
		router.push(`/project?section=${nextSectionIdx}&subSection=${nextSubSectionIdx}`);
	} else {
		const nextSubSectionIdx = subSection + 1;
		router.push(`/project?section=${section}&subSection=${nextSubSectionIdx}`);
	}
};
