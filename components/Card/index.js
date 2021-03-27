import CardItens from "../CardItens";

const Card = () => {
	return (
		<div>
			<div className="mt-8 grid lg:grid-cols-4 gap-3">
				{/* <!-- cards go here --> */}
				<CardItens
					id="a"
					link="/foto1.png"
					author="kriolStock"
					title="latada gammers"
				/>
				<CardItens
					id="b"
					link="/DB/b.jpg"
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
		</div>
	);
};

export default Card;
