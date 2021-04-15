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
					<div className="px-12 py-10">
						<div className="w-full mb-4">
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
						<div className="flex justify-between mt-4 text-xs">
							<a href="/auth/forgotpasswd">Esqueceu a senha?</a>
							<a href="/auth/signup">Ainda nao tem conta?</a>
						</div>
						<div className="mt-8 flex justify-between">
							<div className="flex items-center">
								<input type="checkbox" className="w-4 h-4 mr-2" />
								<span className="text-xs text-gray-700">Remember Me</span>
							</div>
							<div>
								<button
									type="submit"
									type="text"
									className="bg-white font-bold hover:bg-red-700 border border-red-700 text-xs text-gray-700 hover:text-white rounded px-4 py-2"
								>
									Entrar
								</button>
							</div>
						</div>
						<div className=""></div>
						<div className="mt-5">
							<div className="flex flex-row justify-between">
								<a
									type="text"
									className="bg-blue-400 text-md text-white rounded px-6 py-3 font-bold"
								>
									Facebook
								</a>
								<a
									type="text"
									className="bg-red-400 text-white text-md  rounded px-8 py-3 font-bold"
								>
									Google
								</a>
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
