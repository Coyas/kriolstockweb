const Flexa = () => {
	const subir = () => {
		alert("subir ao topo");
	};
	return (
		<div className="bottom-20 fixed">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				width="20"
				height="20"
				// fill="currentColor"
				className="absolute right-0 text-red-500 cursor-pointer"
				onClick={subir}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M5 11l7-7 7 7M5 19l7-7 7 7"
				/>
			</svg>
		</div>
	);
};

export default Flexa;
