import Head from "next/head";
import Footer from "../Footer";
import NavBar from "../NavBar";
import Flexa from "../Flexa";

const Layout = ({ children }) => {
	return (
		<div>
			{/* title e metatags do site */}
			<Head>
				<title>KriolStock</title>
				<script
					src="https://kit.fontawesome.com/e81c075ac3.js"
					crossOrigin="anonymous"
				></script>
				<link rel="shortcut icon" href="/kriolfavicon.png" />
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
