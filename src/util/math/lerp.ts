export const lerp = (value: number, min: number, max: number): number => {
	return (value - min) / (max - min);
};

export default lerp;
