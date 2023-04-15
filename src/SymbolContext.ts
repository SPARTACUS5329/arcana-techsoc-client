import { createContext, Dispatch, SetStateAction } from "react";
import { Stock } from "./utils/types";

export const SymbolsContext = createContext<[Stock[], Dispatch<SetStateAction<Stock[]>> | null]>([
	[],
	null,
]);
