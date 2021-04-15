import CardItens from "../CardItens";

const MultCard = () => {
	const images = [
		{
			id: "a",
			link:
				"https://res.cloudinary.com/coyas/image/upload/v1618507062/site/kriol/BoaVista_f7rvab.jpg",
			author: "kriolstock",
			title: "Praia de Santa Monica,Boavista",
		},
		{
			id: "b",
			link:
				"https://res.cloudinary.com/coyas/image/upload/v1618507059/site/kriol/BoaVistab_epxham.jpg",
			author: "kriolstock",
			title: "Deserto de Viana, BoaVista",
		},
		{
			id: "c",
			link:
				"https://res.cloudinary.com/coyas/image/upload/v1618507055/site/kriol/BoaVistac_cjrtv8.jpg",
			author: "kriolstock",
			title: "Noite No Deserto de Viana, BoaVista",
		},
		{
			id: "d",
			link:
				"https://res.cloudinary.com/coyas/image/upload/v1618507067/site/kriol/fogo_k9mlaf.jpg",
			author: "kriolstock",
			title: "Vulcao do Fogo",
		},
	];

	console.log(images);
	return (
		<div className="grid lg:grid-cols-4 gap-3">
			{/* <!-- cards go here --> */}
			{images &&
				images.map((value, index) => (
					<CardItens
						id={`${value.id}${index}`}
						link={value.link}
						author={value.author}
						title={value.title}
					/>
				))}
		</div>
	);
};

export default MultCard;
