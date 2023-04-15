import React, { useState } from "react";
import { Button, Card, Col, Row } from "antd";
import axios from "../config/_axios";
import useSymbolDetails from "../utils/useSymbolDetails";
import openNotification from "../utils/openNotification";
import { NotificationType } from "../utils/types";

function BuyStock({ symbol }: { symbol: string }) {
	const [stock, setStock] = useState<any>(null);

	useSymbolDetails(symbol, setStock);

	const handleAddToPortfolio = async () => {
		try {
			const result = await axios.post("/portfolio", { symbol: stock.symbol });
			console.log(result);
			if (result.data === "SUCCESS")
				return openNotification(NotificationType["SUCCESS"], "Added successfully");
		} catch (error: any) {
			console.error(error);
			return openNotification(NotificationType["ERROR"], error.data || "An error occurred");
		}
	};

	return (
		<div>
			<Card
				title={symbol}
				style={{ background: "#1a0612", color: "white", width: "400px", height: "200px" }}
				extra={
					<div
						style={{
							color:
								stock &&
								stock["change percent"] &&
								stock["change percent"][0] === "-"
									? "#d44f3d"
									: "#42f54b",
						}}>
						{stock && stock["change percent"]}
					</div>
				}
				actions={[
					<Button key={1} type="primary" onClick={handleAddToPortfolio}>
						Add to Portfolio
					</Button>,
				]}
				headStyle={{ color: "white" }}>
				<Row gutter={12} className="even-spaced">
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
				<Row gutter={12} className="even-spaced">
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
