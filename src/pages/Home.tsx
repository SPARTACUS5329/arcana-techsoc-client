import React, { useEffect, useState } from "react";
import History from "../components/History";
import { Stock } from "../utils/types";
import { SymbolsContext } from "../SymbolContext";
import TrendPreview from "../components/TrendPreview";
import SearchBar from "../components/Search";
import BuyStock from "../components/BuyStock";
import axios from "axios";

function Home() {
	const [currentSymbol, setCurrentSymbol] = useState<Stock[]>([
		{
			tag: "WDC",
			company: "Western Digital Corp",
		},
	]);
	const [foundSymbol, setFoundSymbol] = useState<string>("");

	useEffect(() => {
		const getData = async () => {
			try {
				const result = await axios.get(
					"https://yahoo-finance127.p.rapidapi.com/price/eth-usd",
					{
						headers: {
							"X-RapidAPI-Key": "08dc02b13amsh18451887f15c073p1f291fjsn732f3f1a70e1",
							"X-RapidAPI-Host": "yahoo-finance127.p.rapidapi.com",
						},
					}
				);
				console.log(result);
			} catch (error) {
				console.error(error);
			}
		};
		getData();
	});

	return (
		<SymbolsContext.Provider value={[currentSymbol, setCurrentSymbol]}>
			<div className="centered">
				<SearchBar setIsStockFound={setFoundSymbol} />
			</div>
			<div className="centered" style={{ width: "100%", marginTop: "20px" }}>
				{foundSymbol === "" || <BuyStock symbol={foundSymbol} />}
			</div>
			<div className="centered" style={{ height: "100%" }}>
				<div
					style={{
						height: "100%",
						marginRight: "10px",
					}}>
					<History />
				</div>
				<div className="vertical-center">
					<TrendPreview />
				</div>
			</div>
		</SymbolsContext.Provider>
	);
}

export default Home;
