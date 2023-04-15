import React, { useContext, useEffect, useState } from "react";
import Chart from "./Chart";
import { SymbolContext } from "../SymbolContext";
import axios from "axios";

const ALPHA_VANTAGE_KEY: string = import.meta.env.VITE_ALPHA_VANTAGE_KEY;

function History() {
	const [symbol, setSymbol] = useContext(SymbolContext);
	const [stock, setStock] = useState<any>(null);

	useEffect(() => {
		const getStockPrice = async () => {
			try {
				const result = await axios.get(
					`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AFL&apikey=${ALPHA_VANTAGE_KEY}`
				);

				setStock((stock: any) => {
					const parsedResult: any = {};
					for (const key of Object.keys(result.data)) {
						console.log(key);
						for (const subkey of Object.keys(result.data[key])) {
							console.log(subkey);
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
		getStockPrice();
	}, []);

	return (
		<div className="vertical-center" style={{ height: "100%" }}>
			<div style={{ fontSize: "3rem" }}>{symbol?.company}</div>
			<div className="between-spaced">
				<div style={{ display: "flex" }}>
					<div style={{ fontSize: "2rem", marginRight: "7px" }}>${stock?.price}</div>
					<div
						className="text-vertical-center"
						style={{
							fontSize: "1.5rem",
							color:
								stock && stock["change percent"][0] === "-" ? "#d44f3d" : "#42f54b",
						}}>
						{stock && stock["change percent"]}%
					</div>
				</div>
				<div className="even-spaced" style={{ width: "50%" }}>
					<div className="text-vertical-center">Price</div>
					<div className="text-vertical-center centered">
						<b>O:&nbsp;</b>
						<div style={{ color: "#42f54b" }}>{stock?.open}</div>
					</div>
					<div className="text-vertical-center centered">
						<b>H:&nbsp;</b>
						<div style={{ color: "#42f54b" }}>{stock?.high}</div>
					</div>
					<div className="text-vertical-center centered">
						<b>L:&nbsp;</b>
						<div style={{ color: "#42f54b" }}>{stock?.low}</div>
					</div>
					<div className="text-vertical-center centered">
						<b>C:&nbsp;</b>
						<div style={{ color: "#42f54b" }}>{stock && stock["previous close"]}</div>
					</div>
				</div>
			</div>
			<Chart />
		</div>
	);
}

export default History;
