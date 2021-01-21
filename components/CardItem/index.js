const CardItem = (props) => {
	return (
		<a href={`/details/${props.id}`}>
			<div class="rounded overflow-hidden shadow-lg mt-1">
				<img class="w-full max-h-64" src={props.img} alt={props.nome} />
				<div class="px-1 py-1">
					<div class="font-bold text-sm mb-1">.... brava</div>
					<p class="text-gray-700 text-base">Lorem ipsum dolor sit amet</p>
				</div>
				{/* <div class="px-6 pt-4 pb-2">
					<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						#Praias
					</span>
					<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						#litoral
					</span>
					<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						#brava
					</span>
				</div> */}
			</div>
		</a>
	);
};

export default CardItem;
