/**
 * Information based on which we can calculate the size & position of rectangle
 * Each property represents a position of a side on X or Y axis
 *
 * X and Y axes are defined as:
 *
 * S ------> X
 * |
 * |
 * v
 * Y
 *
 * where S = (0,0) point
 */
export interface RectangleSidePositions {
	/** position of the left side on X axis */
	left: number;
	/** position of the right side on X axis */
	right: number;
	/** position of the top side on Y axis */
	top: number;
	/** position of the bottom side on Y axis */
	bottom: number;
}

export enum Side {
	left = "left",
	right = "right",
	top = "top",
	bottom = "bottom",
}
