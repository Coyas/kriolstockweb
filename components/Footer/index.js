// &copy; kriolStock 2021 by TerraSsytem

const Footer = () => {
	return (
		<footer className="bg-gray-800">
			{/* <div>alguns dados para se por no footer</div>
			<p className="divide-y divide-white">terrs</p> */}
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<a className="text-gray-400">&copy; KriolStock 2021</a>
					<a
						href="#"
						className="text-gray-300 hover:text-white hover:underline"
					>
						Termos
					</a>
					<a
						href="#"
						className="text-gray-300 hover:text-white hover:underline"
					>
						Privacidade
					</a>
					<a
						href="#"
						className="text-gray-300 hover:text-white hover:underline"
					>
						Ajuda
					</a>
					<a
						href="#"
						className="text-gray-300 hover:text-white hover:underline"
					>
						<img src="/kriolStockLogo2.png" width="100" />
					</a>
					<a
						href="#"
						className="text-gray-300 hover:text-white hover:underline"
					>
						preços
					</a>
					<a
						href="#"
						className="text-gray-300 hover:text-white hover:underline"
					>
						Blog
					</a>
					<a
						href="#"
						className="text-gray-300 hover:text-white hover:underline"
					>
						Sobre
					</a>
					<a
						href="#"
						className="text-gray-300 hover:text-white hover:underline"
					>
						Contribua
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
