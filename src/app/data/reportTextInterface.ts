export interface ReportTextImageState {
	src: string;
	caption: string;
}

export interface ReportTextSubSectionState {
	text?: string;
	image?: ReportTextImageState;
	video?: string;
	hideSectionTitle?: boolean;
}

export interface ReportTextSectionState {
	title: string;
	subSections: Array<ReportTextSubSectionState>;
	song: string;
	songName: string;
}

type ReportTextState = Array<ReportTextSectionState>;
export default ReportTextState;
