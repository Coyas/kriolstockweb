import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const GET_CATEGRIAS = gql`
	query AllCategorias {
		getCategorias {
			id
			nome
		}
	}
`;

const NavBar = () => {
	// const { loading, error, data } = useQuery(GET_CATEGRIAS);
	// if (error) return <div>Error loading players.</div>;
	// if (loading) return <div>...Loading...</div>;
	// // const getCategorias = data.AllCategorias
	// const { AllCategorias: getCategorias } = data;
	// const ttt = data.AllCategorias;

	// console.log("data");
	// console.log(data);
	// console.log("getCategorias");
	// console.log(getCategorias);
	// console.log("ttt");
	// console.log(ttt);

	const loading = true;
	const user = true;

	const [uvisivel, Setuvisivel] = useState(false);
	const [mvisivel, Setmvisivel] = useState(true);

	const UvisivelClick = () => {
		Setuvisivel(!uvisivel);
	};

	const MvisivelClick = () => {
		Setmvisivel(!mvisivel);
	};

	return (
		// <!-- This example requires Tailwind CSS v2.0+ -->
		<nav className="bg-white sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
				<div className="relative flex items-center justify-between h-16">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						{/* <!-- Mobile menu button--> */}
						<button
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-expanded="false"
							onClick={MvisivelClick}
						>
							<span className="sr-only">Open main menu</span>
							{/* <!-- Icon when menu is closed. -->
									<!--
										Heroicon name: menu

										Menu open: "hidden", Menu closed: "block"
									--> */}
							<svg
								className={`${mvisivel ? "block" : "hidden"} h-6 w-6`}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="black"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
							{/* <!-- Icon when menu is open. -->
									<!--
										Heroicon name: x

										Menu open: "block", Menu closed: "hidden"
									--> */}
							<svg
								className={`${mvisivel ? "hidden" : "block"} h-6 w-6`}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex-shrink-0 flex items-center">
							<a href="/">
								<img
									className="block lg:hidden h-11 w-auto"
									src="/image12.png"
									alt="kriolStocklogo"
									width="135"
									height="32"
								/>
								<img
									className="hidden lg:block h-11 w-auto"
									src="/image12.png"
									alt="kriolStocklogo"
									width="135"
									height="32"
								/>
							</a>
						</div>
						<div className="hidden sm:block sm:ml-6">
							<div className="flex space-x-4">
								{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-blue-400 hover:text-white" --> */}
								<a
									href="/"
									className="bg-blue-400 text-white px-3 py-2 rounded-md text-sm font-medium"
								>
									Home
								</a>
								<a
									href="#"
									className="text-gray-700 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								>
									Imagens
								</a>
								<a
									href="#"
									className="text-gray-700 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								>
									Ilustraçoes
								</a>
								<a
									href="#"
									className="text-gray-700 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								>
									icons
								</a>
								<a
									href="#"
									className="text-gray-700 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								>
									Videos
								</a>
								<a
									href="#"
									className="text-gray-700 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								>
									Blog
								</a>
							</div>
						</div>
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<button className="bg-blue-400 p-1 rounded-full text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white">
							<span className="sr-only">View notifications</span>
							{/* <!-- Heroicon name: bell --> */}
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
								/>
							</svg>
						</button>

						{/* <!-- Profile dropdown --> */}
						<div className="ml-3 relative">
							{/* {!loading &&
										(user ? ( */}
							<div>
								<div>
									<button
										className="bg-white hover:bg-blue-500 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
										id="user-menu"
										aria-haspopup="true"
										onClick={UvisivelClick}
									>
										<span className="sr-only">Open user menu</span>
										<Image
											className="h-8 w-8 rounded-full"
											src="/userIcon2.png"
											alt="utilizador"
											width="35"
											height="35"
										/>
									</button>
								</div>
								{/* <!--
										Profile dropdown panel, show/hide based on dropdown state.

										Entering: "transition ease-out duration-100"
										From: "transform opacity-0 scale-95"
										To: "transform opacity-100 scale-100"
										Leaving: "transition ease-in duration-75"
										From: "transform opacity-100 scale-100"
										To: "transform opacity-0 scale-95"
									--> */}
								<div
									className={`${
										uvisivel ? "" : "hidden"
									} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5`}
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="user-menu"
								>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										role="menuitem"
									>
										Ailton Duarte
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										role="menuitem"
									>
										Configuraçoes
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										role="menuitem"
									>
										Sair
									</a>
								</div>
							</div>
							{/* ) : (
											<Link href="/auth/login">
												<a className="text-gray-200">
													Log in
													<span className="icon">
														<i className="far fa-user"></i>
													</span>
												</a>
											</Link>
										))} */}
						</div>
					</div>
				</div>
			</div>

			{/* <!--
		    Mobile menu, toggle classes based on menu state.

		    Menu open: "block", Menu closed: "hidden"
		  --> */}
			<div className={`${mvisivel ? "hidden sm:hidden" : "block"}`}>
				<div className="px-2 pt-2 pb-3 space-y-1">
					{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-100 hover:bg-blue-400 hover:text-white" --> */}
					<a
						href="#"
						className="bg-blue-400 text-white block px-3 py-2 rounded-md text-base font-medium"
					>
						Home
					</a>
					<a
						href="#"
						className="text-gray-700 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					>
						Imagens
					</a>
					<a
						href="#"
						className="text-gray-700 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					>
						Ilustraçoes
					</a>
					<a
						href="#"
						className="text-gray-700 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					>
						Icons
					</a>
					<a
						href="#"
						className="text-gray-700 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					>
						Videos
					</a>
					<a
						href="#"
						className="text-gray-700 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
					>
						Blog
					</a>
				</div>
			</div>
		</nav>
		// <!-- This example requires Tailwind CSS v2.0+ -->
		// <div>
		// 	<nav class="bg-gray-800">
		// 		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		// 			<div class="flex items-center justify-between h-16">
		// 				<div class="flex items-center">
		// 					<div class="flex-shrink-0">
		// 						<img
		// 							class="h-8 w-8"
		// 							src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
		// 							alt="Workflow"
		// 						/>
		// 					</div>
		// 					<div class="hidden md:block">
		// 						<div class="ml-10 flex items-baseline space-x-4">
		// 							{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
		// 							<a
		// 								href="#"
		// 								class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
		// 							>
		// 								Dashboard
		// 							</a>

		// 							<a
		// 								href="#"
		// 								class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
		// 							>
		// 								Team
		// 							</a>

		// 							<a
		// 								href="#"
		// 								class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
		// 							>
		// 								Projects
		// 							</a>

		// 							<a
		// 								href="#"
		// 								class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
		// 							>
		// 								Calendar
		// 							</a>

		// 							<a
		// 								href="#"
		// 								class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
		// 							>
		// 								Reports
		// 							</a>
		// 						</div>
		// 					</div>
		// 				</div>
		// 				<div class="hidden md:block">
		// 					<div class="ml-4 flex items-center md:ml-6">
		// 						<button class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
		// 							<span class="sr-only">View notifications</span>
		// 							{/* <!-- Heroicon name: outline/bell --> */}
		// 							<svg
		// 								class="h-6 w-6"
		// 								xmlns="http://www.w3.org/2000/svg"
		// 								fill="none"
		// 								viewBox="0 0 24 24"
		// 								stroke="currentColor"
		// 								aria-hidden="true"
		// 							>
		// 								<path
		// 									stroke-linecap="round"
		// 									stroke-linejoin="round"
		// 									stroke-width="2"
		// 									d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
		// 								/>
		// 							</svg>
		// 						</button>

		// 						{/* <!-- Profile dropdown --> */}
		// 						<div class="ml-3 relative">
		// 							<div>
		// 								<button
		// 									type="button"
		// 									class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
		// 									id="user-menu"
		// 									aria-expanded="false"
		// 									aria-haspopup="true"
		// 								>
		// 									<span class="sr-only">Open user menu</span>
		// 									<img
		// 										class="h-8 w-8 rounded-full"
		// 										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
		// 										alt=""
		// 									/>
		// 								</button>
		// 							</div>

		// 							{/* <!--
		//         Dropdown menu, show/hide based on menu state.

		//         Entering: "transition ease-out duration-100"
		//           From: "transform opacity-0 scale-95"
		//           To: "transform opacity-100 scale-100"
		//         Leaving: "transition ease-in duration-75"
		//           From: "transform opacity-100 scale-100"
		//           To: "transform opacity-0 scale-95"
		//       --> */}
		// 							<div
		// 								class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
		// 								role="menu"
		// 								aria-orientation="vertical"
		// 								aria-labelledby="user-menu"
		// 							>
		// 								<a
		// 									href="#"
		// 									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
		// 									role="menuitem"
		// 								>
		// 									Your Profile
		// 								</a>

		// 								<a
		// 									href="#"
		// 									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
		// 									role="menuitem"
		// 								>
		// 									Settings
		// 								</a>

		// 								<a
		// 									href="#"
		// 									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
		// 									role="menuitem"
		// 								>
		// 									Sign out
		// 								</a>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>
		// 				<div class="-mr-2 flex md:hidden">
		// 					{/* <!-- Mobile menu button --> */}
		// 					<button
		// 						type="button"
		// 						class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
		// 						aria-controls="mobile-menu"
		// 						aria-expanded="false"
		// 					>
		// 						<span class="sr-only">Open main menu</span>
		// 						{/* <!--
		//       Heroicon name: outline/menu

		//       Menu open: "hidden", Menu closed: "block"
		//     --> */}
		// 						<svg
		// 							class="block h-6 w-6"
		// 							xmlns="http://www.w3.org/2000/svg"
		// 							fill="none"
		// 							viewBox="0 0 24 24"
		// 							stroke="currentColor"
		// 							aria-hidden="true"
		// 						>
		// 							<path
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 								stroke-width="2"
		// 								d="M4 6h16M4 12h16M4 18h16"
		// 							/>
		// 						</svg>
		// 						{/* <!--
		//       Heroicon name: outline/x

		//       Menu open: "block", Menu closed: "hidden"
		//     --> */}
		// 						<svg
		// 							class="hidden h-6 w-6"
		// 							xmlns="http://www.w3.org/2000/svg"
		// 							fill="none"
		// 							viewBox="0 0 24 24"
		// 							stroke="currentColor"
		// 							aria-hidden="true"
		// 						>
		// 							<path
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 								stroke-width="2"
		// 								d="M6 18L18 6M6 6l12 12"
		// 							/>
		// 						</svg>
		// 					</button>
		// 				</div>
		// 			</div>
		// 		</div>

		// 		{/* <!-- Mobile menu, show/hide based on menu state. --> */}
		// 		<div class="md:hidden" id="mobile-menu">
		// 			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
		// 				{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
		// 				<a
		// 					href="#"
		// 					class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
		// 				>
		// 					Dashboard
		// 				</a>

		// 				<a
		// 					href="#"
		// 					class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
		// 				>
		// 					Team
		// 				</a>

		// 				<a
		// 					href="#"
		// 					class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
		// 				>
		// 					Projects
		// 				</a>

		// 				<a
		// 					href="#"
		// 					class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
		// 				>
		// 					Calendar
		// 				</a>

		// 				<a
		// 					href="#"
		// 					class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
		// 				>
		// 					Reports
		// 				</a>
		// 			</div>
		// 			<div class="pt-4 pb-3 border-t border-gray-700">
		// 				<div class="flex items-center px-5">
		// 					<div class="flex-shrink-0">
		// 						<img
		// 							class="h-10 w-10 rounded-full"
		// 							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
		// 							alt=""
		// 						/>
		// 					</div>
		// 					<div class="ml-3">
		// 						<div class="text-base font-medium leading-none text-white">
		// 							Tom Cook
		// 						</div>
		// 						<div class="text-sm font-medium leading-none text-gray-400">
		// 							tom@example.com
		// 						</div>
		// 					</div>
		// 					<button class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
		// 						<span class="sr-only">View notifications</span>
		// 						{/* <!-- Heroicon name: outline/bell --> */}
		// 						<svg
		// 							class="h-6 w-6"
		// 							xmlns="http://www.w3.org/2000/svg"
		// 							fill="none"
		// 							viewBox="0 0 24 24"
		// 							stroke="currentColor"
		// 							aria-hidden="true"
		// 						>
		// 							<path
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 								stroke-width="2"
		// 								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
		// 							/>
		// 						</svg>
		// 					</button>
		// 				</div>
		// 				<div class="mt-3 px-2 space-y-1">
		// 					<a
		// 						href="#"
		// 						class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
		// 					>
		// 						Your Profile
		// 					</a>

		// 					<a
		// 						href="#"
		// 						class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
		// 					>
		// 						Settings
		// 					</a>

		// 					<a
		// 						href="#"
		// 						class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
		// 					>
		// 						Sign out
		// 					</a>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</nav>
		// </div>
	);
};

export default NavBar;
