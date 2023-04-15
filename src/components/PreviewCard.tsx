import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { SymbolsContext } from "../SymbolContext";

const ALPHA_VANTAGE_KEY: string = import.meta.env.VITE_ALPHA_VANTAGE_KEY;

function PreviewCard({ symbol }: { symbol: string }) {
	const [stock, setStock] = useState<any>(null);
	const [symbols, setSymbols] = useContext(SymbolsContext);

	useEffect(() => {
		const getSymbolDetails = async () => {
			try {
				const result = await axios.get(
					`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_KEY}`
				);
				setStock(() => {
					const parsedResult: any = {};
					for (const key of Object.keys(result.data)) {
						for (const subkey of Object.keys(result.data[key])) {
							const parsedKey: string = subkey.slice(4, subkey.length);
							parsedResult[parsedKey] = result.data[key][subkey];
						}
					}
					return parsedResult;
				});
			} catch (error) {
				console.error(error);
			}
		};
		getSymbolDetails();
	}, []);

	const handleAddComparison = () => {
		if (!setSymbols) return;
		setSymbols((symbols) => [...symbols, { tag: stock.symbol, company: stock.symbol }]);
	};

	return (
		<div
			className="vertical-center"
			style={{
				width: "100%",
				height: "15%",
				border: "1px solid white",
				background: "#040f07",
			}}>
			<div className="between-spaced">
				<div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>{stock?.symbol}</div>
				<div>
					<div>{stock?.price}</div>
					<div
						style={{
							fontSize: "1rem",
							color:
								stock &&
								stock["change percent"] &&
								stock["change percent"][0] === "-"
									? "#d44f3d"
									: "#42f54b",
						}}>
						{stock && stock["change percent"]}
					</div>
				</div>
				<div style={{ marginRight: "10px" }}>
					<Button type="primary" onClick={handleAddComparison}>
						<PlusCircleOutlined />
					</Button>
				</div>
			</div>
		</div>
	);
}

export default PreviewCard;
