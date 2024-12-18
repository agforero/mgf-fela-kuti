import React from "react";

export default function FadeIn() {
	const [loaded, setLoaded] = React.useState<boolean>(false);
	const onLoad = () => {
		setLoaded(true);
	};

	return;
}
