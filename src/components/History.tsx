import React, { useContext, useEffect, useState } from "react";
import Chart from "./Chart";
import { SymbolsContext } from "../SymbolContext";
import { Tabs, TabsProps } from "antd";

function History() {
	const [symbols, setSymbols] = useContext(SymbolsContext);
	const [tabs, setTabs] = useState<TabsProps["items"]>([]);

	useEffect(() => {
		setTabs(() => {
			return symbols.map((symbol, index) => {
				return {
					key: index.toString(),
					label: symbol.tag,
					children: <Chart key={index} symbol={symbol} />,
				};
			});
		});
	}, [symbols]);

	return (
		<div className="vertical-center" style={{ height: "100%" }}>
			<Tabs defaultActiveKey="0" items={tabs} style={{ color: "white" }} />
		</div>
	);
}

export default History;
