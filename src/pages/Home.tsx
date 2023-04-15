import React, { useState } from "react";
import History from "../components/History";
import { Stock } from "../utils/types";
import { SymbolContext } from "../SymbolContext";
import TrendPreview from "../components/TrendPreview";

function Home() {
	const [currentSymbol, setCurrentSymbol] = useState<Stock | null>({
		tag: "WDC",
		company: "Your mom",
	});
	return (
		<SymbolContext.Provider value={[currentSymbol, setCurrentSymbol]}>
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
