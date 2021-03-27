import CollectionItem from "../CollectionItem";

const Collection = () => {
	return (
		<div>
			<div className="mt-8 grid lg:grid-cols-4 gap-3">
				{/* <!-- cards go here --> */}
				<CollectionItem
					id="a"
					link="/foto1.png"
					author="kriolStock"
					title="latada gammers"
				/>
				<CollectionItem
					id="b"
					link="/DB/b.jpg"
					author="kalua filmes"
					title="oasis na brava"
				/>
				<CollectionItem
					id="c"
					link="/DB/c.jpg"
					author="SCI"
					title="pequenos sorisos"
				/>
				<CollectionItem
					id="c"
					link="/DB/d.jpg"
					author="PicVideos"
					title="bera mar e sem areia"
				/>
			</div>
		</div>
	);
};

export default Collection;
