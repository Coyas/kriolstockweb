import Link from "next/link";
import Image from "next/image";

const CardItens = (props) => {
	return (
		// transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105
		<div className="hover:shadow-inner card ">
			<Link href={`/colecoes/${props.id}`}>
				<a>
					<Image
						src={props.link}
						alt={props.title}
						className="h-32 sm:h-48 w-full object-cover"
						width={361}
						height={240}
					/>
				</a>
			</Link>
			{/* <div className="m-4">
				<Link href={`/colecoes/${props.id}`}>
					<a>
						<span className="font-bold">{props.title}</span>
					</a>
				</Link>
				<span className="block text-gray-500 text-sm">
					<a href={`/ami/"${props.author}`}>by {props.author}</a>
				</span>
			</div> */}
			<a href="/likeaboss" className="badge top-0 right-0">
				<span>
					<i className="far fa-heart"></i>
				</span>
			</a>

			{/* <p > */}
			<span className="badge-title">{props.title}</span>
			{/* </p> */}
		</div>
	);
};

export default CardItens;
