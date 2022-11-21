import { ReactComponent as BinanceSm } from "../assets/icons/binance-sm.svg";
import { ReactComponent as SolanaSm } from "../assets/icons/solana-sm.svg";
import { ReactComponent as EthereumSm } from "../assets/icons/ethereum-sm.svg";
import { ReactComponent as BitcoinSm } from "../assets/icons/bitcoin-sm.svg";
import { ReactComponent as BitcoinLg } from "../assets/icons/bitcoin-lg.svg";
import { ReactComponent as SolanaLg } from "../assets/icons/solana-lg.svg";
import { ReactComponent as BinanceLg } from "../assets/icons/binance-lg.svg";
import { ReactComponent as EthereumLg } from "../assets/icons/ethereum-lg.svg";
import { ReactComponent as ShibaInuLg } from "../assets/icons/shiba-inu-lg.svg";

export default [
	{
		id: 1,
		name: "Bitcoin (BTC)",
		price: "$31,812.80",
		priceChange: 10,
		tvl: "$60,000",
		CardIcon: BitcoinLg,
		PopularPairsIcons: [SolanaSm, EthereumSm, BinanceSm],
	},
	{
		id: 2,
		name: "Solana (SOL)",
		price: "$32.83",
		priceChange: -12.32,
		tvl: "$60,000",
		CardIcon: SolanaLg,
		PopularPairsIcons: [BitcoinSm, EthereumSm, BinanceSm],
	},
	{
		id: 3,
		name: "Ethereum (ETH)",
		price: "$1,466.45",
		priceChange: -11.93,
		tvl: "$60,000",
		CardIcon: EthereumLg,
		PopularPairsIcons: [SolanaSm, EthereumSm, BinanceSm],
	},
	{
		id: 4,
		name: "Binance USD (BUSD)",
		price: "$1.00",
		priceChange: +0.26,
		tvl: "$60,000",
		CardIcon: BinanceLg,
		PopularPairsIcons: [SolanaSm, EthereumSm, BinanceSm],
	},
	{
		id: 5,
		name: "Shiba Inu (SHIB)",
		price: "$0.000001948",
		priceChange: -8.1,
		tvl: "$12,000",
		CardIcon: ShibaInuLg,
		PopularPairsIcons: [SolanaSm, EthereumSm, BinanceSm],
	},
];
