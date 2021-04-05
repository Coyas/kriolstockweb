import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Collection from "../components/Collection";
import MultCard from "../components/MultCard";
import Image from "next/image";

const subscrever = () => {
	alert("subscrevendo seu email");
};

function HomePage() {
	return (
		<Layout>
			<Banner />
			<section className="pb-1">
				<div className="m-12">
					<h4 className="font-bold pb-1 mt-10 border-b border-gray-300 w-44">
						<a href="#" className="text-base uppercase">
							Coleçoes
						</a>{" "}
						recentes
					</h4>
					<Collection />
				</div>
			</section>
			{/* a segunda section cnotem um convite para as pessoas */}
			<section className="bg-gray-600 grid lg:grid-cols-2 p-11">
				<div className="md:p-10">
					<Image
						src="/foto-site.png"
						alt="fotos"
						className="w-full"
						width="709"
						height="585"
					/>
				</div>
				<div className=" md:py-10 md:px-10 flex flex-wrap content-center">
					<div className="">
						<h1 className="text-white uppercase font-bold text-2xl md:text-5xl lg:text-4xl mb-7 p-2 text-center ">
							Conteudos Exclusivos
						</h1>
						<article className="text-white lg:text-2xl text-justify">
							<p className="text-xl mb-4">
								Adquira imagens de qualidade, videos exclusivos e as ilustraçoes
								de grandes artistas
							</p>
							<p className="text-xl mb-4">A visao de cabo verde num so lugar</p>

							<p className="text-xl mb-4">
								Partilhe com o mundo as suas criaçoes
							</p>

							{/* <p className="mb-2 text-center mt-16">
								<span className="badges">#praia</span>
								<span className="badges">#assomada</span>
								<span className="badges">#tarrafal</span>
								<span className="badges">#latada</span>
							</p> */}
						</article>
					</div>
				</div>
			</section>
			{/* ultimas imagens adicionadas no app */}
			<section>
				<div className="m-12">
					<h4 className="font-bold pb-1 mt-10 border-b border-gray-300 w-44">
						<a href="/imagens" className="text-base uppercase">
							Imagens
						</a>{" "}
						recentes
					</h4>
					<MultCard />
				</div>
			</section>
			{/* convite para colaboradores  */}
			<section className="bg-gray-600 grid lg:grid-cols-2 p-11">
				<div className="md:py-10 md:px-10 flex flex-wrap content-center">
					<div className="">
						<h1 className="text-white uppercase font-bold text-2xl md:text-5xl lg:text-4xl mb-7 p-2 text-center ">
							colaboradores
						</h1>
						<article className="text-white lg:text-2xl text-justify">
							<p className="text-xl mb-4">
								Trabalha com o audio visual <span>?</span>
							</p>
							<p className="text-xl mb-4">
								Ajude-nos a divulgar mais de cabo verde para o mundo
							</p>

							<p className="text-xl mb-4">
								Partilhe com o mundo as suas criaçoes
							</p>

							<p className="text-xl mb-2 text-center mt-16">
								<a href="/contribuir" className="btn">
									Participe agora
								</a>
							</p>
						</article>
					</div>
				</div>
				<div className="md:p-10 mt-10">
					<Image
						src="/foto1.png"
						alt="fotos"
						className="w-full"
						width="709"
						height="585"
					/>
				</div>
			</section>
			{/* subscricao form */}
			<section className="p-8 md:p-11 ld:p-11 grid lg:grid-cols-2">
				<p className="uppercase font-bold text-xs md:text-xl lg:text-2xl text-gray-700">
					Subscreva e esteja atentos as publicaçoes mais recentes
				</p>
				<div>
					<form className="relative">
						<input
							className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-xs md:text-md lg:text-lg text-gray-700 placeholder-gray-500 border border-gray-200 rounded-md py-5 pl-5"
							type="text"
							aria-label="subscriçao de email"
							placeholder="Desponibilize seu email"
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							width="40"
							height="40"
							className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 rotate-90 cursor-pointer"
							onClick={subscrever}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
							/>
						</svg>
					</form>
				</div>
			</section>
		</Layout>
	);
}

export default HomePage;
