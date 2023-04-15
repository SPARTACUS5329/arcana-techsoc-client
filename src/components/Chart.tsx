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
import { SymbolContext } from "../SymbolContext";
import Loader from "./Loader";

ChartJS.register(LinearScale, TimeScale, PointElement, LineElement, Tooltip, Legend);

function History() {
	const [history, setHistory] = useState<any>();
	const [currentSymbol, setCurrentSymbol] = useContext(SymbolContext);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const getSymbolHistory = async () => {
			try {
				setIsLoading(true);
				const result = await axios.get(`/symbol-data?symbol=${currentSymbol?.tag}`);
				setHistory(dataGenerator(result.data));
				setIsLoading(false);
			} catch (error) {
				console.error(error);
			}
		};
		getSymbolHistory();
	}, [currentSymbol]);

	return (
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
	);
}

export default History;
