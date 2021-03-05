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
					src="https://kit.fontawesome.com/e81c075ac3.js"
					crossOrigin="anonymous"
				></script>
			</Head>
			{/* navbar */}
			<NavBar />
			<div className="w-full">{children}</div>
			{/* rodapé/footer */}
			<Footer />
		</div>
	);
};

export default Layout;
