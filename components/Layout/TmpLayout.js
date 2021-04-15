import Head from "next/head";
import Meta from "../Meta";

const TmpLayout = ({ children }) => {
	return (
		<>
			{/* title e metatags do site */}
			<Head>
				<Meta />
				<title>KriolStock Photo</title>
			</Head>
			{children}
		</>
	);
};

export default TmpLayout;
