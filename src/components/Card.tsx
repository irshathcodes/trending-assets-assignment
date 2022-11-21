interface Props {
	name: string;
	price: string;
	tvl: string;
	priceChange: number;
	CardIcon: React.FC<React.SVGProps<SVGSVGElement>>;
	PopularPairsIcons: React.FC<React.SVGProps<SVGSVGElement>>[];
}

export default function Card({
	name,
	price,
	tvl,
	priceChange,
	CardIcon,
	PopularPairsIcons,
}: Props) {
	return (
		<section className="relative h-[400px] w-[292px]">
			<div
				className={`mx-auto block w-fit rounded-full bg-gray-500/10 p-6  bg-blend-lighten backdrop-blur-sm`}
			>
				<CardIcon />
			</div>

			<div className="absolute bottom-0  h-[350px] w-full rounded-2xl bg-card-shape bg-cover bg-top bg-no-repeat px-6 py-4 text-center">
				<div className="mt-14 text-center text-sm capitalize">
					<h1 className="mb-3 font-semibold text-slate-500">{name}</h1>
					<div className="relative flex w-full items-center justify-center rounded-full border border-zinc-600/20 bg-primary py-2 shadow-lg">
						<strong className="inline-block text-slate-300">{price}</strong>
						<span
							className={`absolute right-0 mr-4 inline-block text-xs font-semibold ${
								priceChange >= 0 ? "text-green-500" : "text-red-500"
							}`}
						>
							{priceChange > 0 ? `+${priceChange}` : priceChange}%
						</span>
					</div>
					<h2 className="mt-1 font-semibold text-slate-500">Price</h2>

					<div className="mt-4 flex w-full items-center justify-center rounded-full border border-zinc-600/20 bg-primary py-2 shadow-lg">
						<strong className="inline-block text-slate-300">{tvl}</strong>
					</div>
					<h2 className="mt-1 font-semibold text-slate-500">TVL</h2>

					<div className="mx-auto mt-4 flex w-fit items-center  gap-2 rounded-full bg-primary px-3 py-2">
						{PopularPairsIcons.map((Icon, i) => (
							<Icon key={i} />
						))}
					</div>

					<h2 className="mt-1 font-semibold text-slate-500">Popular Pairs</h2>
				</div>
			</div>
		</section>
	);
}
