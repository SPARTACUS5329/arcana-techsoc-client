export interface Datapoint {
	symbol: string;
	date: string; // YYYY-MM-DD
	price: number;
	volume: number;
}

export interface Stock {
	tag: string;
	company: string;
}
