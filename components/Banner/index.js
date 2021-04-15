const Banner = () => {
	return (
		<header
			className="bg-blue-600 bg-banner bg-no-repeat bg-cover"
			style={{ backgroundImage: "url('/Banner.png')" }}
		>
			<div className="flex justify-center pt-52 pb-52 ">
				<div className="w-11/12 md:w-2/4">
					<form className="bg-white flex items-center rounded-full shadow-xl">
						<input
							className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
							id="search"
							type="text"
							placeholder="Pesquisar por nomes, tags, outros..."
						/>
						<div className="p-4">
							<button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
								<i className="fas fa-search"></i>
							</button>
						</div>
					</form>
				</div>
			</div>
		</header>
	);
};

export default Banner;
