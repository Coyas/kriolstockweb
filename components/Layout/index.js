import Head from "next/head";
import Footer from "../Footer";
import NavBar from "../NavBar";

const Layout = ({ children }) => {
	return (
		<div>
			{/* title e metatags do site */}
			<Head>
				<title>KriolStock</title>
				<script
					src="https://kit.fontawesome.com/3b2f89328d.js"
					crossOrigin="anonymous"
				></script>
			</Head>
			{/* navbar */}
			<NavBar />
			<div>{children}</div>
			{/* rodapé/footer */}
			<Footer />
		</div>
	);
};

export default Layout;
