import React, { useState, useEffect, useContext } from "react";
import {
	Chart as ChartJS,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend,
	TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { Scatter } from "react-chartjs-2";
import { dataGenerator, options } from "../utils/dataGenerator";
import axios from "../config/_axios";
import { SymbolsContext } from "../SymbolContext";
import Loader from "./Loader";
import { Stock } from "../utils/types";

const ALPHA_VANTAGE_KEY: string = import.meta.env.VITE_ALPHA_VANTAGE_KEY;

ChartJS.register(LinearScale, TimeScale, PointElement, LineElement, Tooltip, Legend);

function History({ symbol }: { symbol: Stock }) {
	const [history, setHistory] = useState<any>(null);
	const [stock, setStock] = useState<any>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const getSymbolDetails = async () => {
			try {
				const result = await axios.get(
					`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol.tag}&apikey=${ALPHA_VANTAGE_KEY}`
				);
				setStock((stock: any) => {
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
		const getSymbolHistory = async () => {
			try {
				setIsLoading(true);
				const result = await axios.get(`/symbol-data?symbol=${symbol.tag}`);
				setHistory(dataGenerator(result.data));
				setIsLoading(false);
			} catch (error) {
				console.error(error);
			}
		};
		getSymbolDetails();
		getSymbolHistory();
	}, [symbol]);

	return (
		<div style={{ color: "white" }}>
			<div style={{ fontSize: "3rem" }}>{symbol.company}</div>
			<div className="between-spaced">
				<div style={{ display: "flex" }}>
					<div style={{ fontSize: "2rem", marginRight: "7px" }}>${stock?.price}</div>
					<div
						className="text-vertical-center"
						style={{
							fontSize: "1.5rem",
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
				<div className="even-spaced" style={{ width: "70%" }}>
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
			<div
				style={{
					border: "1px solid white",
					width: "60vw",
					height: "60vh",
					textAlign: "center",
					borderRadius: "25px",
					background: "#1a0612",
				}}>
				{isLoading && <Loader />}
				{isLoading || (history && <Scatter data={history} options={options} />)}
			</div>
		</div>
	);
}

export default History;
