import React, { useState } from "react";
import History from "../components/History";
import { Stock } from "../utils/types";
import { SymbolContext } from "../SymbolContext";
import TrendPreview from "../components/TrendPreview";
import SearchBar from "../components/Search";
import BuyStock from "../components/BuyStock";

function Home() {
	const [currentSymbol, setCurrentSymbol] = useState<Stock | null>({
		tag: "WDC",
		company: "Western Digital Corp",
	});
	const [foundSymbol, setFoundSymbol] = useState<string>("");
	return (
		<SymbolContext.Provider value={[currentSymbol, setCurrentSymbol]}>
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
		</SymbolContext.Provider>
	);
}

export default Home;
