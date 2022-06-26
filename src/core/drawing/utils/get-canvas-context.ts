export const getCanvasContext = (
	canvasRef: React.RefObject<HTMLCanvasElement>
): CanvasRenderingContext2D | null | undefined => {
	return canvasRef.current?.getContext("2d");
};
