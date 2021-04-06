import Authlayout from "../../components/Layout/Authlayout";

const Login = () => {
	return (
		<Authlayout>
			<div style={{ fontFamily: "Roboto" }}>
				<div
					className="w-full h-screen md:-mx-4"
					style={{ filter: "blur(6px)", backgroundImage: "url('/login.jpg')" }}
				></div>
				<div
					className="absolute w-3/5 bg-white"
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
					<div className="px-12 py-10">
						<div className="w-full mb-2">
							<div className="flex items-center">
								<i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
								<input
									type="text"
									placeholder="username"
									className="-mx-6 px-8  w-full border rounded px-3 py-1 text-gray-700"
								/>
							</div>
						</div>
						<div className="w-full mb-2">
							<div className="flex items-center">
								<i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"></i>
								<input
									type="text"
									placeholder="password"
									className="-mx-6 px-8 w-full border rounded px-3 py-1 text-gray-700"
								/>
							</div>
						</div>
						<div className="mt-8 flex justify-between">
							<div className="flex items-center">
								<input type="checkbox" className="w-4 h-4 mr-2" />
								<span className="text-xs text-gray-700">Remember Me</span>
							</div>
							<div>
								<button
									type="text"
									className="bg-yellow-400 text-xs text-gray-700 rounded px-4 py-2"
								>
									SIGN IN
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Authlayout>
		// </div>
	);
};

export default Login;
