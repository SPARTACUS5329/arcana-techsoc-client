import { Datapoint } from "./types";

export const dataGenerator = (dataSource: Datapoint[]) => {
	console.log(dataSource);
	return {
		labels: dataSource.map((dataPoint: Datapoint) => dataPoint["date"]),
		datasets: [
			{
				label: "Price v/s Time",
				data: dataSource?.map((dataPoint: Datapoint, index: number) => {
					return dataPoint["price"]; // * dataPoint["volume"];
				}),
				backgroundColor: "#347deb",
			},
		],
	};
};

export const options = {
	scales: {
		x: {
			type: "time" as const,
			time: {
				unit: "day" as const,
			},
		},
		y: {
			beginAtZero: true,
		},
	},
};
