import reportText from "@/app/data/reportText";
import theme from "@/app/theme";
import { PauseOutlined, PlayArrowOutlined, SkipNextOutlined, SkipPreviousOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import React from "react";
import { WaveForm } from "wavesurfer-react";
import { WaveSurfer } from "wavesurfer-react/dist/utils/createWavesurfer";

export default function MusicPlayer() {
	const searchParams = useSearchParams();
	const allSongs = reportText.map((section) => `/music/${section.song}`);
	const allSongNames = reportText.map((section) => section.songName);

	const [currentSongIdx, setCurrentSongIdx] = React.useState<number | undefined>(undefined);
	React.useEffect(() => {
		const sectionParam = searchParams.get("section");
		if (sectionParam === null) {
			setCurrentSongIdx(0);
		} else {
			if (currentSongIdx === undefined) {
				const sectionParamConversion = Number(sectionParam);
				if (!isNaN(sectionParamConversion)) {
					setCurrentSongIdx(sectionParamConversion);
				}
			}
		}
	}, [searchParams]);

	const waveFormHeight = 25;
	const waveFormWidth = 275;
	const [wavesurfer, setWavesurfer] = React.useState<WaveSurfer | undefined>(undefined);
	const [wavesurferLoading, setWavesurferLoading] = React.useState<boolean>(false);
	React.useEffect(() => {
		if (currentSongIdx !== undefined) {
			setWavesurferLoading(true);
			wavesurfer?.destroy();
			const newWavesurfer = WaveSurfer.create({
				container: "#waveform",
				waveColor: theme.palette.amber.main,
				progressColor: theme.palette.amber.dark,
				height: waveFormHeight,
				width: waveFormWidth,
				barWidth: 2,
				barGap: 1,
				barRadius: 0,
				url: allSongs[currentSongIdx],
			});
			setWavesurfer(newWavesurfer);
			setWavesurferLoading(false);
		}
	}, [currentSongIdx]);

	React.useEffect(() => {
		console.log("wavesurferLoading:");
		console.log(wavesurferLoading);
	}, [wavesurferLoading]);

	const [playing, setPlaying] = React.useState<boolean>(false);

	const handlePlay = React.useCallback(() => {
		setPlaying(!playing);
		wavesurfer && wavesurfer.play();
	}, [wavesurfer]);

	const handlePause = React.useCallback(() => {
		setPlaying(!playing);
		wavesurfer && wavesurfer.pause();
	}, [wavesurfer]);

	const handleSongBack = () => {
		if (currentSongIdx !== undefined && currentSongIdx !== 0) {
			setCurrentSongIdx((prevSongIdx) => prevSongIdx! - 1);
		}
	};

	const handleSongForward = () => {
		if (currentSongIdx !== undefined && currentSongIdx < allSongs.length) {
			setCurrentSongIdx((prevSongIdx) => prevSongIdx! + 1);
		}
	};

	return (
		<Box sx={{ display: "flex", p: 1 }} gap={1}>
			<Box>
				<Box sx={{ display: "flex" }} gap={1}>
					<IconButton sx={{ p: 0 }} onClick={() => handleSongBack()}>
						<SkipPreviousOutlined
							sx={{
								color: currentSongIdx !== 0 ? theme.palette.amber.main : theme.palette.amber.contrastText,
								fontSize: "20px",
							}}
						/>
					</IconButton>
					<IconButton sx={{ p: 0 }} onClick={() => handlePlay()}>
						<PlayArrowOutlined sx={{ color: theme.palette.amber.main, fontSize: "20px" }} />
					</IconButton>
					<IconButton sx={{ p: 0 }} onClick={() => handlePause()}>
						<PauseOutlined sx={{ color: theme.palette.amber.main, fontSize: "20px" }} />
					</IconButton>
					<IconButton sx={{ p: 0 }} onClick={() => handleSongForward()}>
						<SkipNextOutlined
							sx={{
								color:
									currentSongIdx !== allSongs.length - 1 ? theme.palette.amber.main : theme.palette.amber.contrastText,
								fontSize: "20px",
							}}
						/>
					</IconButton>
				</Box>
				<Box>
					<Typography variant="caption"></Typography>
				</Box>
			</Box>
			<Box sx={{ display: "flex", flexDirection: "column", ml: 0.5, width: `${waveFormWidth}` }}>
				{wavesurferLoading && (
					<Typography variant="caption" sx={{ color: theme.palette.amber.main }}>
						Loading...
					</Typography>
				)}
				<WaveForm id="waveform" />
				{currentSongIdx !== undefined ? (
					<Typography variant="caption" sx={{ color: theme.palette.amber.main }}>
						{allSongNames[currentSongIdx]}
					</Typography>
				) : (
					<React.Fragment />
				)}
			</Box>
		</Box>
	);
}
