import { Button, Input } from "antd";
import React, { Dispatch, SetStateAction, useState } from "react";
import axios from "../config/_axios";
import openNotification from "../utils/openNotification";
import { NotificationType } from "../utils/types";

function SearchBar({ setIsStockFound }: { setIsStockFound: Dispatch<SetStateAction<string>> }) {
	const [query, setQuery] = useState<string>("");

	const handleSearch = async () => {
		try {
			const result = await axios.post("/search", { symbol: query });
			if (result.data === "FAILED") {
				setIsStockFound("");
				return openNotification(NotificationType["ERROR"], "This symbol was not found");
			}
			setIsStockFound(query);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="centered" style={{ width: "50vw" }}>
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
	);
}

export default SearchBar;
