import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Collection from "../components/Collection";

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
			<section className="bg-gray-600 grid lg:grid-cols-2 p-11">
				<div className="p-10">
					<img src="/DB/l.jpg" alt="fotos" className="w-full" />
				</div>
				<div className="py-10 px-10">
					<h1 className="text-white uppercase font-bold lg:text-4xl mb-7">
						Conteudos Exclusivos
					</h1>
					<article className="text-white lg:text-2xl">
						<p className="text-xl mb-4">
							Adquira imagens de qualidade, videos exclusivos
							<br /> os vectores dos simbolos mais famosos
							<br /> e as ilustraçoes de grandes artistas
						</p>
						<p className="text-xl mb-4">A visao de cabo verde num so lugar</p>

						<p className="text-xl mb-2">Acesse algumas apartir das tags</p>
						<p>
							<span className="badges">
								<a href="#">#praia</a>
							</span>
							<span className="badges">
								<a href="#">#asomada</a>
							</span>
							<span className="badges">
								<a href="#">#tarrafal</a>
							</span>
							<span className="badges">
								<a href="#">#latada</a>
							</span>
						</p>
					</article>
				</div>
			</section>
		</Layout>
	);
}

export default HomePage;
