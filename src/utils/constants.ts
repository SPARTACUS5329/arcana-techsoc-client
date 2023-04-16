export const RSI: number[] = [
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38.65, 41.18, 40.48, 44.75, 45.65, 43.5, 45.65, 45.95,
	37.89, 39.39, 32.89, 32.43, 25.37, 33.33, 37.11, 42.2, 38.65, 41.52, 45.65, 45.36, 36.31, 36.31,
	32.89, 31.51, 31.03, 26.47, 31.51, 45.36, 42.86, 45.05, 47.92, 51.46, 54.34, 51.46, 53.92,
	51.92, 51.22, 55.56, 57.45, 61.39, 61.98, 62.26, 58.16, 58.51, 58.68, 55.56, 61.83, 63.1, 66.33,
	65.16, 61.39, 55.56, 59.35, 61.83, 65.64, 67, 67.43, 65.03, 77.88, 78.07, 78.31, 79.42, 77.32,
	78.26, 79.55, 76.69, 70.33, 62.12, 67.64, 55.16, 38.65, 38.65, 35.48, 39.02, 31.97, 28.57,
	34.64, 29.08, 31.03, 35.9, 39.02, 35.9, 39.39, 39.39, 32.43, 33.77, 37.11, 41.18, 46.52, 47.92,
	45.05, 50, 58.68, 57.81, 61.09, 64.79, 61.39, 61.39, 61.54, 58.16, 57.08, 56.9, 58.68, 55.16,
	55.56, 54.13, 58.33, 59.18, 57.81, 63.64, 57.08, 50.5, 51.22, 54.13, 48.72, 40.83, 44.75, 49.24,
	53.92, 51.69, 54.13, 51.22, 35.06, 34.64, 32.43, 36.71, 37.89, 37.11, 41.52, 43.5, 39.02, 43.5,
	40.12, 45.36, 50.74, 51.22, 53.49, 50.5, 50, 44.44, 45.05, 41.86, 41.18, 42.53, 42.53, 42.86,
	39.02, 41.86, 44.44, 50.98, 47.92, 43.18, 46.24, 41.52, 39.02, 38.27, 37.5, 44.44, 47.09, 46.81,
	45.95, 53.05, 48.19, 47.92, 48.72, 50, 50.74, 55.95, 55.56, 51.69, 51.69, 53.49, 40.48, 47.09,
	53.92, 48.72, 47.37, 47.92, 53.49, 59.18, 59.18, 58.16, 53.7, 57.26, 62.96, 64.29, 67.64, 78.59,
	73.47, 62.69, 55.36, 58.16, 51.69, 48.98, 65.16, 68.94, 72.45, 79.04, 79.25, 70.33, 71.26,
	68.65, 70.59, 67.95, 59.35, 60.16, 59.84, 60.32, 56.71, 49.24, 40.83, 38.27, 30.56, 27.54,
	36.31, 31.03, 40.48, 35.9, 34.21, 27.01, 37.11, 32.43, 24.81, 30.56, 27.01, 34.64, 32.89, 31.51,
	29.08, 29.08, 39.76, 40.12, 46.24, 42.86, 47.09, 45.65, 41.52, 45.95, 43.18, 50.25, 50.25, 53.7,
	55.36, 55.16, 57.26, 52.15, 49.24, 53.27, 53.49, 49.75, 52.38, 54.34, 57.26, 58.33, 58.68,
	61.09, 56.71, 51.92, 51.69, 53.05, 53.7, 50.74, 53.27, 52.61, 48.98, 42.53, 44.75, 44.75, 52.15,
	50, 51.69, 47.92, 46.81, 52.61, 57.98, 56.33, 56.9, 56.9, 58.85, 63.1, 62.69, 67.21, 71.18,
	62.41, 58.33, 41.18, 46.81, 46.52, 51.22, 50, 50, 47.37, 45.36, 42.86, 39.02, 44.13, 41.52,
	45.95, 47.92, 44.75, 46.81, 47.64, 43.18, 43.5, 40.48, 46.24, 47.64, 50.25, 54.55, 56.33, 58.33,
	60.32, 59.68, 64.29, 60.47, 56.52, 57.26, 53.05, 54.75, 48.72, 48.98, 52.15, 55.56, 54.55,
	55.75, 52.38, 57.45, 56.71, 56.71, 51.22, 51.69, 48.98, 50.5, 46.81, 44.13, 44.44, 53.27, 49.49,
	47.92, 50, 50.98, 45.05, 45.05, 60.47, 49.24, 43.82, 41.86, 44.75, 41.18, 44.13, 45.65, 46.81,
	51.92, 53.7, 47.37, 41.52, 42.53, 38.65, 37.11, 40.48, 49.24, 46.81, 49.24, 47.92, 46.52, 50.98,
	50.98, 57.08, 70.67, 60.16, 58.85, 53.7, 54.95, 52.61, 54.55, 53.49, 37.89, 35.06, 36.71, 37.11,
	31.97, 30.07, 25.93, 31.51, 37.89, 40.48, 43.18, 39.76, 45.36, 44.13, 47.37, 51.92, 50.5, 45.36,
	50, 53.05, 51.69, 49.75, 50.74, 50, 56.52, 63.64, 63.1, 63.1, 60.94, 59.84, 62.69, 59.68, 66.22,
	59.35, 61.24, 63.1, 57.81, 56.14, 54.13, 59.51, 58.51, 58.51, 59.35, 51.92, 52.83, 53.49, 55.75,
	56.14, 52.38, 54.55, 59.02, 52.15, 58.51, 65.16, 64.03, 62.12, 62.12, 63.5, 54.75, 60, 58.33,
	59.51, 61.83, 65.52, 35.48, 35.48, 44.44, 44.44, 40.48, 39.02, 42.53, 40.83, 40.12, 45.05,
	46.81, 50.98, 47.37, 47.92, 44.75, 44.44, 42.53, 42.53, 45.36, 40.83, 46.81, 46.52, 53.7, 51.22,
	42.2, 47.37, 46.24, 51.46, 45.65, 52.38, 56.52, 55.16, 62.12, 60, 60.78, 62.55, 61.83, 63.37,
	65.16, 60.94, 64.66, 64.41, 64.91, 69.7, 74.81, 72.9, 68.45, 63.24, 62.96, 68.25, 62.12, 63.77,
	63.9, 65.28, 60.94, 50, 53.92, 53.7, 56.33, 54.34, 65.75, 73.05, 66.44, 68.05, 65.64, 66.44,
	68.25, 69.88, 62.55, 67.11, 68.55, 66.89, 71.26, 62.69, 64.03, 58.85, 52.15, 57.26, 57.98,
	58.68, 55.36, 53.7, 55.16, 57.08, 56.9, 54.34, 52.83, 53.92, 53.7, 55.36, 59.51, 58.51, 63.77,
	65.4, 67.95, 71.18, 70.41, 71.91, 65.28, 62.12, 55.56, 47.64, 40.48, 51.46, 50.74, 45.65, 47.92,
	51.92, 47.64, 48.72, 51.69, 52.38, 35.9, 33.77, 37.11, 40.12, 42.2, 41.18, 39.39, 38.65, 40.83,
	37.11, 35.48, 42.53, 46.81, 45.36, 47.92, 52.15, 52.38, 48.98, 49.49, 46.52, 48.45, 57.08,
	52.38, 52.38, 56.33, 47.09, 47.09, 49.49, 52.83, 53.05, 54.34, 49.49, 40.48, 37.11, 41.52, 43.5,
	44.13, 44.13, 40.48, 43.5, 42.2, 48.45, 44.44, 47.64, 45.95, 40.83, 43.18, 39.76, 37.11, 42.53,
	36.31, 40.48, 37.89, 34.21, 32.43, 29.08, 37.11, 45.65, 48.45, 52.38, 48.45, 54.13, 53.49,
	64.29, 65.87, 61.98, 59.35, 57.45, 60.94, 57.98, 51.22, 52.15, 59.51, 61.98, 54.75, 53.7, 53.05,
	28.06, 28.06, 27.54, 27.01, 24.81, 27.54, 26.47, 30.07, 30.07, 33.33, 32.43, 41.52, 44.13,
	37.11, 35.9, 35.9, 33.33, 33.33, 32.43, 31.51, 28.57, 28.06, 30.07, 31.51, 31.97, 30.07, 42.2,
	38.65, 38.27, 38.27, 46.24, 50, 55.56, 59.51, 60.78, 62.12, 55.75, 58.85, 55.75, 63.24, 66.44,
	64.54, 68.65, 70.41, 71.91, 73.47, 75, 76.13, 77.17, 75.73, 79.8, 82.61, 82.58, 68.85, 66.67,
	67.32, 58.51, 60, 62.55, 60.32, 55.36, 50.98, 48.72, 44.13, 42.53, 62.12, 56.71, 52.15, 56.33,
	53.92, 57.81, 61.24, 62.12, 60.32, 60.32, 59.35, 61.24, 48.72, 46.52, 40.83, 40.48, 39.02,
	31.51, 30.56, 30.07, 27.54, 27.01, 35.06, 31.97, 30.56, 39.02, 45.05, 46.81, 45.65, 44.75,
	46.52, 41.86, 41.18, 40.83, 47.09, 51.69, 54.34, 56.52, 54.13, 57.26, 54.13, 57.08, 62.55,
	62.96, 64.03, 64.91, 55.16, 55.56, 55.95, 50, 51.69, 48.45, 45.65, 41.18, 39.39, 40.83, 43.5,
	41.86, 54.75, 74.03, 75.96, 70.33, 71.35, 61.83, 58.68, 60, 50.98, 52.83, 51.69, 61.09, 57.26,
	60.16, 52.61, 43.18, 46.24, 50.5, 51.69, 54.34, 59.68, 49.24, 44.44, 42.86, 47.64, 51.92, 53.05,
	56.71, 60.16, 59.02, 59.84, 61.09, 62.55, 65.03, 64.66, 59.35, 52.83, 48.98, 46.81, 48.19,
	51.22, 48.19, 46.52, 53.05, 51.22, 54.13, 61.09, 62.41, 60, 56.71, 57.81, 57.63, 47.92, 49.24,
	55.56, 54.34, 55.75, 50.25, 45.65, 50.74, 52.83, 48.45, 35.06, 32.89, 30.56, 33.33, 34.64,
	33.77, 36.71, 37.11, 41.52, 44.75, 44.13, 45.36, 43.82, 46.52, 47.09, 39.02, 45.65, 48.45,
	52.61, 54.95, 58.68, 61.39, 64.16, 61.39, 52.15, 50, 45.95, 48.19, 39.39, 39.39, 37.89, 35.48,
	39.39, 35.48, 33.33, 37.11, 39.76, 42.2, 47.09, 39.02, 40.48, 35.9, 41.18, 42.53, 39.39, 36.31,
	37.5, 32.89, 31.97, 31.51, 35.06, 32.89, 28.06, 37.89, 48.72, 49.24, 41.86, 36.31, 35.06, 35.06,
	34.64, 45.95, 42.53, 45.95, 49.49, 48.45, 59.84, 61.98, 65.99, 66.44, 69.04, 68.25, 72.75,
	71.99, 71.75, 67.74, 60.78, 65.16, 67.11, 69.42, 62.12, 67.74, 69.97, 71.1, 71.26, 71.59, 73.47,
	75.31, 71.99, 74.87, 73.4, 71.91, 64.41, 65.03, 69.33, 69.51, 67.95, 63.1, 63.24, 62.41, 63.37,
	60.47, 65.75, 68.65, 65.75, 43.82, 39.76, 37.11, 43.82, 45.95, 43.5, 45.36, 47.37, 41.86, 44.75,
	44.44, 46.24, 49.24, 45.05, 52.15, 51.92, 55.16, 56.33, 57.08, 57.98, 54.95, 41.18, 41.86, 43.5,
	45.95, 44.75, 42.2, 29.58, 29.58, 33.33, 32.43, 33.77, 38.65, 40.48, 38.65, 38.27, 38.65, 33.33,
	41.18, 47.09, 43.5, 44.75, 41.18, 41.18, 33.77, 32.43, 31.97, 31.03, 31.51, 28.57, 26.47, 30.07,
	33.77, 36.71, 31.51, 31.03, 27.01, 25.93, 26.47, 24.24, 21.26, 29.58, 27.54, 37.89, 40.83,
	34.64, 33.33, 40.83, 52.83, 53.05, 54.13, 52.61, 57.81, 60.32, 58.68, 59.84, 53.49, 54.95,
	52.83, 46.52, 44.44, 45.05,
];
