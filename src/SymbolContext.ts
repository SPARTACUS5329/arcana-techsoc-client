import { createContext, Dispatch, SetStateAction } from "react";
import { Stock } from "./utils/types";

export const SymbolContext = createContext<
	[Stock | null, Dispatch<SetStateAction<Stock | null>> | null]
>([null, null]);
