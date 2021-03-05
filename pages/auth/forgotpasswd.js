const Forgotpasswd = () => {
	return (
		<div
			className="flex items-center justify-center h-screen bg-no-repeat bg-cover"
			// style={{ backgroundImage: "url('/login.jpg')" }}
		>
			<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col max-w-md">
				<div className="mb-4 border-b border-gray-400 flex justify-between">
					<h1 className="block text-grey-darker text-xl font-bold mb-2">
						Esqueceu a sua senha?
					</h1>
					<a href="/">X</a>
				</div>
				<div className="mb-4">
					<label
						className="block text-grey-darker text-sm font-bold mb-2"
						for="username"
					>
						Email
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
						id="email"
						type="email"
						placeholder="Email"
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
						type="button"
					>
						Enviar
					</button>
				</div>
			</div>
		</div>
	);
};

export default Forgotpasswd;
