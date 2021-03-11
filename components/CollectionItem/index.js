import Link from "next/link";

const CollectionItem = (props) => {
	return (
		<div className="card">
			<Link href={`/colecoes/${props.id}`}>
				<a>
					<img
						src={props.link}
						alt={props.title}
						className="h-32 sm:h-48 w-full object-cover"
					/>
				</a>
			</Link>
			<div className="m-4">
				<Link href={`/colecoes/${props.id}`}>
					<a>
						<span className="font-bold">{props.title}</span>
					</a>
				</Link>
				<span className="block text-gray-500 text-sm">
					<a href={`/ami/"${props.author}`}>by {props.author}</a>
				</span>
			</div>
			<div className="badge top-0 right-0">
				<a href="#">
					<span>
						<i className="far fa-heart"></i>
					</span>
				</a>
			</div>
		</div>
	);
};

export default CollectionItem;
