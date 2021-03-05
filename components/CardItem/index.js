import Link from "next/link";

const CardItem = (props) => {
	return (
		<Link href={`/details/${props.id}`}>
			<a>
				<div className="rounded overflow-hidden shadow-lg mt-1">
					<img className="w-full max-h-64" src={props.img} alt={props.nome} />
					<div className="px-1 py-1">
						<div className="font-bold text-sm mb-1">.... brava</div>
						<p className="text-gray-700 text-base">
							Lorem ipsum dolor sit amet
						</p>
					</div>
					{/* <div className="px-6 pt-4 pb-2">
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						#Praias
					</span>
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						#litoral
					</span>
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						#brava
					</span>
				</div> */}
				</div>
			</a>
		</Link>
	);
};

export default CardItem;
