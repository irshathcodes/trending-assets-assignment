import { ReactComponent as ActivityIcon } from "./assets/icons/activity-icon.svg";
import Card from "./components/Card";
import trendingAssets from "./data/trendingAssets";

function App() {
	return (
		<main className="h-screen overflow-x-auto bg-primary p-8 font-tomorrow">
			<h1 className="mb-8 flex items-center gap-2 text-lg font-semibold text-slate-200">
				<ActivityIcon />
				<span>Trending Assets</span>
			</h1>

			<div className="mr-6 grid grid-flow-col gap-8">
				{trendingAssets.map((asset) => (
					<Card key={asset.id} {...asset} />
				))}
			</div>
		</main>
	);
}

export default App;
