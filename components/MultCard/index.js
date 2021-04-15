import CardItens from "../CardItens";

const MultCard = () => {
	return (
		<div className="grid lg:grid-cols-4 gap-3">
			{/* <!-- cards go here --> */}
			<CardItens
				id="a"
				link="/foto1.png"
				author="kriolStock"
				title="latada gammers"
			/>
			<CardItens
				id="b"
				link="/foto-site.png"
				author="kalua filmes"
				title="oasis na brava"
			/>
			<CardItens
				id="c"
				link="/DB/c.jpg"
				author="SCI"
				title="pequenos sorisos"
			/>
			<CardItens
				id="c"
				link="/DB/d.jpg"
				author="PicVideos"
				title="bera mar e sem areia"
			/>
		</div>
	);
};

export default MultCard;
