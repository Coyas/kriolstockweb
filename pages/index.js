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
			<section className="">colaboradores</section>
		</Layout>
	);
}

export default HomePage;
