import React, { useState } from "react";
import PreviewCard from "./PreviewCard";
import axios from "../config/_axios";
import { Button, Input } from "antd";

const symbols = [
	{
		tag: "AFL",
		company: "Aflac Incorporated",
	},
	{
		tag: "WDC",
		company: "Western Digital Corp",
	},
	{
		tag: "FICO",
		company: "Fair Isaac Corop",
	},
];

function TrendPreview() {
	const [query, setQuery] = useState<string>("");

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
					return <PreviewCard key={index} symbol={symbol.tag} />;
				})}
			</div>
		</div>
	);
}

export default TrendPreview;
