import { Card, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import axios from "../config/_axios";
import useSymbolDetails from "../utils/useSymbolDetails";

const ALPHA_VANTAGE_KEY: string = import.meta.env.VITE_ALPHA_VANTAGE_KEY;

function BuyStock({ symbol }: { symbol: string }) {
	const [stock, setStock] = useState<any>(null);

	useSymbolDetails(symbol, setStock);

	return (
		<div>
			<Card
				title={symbol}
				style={{ background: "#1a0612", color: "white" }}
				extra={<div style={{ color: "white" }}>{stock?.delta}</div>}
				headStyle={{ color: "white" }}>
				<Row gutter={12}>
					<Col>
						<div style={{ display: "flex" }}>
							<b>Open:&nbsp;</b> <div style={{ color: "#42f54b" }}>{stock?.open}</div>
						</div>
					</Col>
					<Col>
						<div style={{ display: "flex" }}>
							<b>High:&nbsp;</b> <div style={{ color: "#42f54b" }}>{stock?.high}</div>
						</div>
					</Col>
				</Row>
				<Row gutter={12}>
					<Col>
						<div style={{ display: "flex" }}>
							<b>Low:&nbsp;</b> <div style={{ color: "#42f54b" }}>{stock?.low}</div>
						</div>
					</Col>
					<Col>
						{stock && stock["previous close"] && (
							<div style={{ display: "flex" }}>
								<b>Close:&nbsp;</b>{" "}
								<div style={{ color: "#42f54b" }}>{stock["previous close"]}</div>
							</div>
						)}
					</Col>
				</Row>
			</Card>
		</div>
	);
}

export default BuyStock;
