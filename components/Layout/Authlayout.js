import Head from "next/head";
import Meta from "../Meta";

const Authlayout = ({ children }) => {
	return (
		<>
			{/* title e metatags do site */}
			<Head>
				<Meta />
				<title>Login - KriolStock</title>
			</Head>
			{children}
		</>
	);
};

export default Authlayout;
