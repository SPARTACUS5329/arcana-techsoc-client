import React, { useEffect, useState } from "react";
import PreviewCard from "./PreviewCard";
import axios from "../config/_axios";
import { Button, Input } from "antd";
import openNotification from "../utils/openNotification";
import { NotificationType } from "../utils/types";

function TrendPreview() {
	const [symbols, setSymbols] = useState<{ symbol: string; company: string }[]>([]);
	const [query, setQuery] = useState<string>("");

	useEffect(() => {
		const getPortfolio = async () => {
			try {
				const result = await axios.get("/portfolio");
				setSymbols(result.data);
			} catch (error) {
				console.error(error);
				openNotification(
					NotificationType["ERROR"],
					"An error occurred in fetching your portfolio"
				);
			}
		};
		getPortfolio();
	}, []);

	const handleSearch = async () => {
		try {
			const result = await axios.post("/search", { symbol: query });
			console.log(result.data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div
			style={{
				border: "1px solid white",
				height: "90vh",
				width: "25vw",
			}}>
			<div style={{ display: "flex" }}>
				<Input
					value={query}
					onChange={(e) => {
						e.preventDefault();
						setQuery(e.target.value);
					}}
				/>
				<Button type="primary" onClick={handleSearch}>
					Search
				</Button>
			</div>
			<div style={{ height: "100%", zIndex: "-10" }}>
				{symbols.map((symbol, index: number) => {
					return <PreviewCard key={index} symbol={symbol.symbol} />;
				})}
			</div>
		</div>
	);
}

export default TrendPreview;
