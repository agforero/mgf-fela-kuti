import { ArrowForwardOutlined } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function Intro() {
	return (
		<Container sx={{ display: "flex", alignItems: "center", height: "100%" }}>
			<Box sx={{ width: "100%", overflowY: "auto" }}>
				<Box sx={{ display: "flex", flexDirection: "column", width: "100%", overflowY: "auto" }} gap={3}>
					<Typography>Welcome to</Typography>
					<Typography variant="h1" id="mainBanner" style={{ textAlign: "center", fontWeight: 500 }}>
						Fela Kuti: Father of Afrobeat
					</Typography>
					<Typography variant="subtitle1" style={{ textAlign: "center" }}>
						A report by Maximos Forero.
					</Typography>
					<Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
						<Link href="/tutorial">
							<Button color="amber" variant="contained" endIcon={<ArrowForwardOutlined />}>
								Proceed
							</Button>
						</Link>
					</Box>
				</Box>
			</Box>
		</Container>
	);
}
