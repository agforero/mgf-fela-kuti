"use client";

import theme from "@/app/theme";
import {
	Box,
	Button,
	Container,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	Typography,
} from "@mui/material";
import React from "react";
import NavigationButton from "../components/Navigation/NavigationButton";
import {
	ArrowBackOutlined,
	ArrowForwardOutlined,
	HelpOutlineOutlined,
	PauseOutlined,
	PlayArrowOutlined,
	SkipNextOutlined,
	SkipPreviousOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import MusicPlayerDummy from "../components/MusicPlayer/MusicPlayerDummy";

export default function Tutorial() {
	const [step, setStep] = React.useState<number>(0);

	const handlePreviousStep = () => {
		setStep((prevStep) => prevStep - 1);
	};

	const handleNextStep = () => {
		setStep((prevStep) => prevStep + 1);
	};

	// this code is awful but I feel silly abstracting these steps
	return (
		<Box sx={{ display: "flex", flexDirection: "column", height: "100%", width: "100%" }}>
			<Box sx={{ flex: "0 0 auto" }}>
				{step < 2 ? (
					<Box sx={{ display: "flex", flexDirection: "row-reverse", p: 1 }}>
						<NavigationButton text="About" disabled onPress={() => {}} endIcon={<HelpOutlineOutlined />} />
					</Box>
				) : step === 2 ? (
					<Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
						<MusicPlayerDummy color="black" />
						<NavigationButton text="About" onPress={() => {}} endIcon={<HelpOutlineOutlined />} />
					</Box>
				) : step === 3 ? (
					<Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
						<MusicPlayerDummy color={theme.palette.amber.main} />
						<NavigationButton text="About" onPress={() => {}} endIcon={<HelpOutlineOutlined />} />
					</Box>
				) : (
					<React.Fragment />
				)}
			</Box>
			<Box
				sx={{ flex: "1 1 100%", display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}
			>
				<Container>
					<Stepper activeStep={step} orientation="vertical" id="tutorial">
						<Step>
							<StepLabel>
								<span style={{ display: "flex", justifyContent: "space-between" }}>
									<span>Tutorial</span>
								</span>
							</StepLabel>
							<StepContent>
								<Box sx={{ display: "flex", flexDirection: "column" }} gap={2}>
									<span style={{ color: "white" }}>
										<Typography>The following is a tutorial on how to navigate the page.</Typography>
									</span>
									<Box sx={{ display: "flex", width: "100%" }} gap={1}>
										<Link href="/">
											<Button
												variant="contained"
												size="small"
												startIcon={<ArrowBackOutlined />}
												onClick={() => {}}
												onTouchStart={() => {}}
											>
												Previous
											</Button>
										</Link>
										<Button
											variant="contained"
											size="small"
											endIcon={<ArrowForwardOutlined />}
											onClick={() => handleNextStep()}
											onTouchStart={() => handleNextStep()}
										>
											Next
										</Button>
									</Box>
								</Box>
							</StepContent>
						</Step>
						<Step>
							<StepLabel>
								<span style={{ display: "flex", justifyContent: "space-between" }}>
									<span>Navigate between pages</span>
									<span>◱ ◲</span>
								</span>
							</StepLabel>
							<StepContent>
								<Box sx={{ display: "flex", flexDirection: "column" }} gap={2}>
									<span style={{ color: "white" }}>
										<Typography sx={{ display: "inline-block" }}>Use the</Typography>
										<Box sx={{ display: "inline-block", px: "0.25em" }}>
											<ArrowBackOutlined sx={{ fontSize: "1em" }} />
										</Box>
										<Typography sx={{ display: "inline-block" }} variant="button">
											Previous
										</Typography>
										<Typography sx={{ display: "inline-block" }}>&nbsp;and&nbsp;</Typography>
										<Typography sx={{ display: "inline-block" }} variant="button">
											Next
										</Typography>
										<Box sx={{ display: "inline-block", px: "0.25em" }}>
											<ArrowForwardOutlined sx={{ fontSize: "1em" }} />
										</Box>
										<Typography sx={{ display: "inline-block" }}>
											buttons at the bottom of the page to navigate between sections. You can also use the [⇦] left and
											right [⇨] arrow keys on your keyboard.
										</Typography>
									</span>
									<Box sx={{ display: "flex", width: "100%" }} gap={1}>
										<Button
											variant="contained"
											size="small"
											startIcon={<ArrowBackOutlined />}
											onClick={() => handlePreviousStep()}
											onTouchStart={() => handlePreviousStep()}
										>
											Previous
										</Button>
										<Button
											variant="contained"
											size="small"
											endIcon={<ArrowForwardOutlined />}
											onClick={() => handleNextStep()}
											onTouchStart={() => handleNextStep()}
										>
											Next
										</Button>
									</Box>
								</Box>
							</StepContent>
						</Step>
						<Step>
							<StepLabel>
								<span style={{ display: "flex", justifyContent: "space-between" }}>
									<span>Access tutorial and more information</span>
									<span>◳</span>
								</span>
							</StepLabel>
							<StepContent>
								<Box sx={{ display: "flex", flexDirection: "column" }} gap={2}>
									<span style={{ color: "white" }}>
										<Typography sx={{ display: "inline-block" }}>Use the&nbsp;</Typography>
										<Typography sx={{ display: "inline-block" }} variant="button">
											About
										</Typography>
										<Box sx={{ display: "inline-block", px: "0.25em" }}>
											<HelpOutlineOutlined sx={{ fontSize: "1em" }} />
										</Box>
										<Typography sx={{ display: "inline-block" }}>
											button at the top of the page to see more info about the site.
										</Typography>
									</span>
									<Box sx={{ display: "flex", width: "100%" }} gap={1}>
										<Button
											variant="contained"
											size="small"
											startIcon={<ArrowBackOutlined />}
											onClick={() => handlePreviousStep()}
											onTouchStart={() => handlePreviousStep()}
										>
											Previous
										</Button>
										<Button
											variant="contained"
											size="small"
											endIcon={<ArrowForwardOutlined />}
											onClick={() => handleNextStep()}
											onTouchStart={() => handleNextStep()}
										>
											Next
										</Button>
									</Box>
								</Box>
							</StepContent>
						</Step>
						<Step>
							<StepLabel>
								<span style={{ display: "flex", justifyContent: "space-between" }}>
									<span>Use the Music Player</span>
									<span>◰</span>
								</span>
							</StepLabel>
							<StepContent>
								<Box sx={{ display: "flex", flexDirection: "column" }} gap={2}>
									<Box style={{ color: "white" }}>
										<Typography>
											<span>
												It is difficult to enunciate the power of Fela Kuti&apos;s music with words. The best way to
												understand his music is to listen to it.&nbsp;
											</span>
											<span>There is a music player included with this project. You can find the&nbsp;</span>
											<span style={{ color: theme.palette.amber.main }}>Music Player&nbsp;</span>
											<span>
												in the top-left corner of the screen. There, you can find all songs mentioned in this project,
												and listen while you read.
											</span>
										</Typography>
										<List>
											<ListItem>
												<ListItemAvatar>
													<SkipNextOutlined sx={{ backgroundColor: "black", color: theme.palette.amber.main }} />
												</ListItemAvatar>
												<ListItemText>Goes to the previous song,</ListItemText>
											</ListItem>
											<ListItem>
												<ListItemAvatar>
													<PauseOutlined sx={{ backgroundColor: "black", color: theme.palette.amber.main }} />
												</ListItemAvatar>
												<ListItemText>pauses the song,</ListItemText>
											</ListItem>
											<ListItem>
												<ListItemAvatar>
													<PlayArrowOutlined sx={{ backgroundColor: "black", color: theme.palette.amber.main }} />
												</ListItemAvatar>
												<ListItemText>plays the song, and</ListItemText>
											</ListItem>
											<ListItem>
												<ListItemAvatar>
													<SkipNextOutlined sx={{ backgroundColor: "black", color: theme.palette.amber.main }} />
												</ListItemAvatar>
												<ListItemText>skips to the next song.</ListItemText>
											</ListItem>
										</List>
									</Box>
									<Box sx={{ display: "flex", width: "100%" }} gap={1}>
										<Button
											variant="contained"
											size="small"
											endIcon={<ArrowBackOutlined />}
											onClick={() => handlePreviousStep()}
											onTouchStart={() => handlePreviousStep()}
										>
											Previous
										</Button>
										<Link href="/project">
											<Button
												variant="contained"
												size="small"
												endIcon={<ArrowForwardOutlined />}
												onClick={() => {}}
												onTouchStart={() => {}}
											>
												Proceed
											</Button>
										</Link>
									</Box>
								</Box>
							</StepContent>
						</Step>
					</Stepper>
				</Container>
			</Box>
			<Box sx={{ flex: "0 0 auto", display: "flex", justifyContent: "space-between", p: 1 }}>
				<NavigationButton text="Previous" onPress={() => {}} disabled={step < 1} startIcon={<ArrowBackOutlined />} />
				<NavigationButton text="Next" onPress={() => {}} disabled={step < 1} endIcon={<ArrowForwardOutlined />} />
			</Box>
		</Box>
	);
}
