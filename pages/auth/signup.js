import Authlayout from "../../components/Layout/Authlayout";

const signup = () => {
	return (
		<Authlayout>
			<div style={{ fontFamily: "Roboto" }}>
				<div
					className="w-full h-screen md:-mx-4"
					style={{ filter: "blur(6px)", backgroundImage: "url('/login.jpg')" }}
				></div>
				<div
					className="absolute w-auto bg-white"
					style={{
						transform: "translate(-50%, -50%)",
						top: "50%",
						left: "50%",
					}}
				>
					<div className="flex justify-center -mt-10">
						<img
							className="border-2 w-20 h-20 rounded-full"
							src="/kriolfavicon.png"
						/>
					</div>
					<form className="px-12 py-10">
						<div className="w-full mb-2">
							<div className="flex items-center">
								<i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
								<input
									type="text"
									placeholder="Username ou E-mail"
									className="-mx-6 px-8  w-full border rounded py-1 text-gray-700"
								/>
							</div>
						</div>
						<div className="w-full mb-2">
							<div className="flex items-center">
								<i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"></i>
								<input
									type="text"
									placeholder="Password"
									className="-mx-6 px-8 w-full border rounded py-1 text-gray-700"
								/>
							</div>
						</div>

						<div className="w-full mb-4">
							<div className="flex items-center">
								<i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"></i>
								<input
									type="text"
									placeholder="repetir Password"
									className="-mx-6 px-8 w-full border rounded py-1 text-gray-700"
								/>
							</div>
						</div>

						<div className="mt-8 flex justify-between">
							<div>
								<a
									href="/"
									className="bg-white font-bold hover:bg-gray-400 border border-gray-400 text-xs text-gray-700 hover:text-white rounded px-4 py-2"
								>
									Cancelar
								</a>
							</div>
							<div>
								<button
									type="submit"
									className="bg-white font-bold hover:bg-red-700 border border-red-700 text-xs text-gray-700 hover:text-white rounded px-4 py-2"
								>
									Registrar
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</Authlayout>
		// </div>
	);
};

export default signup;
