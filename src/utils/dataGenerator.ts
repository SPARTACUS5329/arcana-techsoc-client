import { Datapoint } from "./types";

export const dataGenerator = (dataSource: Datapoint[]) => {
	if (dataSource.length === 0) return {};
	const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
	return {
		labels: dataSource.map((dataPoint: Datapoint) => dataPoint["date"]),
		datasets: [
			{
				label: "Price v/s Time",
				data: dataSource?.map((dataPoint: Datapoint) => {
					return dataPoint["price"];
				}),
				borderColor: randomColor,
				backgroundColor: randomColor,
				tension: 0,
			},
		],
	};
};

export const predictionDataGenerator = (history: any, dataSource: any[]) => {
	if (!dataSource || dataSource.length === 0) return {};
	const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
	return {
		// labels: [
		// 	...history.labels.map((dataPoint: Datapoint) => dataPoint["date"]),
		// 	...dataSource.map((point, index) =>
		// 		(parseInt(history.labels[history.labels.length - 1]["date"]) + index).toString()
		// 	),
		// ],
		datasets: [
			{
				label: "Prediction Price v/s Time",
				data: [
					// eslint-disable-next-line no-unsafe-optional-chaining
					...dataSource?.map((dataPoint, index) => {
						return {
							x: index,
							y: dataPoint[0],
						};
					}),
				],
				borderColor: randomColor,
				backgroundColor: randomColor,
				tension: 0,
			},
		],
	};
};

export const options = {
	type: "line",
	scales: {
		x: {
			type: "time" as const,
			time: {
				unit: "day" as const,
			},
		},
	},
};
