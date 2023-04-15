import React, { useState } from "react";
import History from "../components/Intraday";
import { Stock } from "../utils/types";
import { SymbolContext } from "../SymbolContext";

function Home() {
	const [currentSymbol, setCurrentSymbol] = useState<Stock | null>({
		tag: "WDC",
		company: "WDC",
	});
	return (
		<div>
			<SymbolContext.Provider value={[currentSymbol, setCurrentSymbol]}>
				<History />
			</SymbolContext.Provider>
		</div>
	);
}

export default Home;
