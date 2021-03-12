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
				<script
					src="https://kit.fontawesome.com/3b2f89328d.js"
					crossorigin="anonymous"
				></script>
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
