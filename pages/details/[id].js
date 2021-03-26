import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Card from "../../components/Card";

const Detail = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<Layout>
			<section className="m-10 flex justify-center">
				<div className="w-full mr-2">
					<img className="w-full rounded" src={`/DB/a.jpg`} />
				</div>
				{/* <!-- This example requires Tailwind CSS v2.0+ --> */}
				<div className="bg-white shadow overflow-hidden sm:rounded-lg">
					<div className="px-4 py-5 sm:px-6">
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							Imformaçao
						</h3>
						<p className="mt-1 max-w-2xl text-sm text-gray-500">
							detalhes sobre a imagem
						</p>
					</div>
					<div className="border-t border-gray-200">
						<dl>
							<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Local</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									Ilha brava
								</dd>
							</div>
							<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Produtor</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									Kalua Films
								</dd>
							</div>
							{/* <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Email address</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									margotfoster@example.com
								</dd>
							</div> */}
							<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Tags</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									#brava / #caboverde
								</dd>
							</div>
							<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Detalhes</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
									incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
									consequat sint. Sit id mollit nulla mollit nostrud in ea
									officia proident. Irure nostrud pariatur mollit ad adipisicing
									reprehenderit deserunt qui eu.
								</dd>
							</div>
							<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Preço</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ">
									<span className="bg-green-500 text-white">GRATIS</span>
								</dd>
							</div>
							<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Ficheiros</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									<ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
										<li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
											<div className="w-0 flex-1 flex items-center">
												{/* <!-- Heroicon name: paper-clip --> */}
												<svg
													className="flex-shrink-0 h-5 w-5 text-gray-400"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
														clipRule="evenodd"
													/>
												</svg>
												<span className="ml-2 flex-1 w-0 truncate">
													ilha_brava_4k.zip
												</span>
											</div>
											<div className="ml-4 flex-shrink-0">
												<a
													href={`/DB/${id}.jpg`}
													className="flex items-center justify-center rounded-md bg-red-400 font-medium p-2 text-gray-200 hover:text-white hover:bg-red-500"
												>
													Download
												</a>
											</div>
										</li>
									</ul>
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</section>
			<section className="m-10">
				<h1 className="text-md font-bold border-b border-black ml-1">
					Sugestoes
				</h1>
				<Card />
			</section>
		</Layout>
	);
};

export default Detail;
