import Head from "next/head";
import Footer from "../Footer";
import NavBar from "../NavBar";
import Flexa from "../Flexa";
import Meta from "../Meta";

const Layout = ({ children }) => {
	return (
		<div>
			{/* title e metatags do site */}
			<Head>
				<Meta />
				<title>KriolStock</title>
			</Head>
			{/* navbar */}
			<NavBar />
			<div className="w-full">{children}</div>
			{/* volte ao inicio da tella */}
			{/* <Flexa /> */}
			{/* rodapé/footer */}
			<Footer />
		</div>
	);
};

export default Layout;
