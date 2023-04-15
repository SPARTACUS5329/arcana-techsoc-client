import { Dispatch, SetStateAction, useEffect } from "react";
import axios from "axios";

const ALPHA_VANTAGE_KEY: string = import.meta.env.VITE_ALPHA_VANTAGE_KEY;

const useSymbolDetails = (symbol: string, setStock: Dispatch<SetStateAction<any>>) =>
	useEffect(() => {
		const getSymbolDetails = async () => {
			try {
				const result = await axios.get(
					`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_KEY}`
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
		getSymbolDetails();
	}, [symbol]);

export default useSymbolDetails;
