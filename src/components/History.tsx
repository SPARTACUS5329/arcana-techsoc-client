import React, { useContext, useEffect, useState } from "react";
import Chart from "./Chart";
import { SymbolsContext } from "../SymbolContext";
import { Button, Tabs, TabsProps } from "antd";

function History() {
	const [symbols, setSymbols] = useContext(SymbolsContext);
	const [tabs, setTabs] = useState<TabsProps["items"]>([
		{
			key: "0",
			label: "IBM",
			children: <Chart key={0} symbol={{ tag: "IBM", company: "IBM" }} />,
		},
	]);

	useEffect(() => {
		setTabs(() => {
			return [
				{
					key: "0",
					label: "IBM",
					children: <Chart key={0} symbol={{ tag: "IBM", company: "IBM" }} />,
				},
				...symbols.map((symbol, index) => {
					return {
						key: (index + 1).toString(),
						label: symbol.tag,
						children: <Chart key={index + 1} symbol={symbol} />,
					};
				}),
			];
		});
	}, [symbols]);

	return (
		<div className="vertical-center" style={{ height: "100%" }}>
			<Tabs defaultActiveKey="0" items={tabs} style={{ color: "white" }} />
		</div>
	);
}

export default History;
