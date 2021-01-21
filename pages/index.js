import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Card from "../components/Card";

function HomePage() {
	return (
		<Layout>
			<Banner />
			<section className="m-10">
				<Card />
			</section>
		</Layout>
	);
}

export default HomePage;
