import Link from "next/link";
import Image from "next/image";

const CollectionItem = (props) => {
	return (
		<div className="card hover:shadow-lg">
			<Link href={`/colecoes/${props.id}`}>
				<a>
					<Image
						src={props.link}
						alt={props.title}
						className="h-32 sm:h-48 w-full object-cover"
						width={382}
						height={192}
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
			{/* <div className=""> */}
			<Link href="/likeit">
				<a className="badge top-0 right-0">
					{/* <span> */}
					<i className="far fa-heart"></i>
					{/* </span> */}
				</a>
			</Link>
			{/* </div> */}
		</div>
	);
};

export default CollectionItem;
