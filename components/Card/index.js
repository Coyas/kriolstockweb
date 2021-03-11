import CardItem from "../CardItem";

const Card = () => {
	return (
		// <div className="p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
		// 	{/* <!--Card 1--> */}
		// 	<CardItem img="/DB/a.jpg" id="a" nome="dqsdqsdd" />
		// 	{/* <!--Card 2--> */}
		// 	<CardItem img="/DB/b.jpg" id="b" nome="dqsdqsdd" />
		// 	{/* <!--Card 3--> */}
		// 	<CardItem img="/DB/c.jpg" id="c" nome="dqsdqsdd" />
		// 	{/* <!--Card 3--> */}
		// 	<CardItem img="/DB/d.jpg" id="d" nome="dqsdqsdd" />
		// 	{/* <!--Card 3--> */}
		// 	<CardItem img="/DB/e.jpg" id="e" nome="dqsdqsdd" />
		// 	{/* <!--Card 3--> */}
		// 	<CardItem img="/DB/f.jpg" id="f" nome="dqsdqsdd" />
		// 	{/* <!--Card 3--> */}
		// 	<CardItem img="/DB/g.jpg" id="g" nome="dqsdqsdd" />
		// 	{/* <!--Card 3--> */}
		// 	<CardItem img="/DB/h.jpg" id="h" nome="dqsdqsdd" />
		// 	{/* <!--Card 3--> */}
		// 	<CardItem img="/DB/i.jpg" id="i" nome="dqsdqsdd" />
		// 	{/* <!--Card 3--> */}
		// 	<CardItem img="/DB/j.jpg" id="j" nome="dqsdqsdd" />
		// 	{/* <!--Card 3--> */}
		// 	<CardItem img="/DB/k.jpg" id="k" nome="dqsdqsdd" />
		// 	{/* <!--Card 3--> */}
		// 	<CardItem img="/DB/l.jpg" id="l" nome="dqsdqsdd" />
		// </div>
		<div>
			<div className="mt-8">
				{/* <!-- cards go here --> */}
				<div className="card">
					<img
						src="/DB/a.jpg"
						alt="stew"
						className="h-32 sm:h-48 w-full object-cover"
					/>
					<div className="m-4">
						<span className="font-bold">latada gammers</span>
						<span className="block text-gray-500 text-sm">
							<a href="/ami/kriolstock">by kriolStock</a>
						</span>
					</div>
					<div className="badge">
						<span>25 mins</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
